"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/** Original chrome/glass software architecture, assembled by scroll. */
const threeReady=Promise.all([import("three"),import("three/addons/geometries/RoundedBoxGeometry.js"),import("three/addons/environments/RoomEnvironment.js"),import("three/addons/utils/BufferGeometryUtils.js")]);
export function ScrollSculpture() {
  const host=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let gone=false,dispose=()=>{};
    threeReady.then(async([T,{RoundedBoxGeometry},{RoomEnvironment},{mergeGeometries}])=>{
      if(gone||!host.current)return;
      const el=host.current, story=document.querySelector<HTMLElement>(".home-story")!;
      let renderer:InstanceType<typeof T.WebGLRenderer>;
      try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:"high-performance"})}catch{el.classList.add("scene-unavailable");return}
      renderer.setClearColor(0,0);renderer.setPixelRatio(Math.min(devicePixelRatio,1.35));renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.85;renderer.shadowMap.enabled=true;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.type=T.PCFSoftShadowMap;el.appendChild(renderer.domElement);
      const scene=new T.Scene(), camera=new T.PerspectiveCamera(34,innerWidth/innerHeight,.1,100);camera.position.set(0,0,9);
      const pm=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pm.fromScene(room,.03);scene.environment=env.texture;
      const group=new T.Group();scene.add(group);
      const pieces:{mesh:InstanceType<typeof T.Group>;base:InstanceType<typeof T.Vector3>;spread:InstanceType<typeof T.Vector3>;turn:InstanceType<typeof T.Euler>;i:number}[]=[];
      const SEG=innerWidth<1024?24:40,SPH=innerWidth<1024?14:24;
      const geometries:InstanceType<typeof T.BufferGeometry>[]=[],materials:InstanceType<typeof T.Material>[]=[],textures:InstanceType<typeof T.Texture>[]=[];
      const metal=new T.MeshPhysicalMaterial({color:0x7a8ea8,metalness:1,roughness:.25,clearcoat:1,iridescence:.22,iridescenceIOR:1.35});
      const gold=new T.MeshPhysicalMaterial({color:0xb79a65,metalness:1,roughness:.23,clearcoat:1});
      const dark=new T.MeshPhysicalMaterial({color:0x0b1524,metalness:.65,roughness:.3,clearcoat:1});
      const glass=new T.MeshPhysicalMaterial({color:0x4476aa,metalness:.15,roughness:.12,transparent:true,opacity:.27,side:T.DoubleSide});
      const luminous=new T.MeshBasicMaterial({color:0x8abfff});materials.push(metal,gold,dark,glass,luminous);
      const box=(parent:InstanceType<typeof T.Group>,w:number,h:number,d:number,x:number,y:number,z:number,mat:InstanceType<typeof T.Material>=metal)=>{const g=new RoundedBoxGeometry(w,h,d,3,Math.min(.07,h*.3));geometries.push(g);const m=new T.Mesh(g,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m};
      const sphere=(parent:InstanceType<typeof T.Group>,r:number,x:number,y:number,z:number,mat:InstanceType<typeof T.Material>=metal)=>{const g=new T.SphereGeometry(r,SPH,Math.max(8,SPH-4));geometries.push(g);const m=new T.Mesh(g,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m};
      const layers=Array.from({length:4},(_,i)=>{const layer=new T.Group(),base=new T.Vector3(0,-1.24+i*.71,0);layer.position.copy(base);group.add(layer);pieces.push({mesh:layer,base,spread:new T.Vector3((i%2?1:-1)*(.35+i*.06),(i-1.5)*.58,(i%2?-.3:.3)),turn:new T.Euler((i-1.5)*.045,(i%2?1:-1)*.18,(i-1.5)*.045),i:i*3});return layer});
      // Data foundation: three connected database cylinders on a precision tray.
      box(layers[0],2.75,.24,1.85,0,0,0,dark);
      box(layers[0],2.78,.055,1.88,0,.145,0,metal);
      for(let i=0;i<3;i++){const g=new T.CylinderGeometry(.29,.29,.27,SEG);geometries.push(g);const m=new T.Mesh(g,i===1?gold:dark);m.position.set((i-1)*.77,.2,0);layers[0].add(m);for(let j=0;j<3;j++){const ringG=new T.TorusGeometry(.294,.012,8,SEG);geometries.push(ringG);const ring=new T.Mesh(ringG,luminous);ring.rotation.x=Math.PI/2;ring.position.set((i-1)*.77,.12+j*.08,0);layers[0].add(ring)}}
      // API layer: a visible network, not a decorative mystery shape.
      box(layers[1],2.75,.22,1.85,0,0,0,dark);box(layers[1],2.78,.045,1.88,0,.125,0,metal);
      for(let i=0;i<5;i++){const x=(i-2)*.48,z=i%2?.42:-.42;sphere(layers[1],.11,x,.19,z,i===2?gold:metal);box(layers[1],.5,.018,.025,x+.23,.12,z,luminous);box(layers[1],.025,.018,.85,x,.12,0,luminous)}
      // Build layer: individual chrome modules assembling around a gold core.
      box(layers[2],2.75,.22,1.85,0,0,0,dark);box(layers[2],2.78,.045,1.88,0,.125,0,metal);
      for(let i=0;i<3;i++)for(let j=0;j<2;j++){box(layers[2],.66,.3,.56,(i-1)*.8,.31,(j-.5)*.72,i===1?gold:dark);box(layers[2],.53,.035,.43,(i-1)*.8,.477,(j-.5)*.72,i===1?metal:dark);for(let k=0;k<5;k++)for(const side of [-1,1])box(layers[2],.05,.025,.045,(i-1)*.8+side*.35,.23,(j-.5)*.72+(k-2)*.09,gold);}
      // Interface: an original spatial browser panel with a restrained UI.
      const ui=document.createElement("canvas");ui.width=1024;ui.height=590;const c=ui.getContext("2d")!;c.fillStyle="#07101f";c.fillRect(0,0,1024,590);c.strokeStyle="#334a6c";c.lineWidth=2;c.beginPath();c.moveTo(0,66);c.lineTo(1024,66);c.stroke();for(let i=0;i<3;i++){c.beginPath();c.arc(34+i*25,34,6,0,Math.PI*2);c.fillStyle=i===0?"#d9bc85":"#5a7193";c.fill()}c.fillStyle="#9eb5d4";c.font="18px monospace";c.fillText("PRODUCT / INTERFACE",600,40);c.fillStyle="#dfc48d";c.fillRect(38,105,185,12);c.fillStyle="#d9e7f8";c.fillRect(38,143,540,25);c.fillStyle="#627f9f";c.fillRect(38,186,420,9);c.fillRect(38,209,365,9);for(let i=0;i<3;i++){c.fillStyle=["#193456","#1f4047","#3a3550"][i];c.fillRect(38+i*320,275,295,245);c.fillStyle="#8eafd6";c.fillRect(60+i*320,305,125,8);for(let j=0;j<5;j++){c.fillStyle=j===2?"#cfb379":"#486d99";c.fillRect(65+i*320+j*46,460-j*20,27,30+j*20)}}
      const tex=new T.CanvasTexture(ui);tex.colorSpace=T.SRGBColorSpace;textures.push(tex);const uiMaterial=new T.MeshBasicMaterial({map:tex});materials.push(uiMaterial);
      box(layers[3],3.06,1.88,.25,0,.55,-.18,dark);box(layers[3],2.99,1.81,.055,0,.55,-.023,metal);box(layers[3],2.86,1.68,.035,0,.55,.015,dark);const screenG=new T.PlaneGeometry(2.77,1.59);geometries.push(screenG);const screen=new T.Mesh(screenG,uiMaterial);screen.position.set(0,.55,.037);layers[3].add(screen);
      // Machined corner fasteners, inset side vents and illuminated status strips.
      for(let i=0;i<3;i++){
        for(const x of [-1.23,1.23])for(const z of [-.78,.78]){const g=new T.CylinderGeometry(.035,.035,.02,16);geometries.push(g);const screw=new T.Mesh(g,metal);screw.position.set(x,.18,z);layers[i].add(screw);box(layers[i],.039,.003,.006,x,.193,z,dark);}
        for(let k=0;k<8;k++)box(layers[i],.1,.035,.008,-.8+k*.22,-.015,.93,metal);
        box(layers[i],.28,.018,.014,.97,.06,.94,luminous);
        for(const x of [-1.16,1.16])for(const z of [-.68,.68]){box(layers[i],.085,.37,.085,x,.34,z,metal);sphere(layers[i],.055,x,.53,z,gold);}
      }
      // A transparent technical shell with real edge thickness and polished rails.
      box(layers[1],.024,.45,1.55,-1.34,.35,0,glass);box(layers[1],.024,.45,1.55,1.34,.35,0,glass);
      // Ghosted blueprint chassis makes the planning phase visually distinct.
      const blueprintG=new T.EdgesGeometry(new T.BoxGeometry(2.95,3.2,1.9));geometries.push(blueprintG);const blueprintMat=new T.LineBasicMaterial({color:0x689bd6,transparent:true,opacity:.2});materials.push(blueprintMat);const blueprint=new T.LineSegments(blueprintG,blueprintMat);blueprint.position.y=.05;group.add(blueprint);
      // Small floating code frames tie the engine to software creation.
      const label=(word:string)=>{const cn=document.createElement("canvas");cn.width=512;cn.height=128;const ctx=cn.getContext("2d")!;ctx.fillStyle="#091323";ctx.fillRect(0,0,512,128);ctx.strokeStyle="#526785";ctx.lineWidth=3;ctx.strokeRect(1,1,510,126);ctx.fillStyle="#d7c29d";ctx.font="32px monospace";ctx.textAlign="center";ctx.fillText(word,256,77);const tx=new T.CanvasTexture(cn);tx.colorSpace=T.SRGBColorSpace;textures.push(tx);const mt=new T.MeshBasicMaterial({map:tx});materials.push(mt);const g=new T.PlaneGeometry(1.45,.31);geometries.push(g);return new T.Mesh(g,mt)};
      ["DATABASE","API / LOGIC","< / > BUILD"].forEach((text,i)=>{const tag=label(text);tag.position.set(0,-.05,.973);layers[i].add(tag)});
      // Merge repeated machined details by layer/material: same appearance,
      // far fewer draw calls and shadow passes on phones.
      for(const layer of layers){const batches=new Map<InstanceType<typeof T.Material>,{meshes:InstanceType<typeof T.Mesh>[];parts:InstanceType<typeof T.BufferGeometry>[]} >();layer.updateMatrixWorld(true);for(const obj of [...layer.children]){if(!(obj instanceof T.Mesh)||Array.isArray(obj.material)||!(obj.material instanceof T.MeshPhysicalMaterial||obj.material===luminous)||obj.material===glass)continue;obj.updateMatrix();const g=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();g.applyMatrix4(obj.matrix);const batch=batches.get(obj.material)||{meshes:[],parts:[]};batch.meshes.push(obj);batch.parts.push(g);batches.set(obj.material,batch)}for(const [material,batch]of batches){const merged=mergeGeometries(batch.parts as Parameters<typeof mergeGeometries>[0]);batch.parts.forEach(g=>g.dispose());if(!merged)continue;batch.meshes.forEach(m=>layer.remove(m));geometries.push(merged);const mesh=new T.Mesh(merged,material);mesh.castShadow=true;mesh.receiveShadow=true;layer.add(mesh)}}
      const cool=new T.DirectionalLight(0x86b7ff,2);cool.position.set(-3,2,4);scene.add(cool);const warm=new T.DirectionalLight(0xffecd3,3.8);warm.position.set(4,3,2);warm.castShadow=true;warm.shadow.mapSize.set(innerWidth<1024?512:1024,innerWidth<1024?512:1024);warm.shadow.camera.left=-5;warm.shadow.camera.right=5;warm.shadow.camera.top=6;warm.shadow.camera.bottom=-5;warm.shadow.normalBias=.025;warm.shadow.bias=-.0003;warm.shadow.radius=4;scene.add(warm);const rim=new T.DirectionalLight(0x537fff,4);rim.position.set(2,-1,-3);scene.add(rim);
      const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
      let width=innerWidth,heightPx=innerHeight,mobile=width<1024,target=0,progress=0,px=0,py=0;
      let chapters: {top:number;bottom:number;side:number;stage:HTMLElement;center:number}[]=[];
      const measure=()=>{width=innerWidth;heightPx=innerHeight;mobile=width<1024;renderer.setSize(width,heightPx);camera.aspect=width/heightPx;camera.updateProjectionMatrix();chapters=Array.from(story.querySelectorAll<HTMLElement>(".story-chapter")).map(c=>{const stage=c.querySelector<HTMLElement>(".story-stage")!,r=stage.getBoundingClientRect();return{top:c.getBoundingClientRect().top+scrollY,bottom:c.getBoundingClientRect().bottom+scrollY,side:c.dataset.side==="left"?-1:1,stage,center:r.top+scrollY+r.height/2}});};
      measure();const ro=new ResizeObserver(measure);ro.observe(story);addEventListener("resize",measure);
      const trigger=ScrollTrigger.create({trigger:story,start:"top top",end:"bottom bottom",onUpdate:s=>{target=s.progress},onRefresh:measure});
      target=trigger.progress;
      const pointer=(e:PointerEvent)=>{px=e.clientX/width-.5;py=e.clientY/heightPx-.5};addEventListener("pointermove",pointer,{passive:true});
      let last=0,lastShadow=-1,frameCount=0,pixelScale=Math.min(devicePixelRatio,1.35);
      const render=(stamp:number)=>{
        if(document.hidden||stamp-last<16)return;
        const delta=last?Math.min(stamp-last,500):16;last=stamp;
        // Adapt only resolution, never the scroll path or content layout.
        // Software WebGL and low-power phones get fewer pixels, not skipped chapters.
        if(++frameCount%8===0){const next=delta>38?Math.max(.65,pixelScale-.15):delta<21?Math.min(Math.min(devicePixelRatio,1.35),pixelScale+.05):pixelScale;if(Math.abs(next-pixelScale)>.02){pixelScale=next;renderer.setPixelRatio(pixelScale);renderer.setSize(width,heightPx)}}
        const top=story.getBoundingClientRect().top,bottom=story.getBoundingClientRect().bottom;
        if(bottom<0||top>heightPx){el.style.opacity="0";return}
        renderer.setScissorTest(false);renderer.clear();
        el.style.opacity="1";progress=reduced?1:progress+(target-progress)*(1-Math.exp(-delta/160));
        let idx=chapters.findIndex(c=>scrollY+heightPx*.5<c.bottom);if(idx<0)idx=chapters.length-1;const chapter=chapters[idx];
        const local=T.MathUtils.clamp((scrollY+heightPx*.5-chapter.top)/(chapter.bottom-chapter.top),0,1);
        let sx=width*(chapter.side===1?.76:.24),sy=heightPx*.53,scale=1;const visible=1;
        if(mobile){
          // Continuous glide between chapter slots: the model never teleports
          // or vanishes. Text stays above the canvas; the model dims briefly
          // while crossing copy between slots.
          renderer.setScissorTest(false);
          const scrollC=scrollY+heightPx*.5;
          let gi=chapters.findIndex(c=>scrollC<c.center);if(gi<0)gi=chapters.length-1;
          const from=Math.max(0,gi-1),to=gi;
          let mt=1;if(to>from)mt=gsap.parseEase("power2.inOut")(T.MathUtils.clamp((scrollC-chapters[from].center)/(chapters[to].center-chapters[from].center),0,1));
          const ra=chapters[from].stage.getBoundingClientRect(),rb=chapters[to].stage.getBoundingClientRect();
          sx=ra.left+ra.width/2+(rb.left+rb.width/2-ra.left-ra.width/2)*mt;
          sy=ra.top+ra.height/2+(rb.top+rb.height/2-(ra.top+ra.height/2))*mt;
          const sh=ra.height+(rb.height-ra.height)*mt;
          scale=sh*(width>768?.68:.60)/(heightPx/(2*Math.tan(T.MathUtils.degToRad(34)/2)*9)*(3.7+2.45*(1-progress)));
          el.style.opacity=String(1-.55*Math.sin(mt*Math.PI)*(to>from?1:0));
        }
        else{renderer.setScissorTest(false);const prev=chapters[Math.max(0,idx-1)],next=chapters[Math.min(chapters.length-1,idx+1)];let side=chapter.side;if(local<.18&&idx>0){const t=gsap.parseEase("power2.inOut")((.5+local/.36));side=prev.side+(chapter.side-prev.side)*t;sy=heightPx*(.53+Math.sin((t-.5)*Math.PI*2)*.055)}else if(local>.82&&idx<chapters.length-1){const t=gsap.parseEase("power2.inOut")(((local-.82)/.36));side=chapter.side+(next.side-chapter.side)*t;sy=heightPx*(.53+Math.sin((t-.5)*Math.PI*2)*.055)}sx=width*(.5+side*.255);scale=(width<1200?.82:1)*(.64+.2*progress);}
        if(!mobile){sy=Math.min(sy,bottom-heightPx*.32);renderer.setScissorTest(true);renderer.setScissor(0,Math.max(0,heightPx-bottom),width,Math.max(0,Math.min(heightPx,bottom)-Math.max(80,top)));}
        const vh=2*Math.tan(T.MathUtils.degToRad(34)/2)*9,vw=vh*camera.aspect;
        group.position.set((sx/width-.5)*vw,(.5-sy/heightPx)*vh,0);group.scale.setScalar(scale);
        group.rotation.set(.42+(reduced?0:py*.035),-.58+progress*.3+(reduced?0:px*.12),-.08+Math.sin(progress*Math.PI*3)*.10);
        blueprintMat.opacity=reduced?.12:.08+Math.sin(progress*Math.PI)*.37;
        uiMaterial.color.setScalar(reduced?1:.4+.6*T.MathUtils.smoothstep(progress,.18,.65));
        const shadowState=Math.round(progress*60);if(shadowState!==lastShadow){renderer.shadowMap.needsUpdate=true;lastShadow=shadowState;}

        for(const p of pieces){const completion=reduced?1:T.MathUtils.smoothstep(progress, .02+p.i*.022,.57+p.i*.025);const spread=1-completion;p.mesh.position.copy(p.base).addScaledVector(p.spread,spread);p.mesh.rotation.set(p.turn.x*spread,p.turn.y*spread,p.turn.z*spread);}
        // Hide outside its chapter on mobile; the canvas never sits over text.
        group.visible=!!visible;el.dataset.assembly=String(Math.round(progress*100));el.dataset.chapter=String(idx);el.dataset.drawCalls=String(renderer.info.render.calls);el.dataset.pixelRatio=String(pixelScale);renderer.render(scene,camera);
      };
      el.classList.add("scene-ready");renderer.setAnimationLoop(render);
      dispose=()=>{renderer.setAnimationLoop(null);trigger.kill();ro.disconnect();removeEventListener("resize",measure);removeEventListener("pointermove",pointer);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());env.dispose();room.dispose();pm.dispose();renderer.dispose();renderer.domElement.remove()};
    }).catch(()=>{host.current?.classList.add("scene-unavailable")});
    return()=>{gone=true;dispose()};
  },[]);
  return <div ref={host} className="scroll-sculpture" aria-hidden="true"/>;
}
