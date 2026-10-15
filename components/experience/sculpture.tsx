"use client";
import { useEffect, useRef } from "react";

/** CC0 Kenney laptop, downloaded and served locally. See public/models. */
export function Sculpture() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false, cleanup = () => {};
    Promise.all([import("three"), import("three/addons/environments/RoomEnvironment.js"), import("three/addons/loaders/GLTFLoader.js")]).then(async ([T, { RoomEnvironment }, { GLTFLoader }]) => {
      if (disposed || !host.current) return;
      const el = host.current;
      let renderer: InstanceType<typeof T.WebGLRenderer>;
      try { renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); } catch { return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setClearColor(0, 0);
      renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
      el.appendChild(renderer.domElement);
      const scene = new T.Scene(), camera = new T.PerspectiveCamera(34, 1, .01, 100); camera.position.set(0, .5, 8); camera.lookAt(0, 0, 0);
      const pm = new T.PMREMGenerator(renderer), room = new RoomEnvironment(), env = pm.fromScene(room, .04); scene.environment = env.texture;
      const group = new T.Group(); scene.add(group);
      const geometries: InstanceType<typeof T.BufferGeometry>[] = [], materials: InstanceType<typeof T.Material>[] = [], textures: InstanceType<typeof T.Texture>[] = [];
      const gltf = await new GLTFLoader().loadAsync("/models/kenney-laptop.glb").catch(() => null);
      if (!gltf || disposed) { renderer.dispose(); env.dispose(); room.dispose(); pm.dispose(); renderer.domElement.remove(); return; }
      const laptop = gltf.scene;
      laptop.traverse(obj => { if (obj instanceof T.Mesh) { geometries.push(obj.geometry); const old = Array.isArray(obj.material) ? obj.material : [obj.material]; const replacements = old.map(m => { materials.push(m); const mat = new T.MeshPhysicalMaterial({ color: m.name === "metal" ? 0x233954 : m.name === "metalDark" ? 0x09101f : 0x1b2e48, metalness: .65, roughness: .35, clearcoat: 1 }); materials.push(mat); return mat; }); obj.material = Array.isArray(obj.material) ? replacements : replacements[0]; } });
      const box = new T.Box3().setFromObject(laptop), center = box.getCenter(new T.Vector3()), size = box.getSize(new T.Vector3());
      laptop.position.sub(center); const rig = new T.Group(); rig.add(laptop); rig.scale.setScalar(3.55 / size.x); group.add(rig);
      // A locally drawn agency site, mapped onto the laptop's existing screen.
      const canvas = document.createElement("canvas"); canvas.width = 1024; canvas.height = 540;
      const c = canvas.getContext("2d")!; c.fillStyle = "#070c19"; c.fillRect(0, 0, 1024, 540);
      const light = c.createRadialGradient(800,220,20,800,220,600); light.addColorStop(0,"#244b7b"); light.addColorStop(1,"#070c19"); c.fillStyle=light; c.fillRect(0,0,1024,540);
      c.fillStyle="#d7be90";c.font="500 25px sans-serif";c.fillText("MALIK",50,58);c.fillStyle="#91a2bc";c.font="15px sans-serif";c.fillText("Home     Services     Work     About",560,58);
      c.fillStyle="#f1f3f8";c.font="52px sans-serif";c.fillText("Software for",50,190);c.fillStyle="#dcc69c";c.fillText("the work ahead.",50,252);
      c.fillStyle="#98aac5";c.font="20px sans-serif";c.fillText("Websites, apps and custom software",50,306);
      c.fillStyle="#dfc28e";c.fillRect(50,350,205,46);c.fillStyle="#131a29";c.font="18px sans-serif";c.fillText("Discuss a project",70,380);
      for(let i=0;i<3;i++){c.fillStyle=["#204064","#234b49","#40395c"][i];c.fillRect(50+i*310,447,280,65);c.fillStyle="#c9d3e2";c.font="19px sans-serif";c.fillText(["Web Development","Mobile Apps","AI & Automation"][i],70+i*310,486);}
      const texture = new T.CanvasTexture(canvas); texture.colorSpace = T.SRGBColorSpace; textures.push(texture);
      // Coordinates are from the CC0 model, in original mesh units (node scale .44).
      const screen = new T.Mesh(new T.PlaneGeometry(.2285, .1273), new T.MeshBasicMaterial({map:texture, side:T.DoubleSide}));
      screen.position.set(.132, .0877, -.1938);screen.rotation.x=-.4206;screen.rotation.y=0;
      const screenRoot = new T.Group(); screenRoot.scale.setScalar(1); screenRoot.add(screen);screenRoot.position.sub(center);rig.add(screenRoot);geometries.push(screen.geometry);materials.push(screen.material);
      const keys = new T.Group(); keys.position.sub(center); rig.add(keys);
      const keyGeometry = new T.BoxGeometry(.014,.0018,.010), keyMaterial = new T.MeshStandardMaterial({color:0x09111f,metalness:.3,roughness:.6}); geometries.push(keyGeometry); materials.push(keyMaterial);
      for(let row=0;row<4;row++)for(let col=0;col<12;col++){const key=new T.Mesh(keyGeometry,keyMaterial);key.position.set(.034+col*.0178,.015,-.076-row*.0165);keys.add(key);}
      const cool = new T.PointLight(0x438dff, 45, 20); cool.position.set(-3, 2, -3); scene.add(cool);
      const gold = new T.PointLight(0xffd49c, 40, 20); gold.position.set(4, 3, -2); scene.add(gold);
      const rim = new T.PointLight(0x73dcff, 30, 20); rim.position.set(2, -3, 3); scene.add(rim);
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      let visible = true, px=0, py=0, rx=.15, ry=-.42, last=0, elapsed=0;
      const draw = () => { group.rotation.set(rx, ry, -.1); renderer.render(scene,camera);el.classList.add("is-rendered"); };
      const resize = () => { renderer.setSize(el.clientWidth,el.clientHeight);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();draw(); };
      const ro = new ResizeObserver(resize);ro.observe(el);resize();
      const io = new IntersectionObserver(([e])=>{visible=e.isIntersecting});io.observe(el);
      const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5;};const leave=()=>{px=py=0};
      el.addEventListener("pointermove",move);el.addEventListener("pointerleave",leave);
      if(!reduced)renderer.setAnimationLoop(stamp=>{if(!visible||document.hidden)return;elapsed+=Math.min((stamp-last)/1000,.04);last=stamp;rx+=(.15+py*.22-rx)*.055;ry+=(-.42+px*.55+Math.sin(elapsed*.35)*.1-ry)*.055;group.position.y=Math.sin(elapsed*.65)*.12;draw()});
      cleanup=()=>{renderer.setAnimationLoop(null);ro.disconnect();io.disconnect();el.removeEventListener("pointermove",move);el.removeEventListener("pointerleave",leave);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());env.dispose();room.dispose();pm.dispose();renderer.dispose();renderer.domElement.remove();};
    }).catch(()=>{});
    return ()=>{disposed=true;cleanup()};
  },[]);
  return <div className="sculpture agency-device" ref={host} role="img" aria-label="Floating laptop displaying the Malik agency website"><div className="device-fallback" aria-hidden="true"><div>MALIK<span>Software for<br/>the work ahead.</span></div><i/></div></div>;
}
