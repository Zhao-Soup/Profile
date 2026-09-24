(() => {
const canvas=document.getElementById("text-void");
const ctx=canvas.getContext("2d");
let lines=[];
let index=0;
let particles=[];
let lastSpawn=0;
let initialized=false;
let width=innerWidth;
let height=innerHeight;

const mobile=()=>innerWidth<760;

function resize(){
    const d=devicePixelRatio||1;
    width=innerWidth;
    height=innerHeight;
    canvas.width=width*d;
    canvas.height=height*d;
    canvas.style.width=width+"px";
    canvas.style.height=height+"px";
    ctx.setTransform(d,0,0,d,0,0);
    ctx.font=mobile()?"9px monospace":"11px monospace";
}

function duration(s){
    if(s.length<28)return 500;
    if(s.length>78)return 2000;
    return 1000;
}

function color(s){
    if(/error|warn|reject|failed|denied|delete|purge|timeout/i.test(s))return "#765042";
    if(/█|redact|fragment|undefined|null/i.test(s))return "#56603d";
    return "#62694d";
}

function spawn(text,now){
    const fontSize=mobile()?9:11;
    const maxX=Math.max(30,width-20);
    const measured=ctx.measureText(text).width;
    const x=Math.random()*Math.max(20,maxX-Math.min(measured,width-20));
    const speed=(mobile()?18:22)+Math.random()*16;
    particles.push({
        text,
        x,
        y:height+20+Math.random()*45,
        speed,
        born:now,
        color:color(text)
    });
}

function scheduleNext(now){
    if(!lines.length)return;
    const text=lines[index++%lines.length].trim();
    if(text)spawn(text,now);
    const wait=duration(text);
    setTimeout(()=>scheduleNext(performance.now()),wait);
}

function frame(now){
    ctx.clearRect(0,0,width,height);

    for(let i=particles.length-1;i>=0;i--){
        const p=particles[i];
        p.y-=p.speed/60;

        if(p.y < -24){
            particles.splice(i,1);
            continue;
        }

        // No early fade: text stays at full strength until it leaves the top.
        const nearTop=Math.max(0,(-p.y)/24);
        ctx.globalAlpha=0.78*(1-nearTop);
        ctx.fillStyle=p.color;
        ctx.fillText(p.text,p.x,p.y);
    }

    ctx.globalAlpha=1;
    requestAnimationFrame(frame);
}

addEventListener("resize",resize);
resize();

fetch("./background.txt",{cache:"no-store"})
.then(r=>{
    if(!r.ok)throw Error("background.txt "+r.status);
    return r.text();
})
.then(t=>{
    lines=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
    initialized=true;

    // Fill the plane immediately, then continue consuming background.txt
    // one line at a time according to the requested timing.
    const now=performance.now();
    const initial=Math.min(24,lines.length);
    for(let i=0;i<initial;i++){
        const text=lines[index++%lines.length];
        spawn(text,now+i*90);
    }

    scheduleNext(now);
})
.catch(()=>{
    lines=[
        "[error] background source unavailable",
        "[retry] background source",
        "[error] background source unavailable",
        "[resolve] searching previous state...",
        "[warn] previous state unavailable"
    ];
    scheduleNext(performance.now());
});

requestAnimationFrame(frame);

const clock=document.getElementById("clock");
setInterval(()=>{
    clock.textContent=new Date().toLocaleTimeString([], {hour12:false});
},1000);
clock.textContent=new Date().toLocaleTimeString([], {hour12:false});
})();
