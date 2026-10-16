"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Marble bust (Poly Haven "Marble Bust 01", CC0) rendered as dark metal.
 * Desktop: raw metallic shards float unsettled, then assemble into the bust
 * with scroll (per-triangle vertex displacement driven by uProgress).
 * Mobile/tablet: the finished bust lives in the hero card only, with touch
 * drag, flick inertia and pinch zoom.
 */
const threeReady=Promise.all([
  import("three"),
  import("three/addons/loaders/GLTFLoader.js"),
  import("three/addons/environments/RoomEnvironment.js"),
]);

// Deterministic per-triangle randomness so every visit assembles identically.
const mulberry=(seed:number)=>()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};

export function ScrollSculpture() {
  const host=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let gone=false,dispose=()=>{};
    threeReady.then(async([T,{GLTFLoader},{RoomEnvironment}])=>{
      if(gone||!host.current)return;
      const el=host.current, story=document.querySelector<HTMLElement>(".home-story")!;
      let renderer:InstanceType<typeof T.WebGLRenderer>;
      try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:"high-performance"})}catch{el.classList.add("scene-unavailable");return}
      renderer.setClearColor(0,0);renderer.setPixelRatio(Math.min(devicePixelRatio,1.35));renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;renderer.shadowMap.enabled=true;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.type=T.PCFSoftShadowMap;el.appendChild(renderer.domElement);
      const scene=new T.Scene(), camera=new T.PerspectiveCamera(34,innerWidth/innerHeight,.1,100);camera.position.set(0,0,9);
      const pm=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pm.fromScene(room,.03);scene.environment=env.texture;
      const group=new T.Group();scene.add(group);
      const isMobile=innerWidth<1024;
      const geometries:any[]=[],materials:any[]=[],textures:any[]=[];
      const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Load and normalize the bust: centered, ~3.9 units tall, one mesh.
      const gltf=await new GLTFLoader().loadAsync("/models/marble-bust.glb").catch(()=>null);
      if(gone)return;
      let src:any=null,srcNormal:any=null;
      gltf?.scene.traverse(o=>{const m=o as InstanceType<typeof T.Mesh>;if(m.isMesh&&!src){src=m.geometry as InstanceType<typeof T.BufferGeometry>;const mt=m.material as InstanceType<typeof T.MeshStandardMaterial>;srcNormal=mt?.normalMap??null}});
      if(!src){el.classList.add("scene-unavailable");return}
      const geo=(src.index?src.toNonIndexed():src) as InstanceType<typeof T.BufferGeometry>;
      geo.computeBoundingBox();
      const bb=geo.boundingBox!,size=bb.getSize(new T.Vector3()),ctr=bb.getCenter(new T.Vector3());
      geo.translate(-ctr.x,-ctr.y,-ctr.z);
      const k=3.9/size.y;geo.scale(k,k,k);
      // Per-triangle pivot (centroid) + random scatter vector.
      const pos:any=geo.attributes.position,n=pos.count,rnd=mulberry(11);
      // Cluster triangles into chunky mineral pieces: every triangle in a
      // spatial cell shares the cell centroid and scatter vector, so the bust
      // breaks into rocks, not glitter, and reassembles exactly.
      const cellSize=.46,cells=new Map<string,{x:number;y:number;z:number;n:number;rx:number;ry:number;rz:number;w:number}>();
      const triC:{x:number;y:number;z:number;c:string}[]=[];
      for(let i=0;i<n;i+=3){
        const cx=(pos.getX(i)+pos.getX(i+1)+pos.getX(i+2))/3,cy=(pos.getY(i)+pos.getY(i+1)+pos.getY(i+2))/3,cz=(pos.getZ(i)+pos.getZ(i+1)+pos.getZ(i+2))/3;
        const key=Math.round(cx/cellSize)+","+Math.round(cy/cellSize)+","+Math.round(cz/cellSize);
        let cell=cells.get(key);if(!cell){let rx=rnd()*2-1,ry=rnd()*2-1,rz=rnd()*2-1;const l=Math.hypot(rx,ry,rz)||1;cell={x:0,y:0,z:0,n:0,rx:rx/l,ry:ry/l,rz:rz/l,w:rnd()};cells.set(key,cell)}
        cell.x+=cx;cell.y+=cy;cell.z+=cz;cell.n++;triC.push({x:cx,y:cy,z:cz,c:key});
      }
      for(const cell of cells.values()){cell.x/=cell.n;cell.y/=cell.n;cell.z/=cell.n}
      const pivots=new Float32Array(n*3),rands=new Float32Array(n*4);
      for(let i=0;i<n;i+=3){
        const cell=cells.get(triC[i/3].c)!;
        for(let j=0;j<3;j++){pivots.set([cell.x,cell.y,cell.z],(i+j)*3);rands.set([cell.rx,cell.ry,cell.rz,cell.w],(i+j)*4)}
      }
      geo.setAttribute("aPivot",new T.BufferAttribute(pivots,3));
      geo.setAttribute("aRand",new T.BufferAttribute(rands,4));
      geometries.push(geo);

      const uniforms={uProgress:{value:reduced?1:0},uTime:{value:0}};
      const shard=(shader:{uniforms:Record<string,unknown>;vertexShader:string;fragmentShader:string})=>{
        Object.assign(shader.uniforms,uniforms);
        shader.vertexShader=`attribute vec3 aPivot;attribute vec4 aRand;uniform float uProgress;uniform float uTime;varying float vShard;
        mat3 shardRot(vec3 a,float t){float c=cos(t),s=sin(t),i=1.-c;return mat3(i*a.x*a.x+c,i*a.x*a.y+s*a.z,i*a.x*a.z-s*a.y,i*a.y*a.x-s*a.z,i*a.y*a.y+c,i*a.y*a.z+s*a.x,i*a.z*a.x+s*a.y,i*a.z*a.y-s*a.x,i*a.z*a.z+c);}
        float shardT(){float s=aRand.w*.5;return smoothstep(s,s+.38,uProgress);}
        `+shader.vertexShader
          .replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          {float t=shardT();objectNormal=shardRot(normalize(aRand.xyz+vec3(1e-4)),(1.-t)*(2.2+aRand.w*3.4))*objectNormal;}`)
          .replace("#include <begin_vertex>",`#include <begin_vertex>
          {float t=shardT();float sp=1.-t;vShard=aRand.w;
          mat3 r=shardRot(normalize(aRand.xyz+vec3(1e-4)),sp*(2.2+aRand.w*3.4));
          vec3 rel=r*(transformed-aPivot)*mix(.42,1.,t);
          vec3 dir=normalize(aPivot*1.15+aRand.xyz*1.7);
          vec3 wob=vec3(sin(uTime*(.5+aRand.w)+aRand.w*41.),cos(uTime*(.4+aRand.x)+aRand.w*29.),sin(uTime*(.6+aRand.y)+aRand.w*53.))*.15;
          transformed=aPivot+rel+dir*sp*(1.15+aRand.w*1.35)+wob*sp;}`);
        if(shader.fragmentShader.includes("color_fragment")){
          shader.fragmentShader=`varying float vShard;\n`+shader.fragmentShader
            .replace("#include <color_fragment>",`#include <color_fragment>
            diffuseColor.rgb*=mix(vec3(1.),vec3(1.3,1.02,.62),smoothstep(.74,.96,vShard)*.8);`);
        }
      };
      const mat=new T.MeshPhysicalMaterial({color:0x9fb2ca,metalness:1,roughness:.33,clearcoat:.55,clearcoatRoughness:.4,envMapIntensity:1.15});
      if(srcNormal){mat.normalMap=srcNormal;mat.normalScale=new T.Vector2(.55,.55);textures.push(srcNormal)}
      mat.onBeforeCompile=shard;mat.customProgramCacheKey=()=>"bust-shard";
      const depth=new T.MeshDepthMaterial({depthPacking:T.RGBADepthPacking});
      depth.onBeforeCompile=shard;depth.customProgramCacheKey=()=>"bust-shard-depth";
      materials.push(mat,depth);
      const bust=new T.Mesh(geo as any,mat);bust.castShadow=true;bust.customDepthMaterial=depth;group.add(bust);

      const cool=new T.DirectionalLight(0x86b7ff,2);cool.position.set(-3,2,4);scene.add(cool);
      const warm=new T.DirectionalLight(0xffecd3,3.8);warm.position.set(4,3,2);warm.castShadow=true;warm.shadow.mapSize.set(1024,1024);warm.shadow.camera.left=-4;warm.shadow.camera.right=4;warm.shadow.camera.top=5;warm.shadow.camera.bottom=-4;warm.shadow.normalBias=.02;warm.shadow.bias=-.0002;warm.shadow.radius=4;scene.add(warm);
      const rim=new T.DirectionalLight(0x537fff,4);rim.position.set(2,-1,-3);scene.add(rim);

      let width=innerWidth,heightPx=innerHeight,mobile=width<1024,target=0,progress=0,px=0,py=0;
      let chapters: {top:number;bottom:number;side:number;stage:HTMLElement;center:number}[]=[];
      const heroStage=story.querySelector<HTMLElement>(".chapter-hero .story-stage");
      const measure=()=>{width=innerWidth;heightPx=innerHeight;mobile=width<1024;renderer.setSize(width,heightPx);camera.aspect=width/heightPx;camera.updateProjectionMatrix();chapters=Array.from(story.querySelectorAll<HTMLElement>(".story-chapter")).map(c=>{const stage=c.querySelector<HTMLElement>(".story-stage")!,r=stage.getBoundingClientRect();return{top:c.getBoundingClientRect().top+scrollY,bottom:c.getBoundingClientRect().bottom+scrollY,side:c.dataset.side==="left"?-1:1,stage,center:r.top+scrollY+r.height/2}});};
      measure();const ro=new ResizeObserver(measure);ro.observe(story);addEventListener("resize",measure);
      const trigger=ScrollTrigger.create({trigger:story,start:"top top",end:"bottom bottom",onUpdate:s=>{target=s.progress},onRefresh:measure});
      target=trigger.progress;
      const pointer=(e:PointerEvent)=>{px=e.clientX/width-.5;py=e.clientY/heightPx-.5};addEventListener("pointermove",pointer,{passive:true});

      // Touch physics for the hero bust on mobile/tablet.
      let rotY=0,velY=0,rotX=0,velX=0,userScale=1,userScaleTarget=1,dragging=false,engaged=false,bailed=false,lastX=0,lastY=0,accX=0,accY=0;
      const pointers=new Map<number,{x:number;y:number}>();let pinch0=0,pinchScale0=1;
      const inHero=(x:number,y:number)=>{if(!heroStage)return false;const r=heroStage.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom};
      const down=(e:PointerEvent)=>{if(!mobile)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
        if(pointers.size===2){const[p1,p2]=[...pointers.values()];pinch0=Math.hypot(p1.x-p2.x,p1.y-p2.y);pinchScale0=userScaleTarget;dragging=false;return}
        if(!inHero(e.clientX,e.clientY))return;dragging=true;engaged=false;bailed=false;accX=0;accY=0;lastX=e.clientX;lastY=e.clientY;velY=0;velX=0};
      const move=(e:PointerEvent)=>{if(!mobile||!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
        if(pointers.size===2){const[p1,p2]=[...pointers.values()];const d=Math.hypot(p1.x-p2.x,p1.y-p2.y);if(pinch0>0)userScaleTarget=Math.min(1.6,Math.max(.7,pinchScale0*d/pinch0));return}
        if(!dragging)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;
        if(!engaged&&!bailed){accX+=dx;accY+=dy;if(Math.abs(accX)>10&&Math.abs(accX)>Math.abs(accY)*1.2)engaged=true;else if(Math.abs(accY)>14&&Math.abs(accY)>Math.abs(accX)){bailed=true;return}else return}
        if(!engaged)return;
        rotY+=dx*.0105;rotX=Math.max(-.5,Math.min(.5,rotX+dy*.0052));
        velY=velY*.65+dx*.0105*.35;velX=velX*.65+dy*.0052*.35};
      const up=(e:PointerEvent)=>{pointers.delete(e.pointerId);if(pointers.size<2)pinch0=0;if(pointers.size===0)dragging=false;
        velY=Math.max(-.55,Math.min(.55,velY*2.6));velX=Math.max(-.3,Math.min(.3,velX*2.4))};
      addEventListener("pointerdown",down,{passive:true});addEventListener("pointermove",move,{passive:true});addEventListener("pointerup",up,{passive:true});addEventListener("pointercancel",up,{passive:true});

      // Screenshot harness: ?shot=0.35 pins assembly progress.
      const shotParam=new URLSearchParams(location.search).get("shot");
      const pinned=shotParam===null?null:parseFloat(shotParam);

      let last=0,lastShadow=-1,frameCount=0,pixelScale=Math.min(devicePixelRatio,1.35);
      const render=(stamp:number)=>{
        if(document.hidden||stamp-last<16)return;
        const delta=last?Math.min(stamp-last,500):16;last=stamp;
        if(++frameCount%8===0){const next=delta>38?Math.max(.65,pixelScale-.15):delta<21?Math.min(Math.min(devicePixelRatio,1.35),pixelScale+.05):pixelScale;if(Math.abs(next-pixelScale)>.02){pixelScale=next;renderer.setPixelRatio(pixelScale);renderer.setSize(width,heightPx)}}
        const top=story.getBoundingClientRect().top,bottom=story.getBoundingClientRect().bottom;
        if(bottom<0||top>heightPx){el.style.opacity="0";return}
        renderer.setScissorTest(false);renderer.clear();
        el.style.opacity="1";progress=pinned??(reduced?1:progress+(target-progress)*(1-Math.exp(-delta/160)));
        uniforms.uProgress.value=mobile?1:progress;uniforms.uTime.value=reduced?0:stamp/1000;
        let idx=chapters.findIndex(c=>scrollY+heightPx*.5<c.bottom);if(idx<0)idx=chapters.length-1;const chapter=chapters[idx];
        const local=T.MathUtils.clamp((scrollY+heightPx*.5-chapter.top)/(chapter.bottom-chapter.top),0,1);
        let sx=width*(chapter.side===1?.76:.24),sy=heightPx*.53,scale=1;
        if(mobile){
          if(!heroStage){el.style.opacity="0";return}
          const r=heroStage.getBoundingClientRect();
          if(r.bottom<-40||r.top>heightPx+40){el.style.opacity="0";return}
          el.style.opacity="1";
          sx=r.left+r.width/2;sy=r.top+r.height/2;
          const vhHero=2*Math.tan(T.MathUtils.degToRad(34)/2)*9;
          scale=(r.height*.84/heightPx)*vhHero/3.9;
          userScale+=(userScaleTarget-userScale)*(1-Math.exp(-delta/140));scale*=userScale;
          if(!dragging){rotY+=velY*(delta/16.7);rotX+=velX*(delta/16.7);const d=Math.exp(-delta/1200);velY*=d;velX*=d;rotX*=Math.exp(-delta/2600);}
          const vh=vhHero,vw=vh*camera.aspect;
          group.position.set((sx/width-.5)*vw,(.5-sy/heightPx)*vh,0);group.scale.setScalar(scale);
          group.rotation.set(.06+rotX,-.5+(reduced?0:stamp*.00016)+rotY,0);
          group.visible=true;el.dataset.assembly="100";el.dataset.chapter="0";el.dataset.drawCalls=String(renderer.info.render.calls);el.dataset.pixelRatio=String(pixelScale);
          renderer.render(scene,camera);return;
        }
        const prev=chapters[Math.max(0,idx-1)],next=chapters[Math.min(chapters.length-1,idx+1)];let side=chapter.side;
        if(local<.18&&idx>0){const t=gsap.parseEase("power2.inOut")((.5+local/.36));side=prev.side+(chapter.side-prev.side)*t;sy=heightPx*(.53+Math.sin((t-.5)*Math.PI*2)*.055)}else if(local>.82&&idx<chapters.length-1){const t=gsap.parseEase("power2.inOut")(((local-.82)/.36));side=chapter.side+(next.side-chapter.side)*t;sy=heightPx*(.53+Math.sin((t-.5)*Math.PI*2)*.055)}
        sx=width*(.5+side*.255);scale=(width<1200?.82:1)*(.66+.18*progress);
        sy=Math.min(sy,bottom-heightPx*.32);renderer.setScissorTest(true);renderer.setScissor(0,Math.max(0,heightPx-bottom),width,Math.max(0,Math.min(heightPx,bottom)-Math.max(80,top)));
        const vh=2*Math.tan(T.MathUtils.degToRad(34)/2)*9,vw=vh*camera.aspect;
        group.position.set((sx/width-.5)*vw,(.5-sy/heightPx)*vh,0);group.scale.setScalar(scale);
        group.rotation.set(.06+(reduced?0:py*.03),-.55+progress*1.15+(reduced?0:px*.1+stamp*.0001),0);
        const shadowState=Math.round(progress*60);if(shadowState!==lastShadow){renderer.shadowMap.needsUpdate=true;lastShadow=shadowState;}
        group.visible=true;el.dataset.assembly=String(Math.round(progress*100));el.dataset.chapter=String(idx);el.dataset.drawCalls=String(renderer.info.render.calls);el.dataset.pixelRatio=String(pixelScale);
        renderer.render(scene,camera);
      };
      el.classList.add("scene-ready");renderer.setAnimationLoop(render);
      dispose=()=>{renderer.setAnimationLoop(null);trigger.kill();ro.disconnect();removeEventListener("resize",measure);removeEventListener("pointermove",pointer);removeEventListener("pointerdown",down);removeEventListener("pointermove",move);removeEventListener("pointerup",up);removeEventListener("pointercancel",up);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());env.dispose();room.dispose();pm.dispose();renderer.dispose();renderer.domElement.remove()};
    }).catch(()=>{host.current?.classList.add("scene-unavailable")});
    return()=>{gone=true;dispose()};
  },[]);
  return <div ref={host} className="scroll-sculpture" aria-hidden="true"/>;
}
