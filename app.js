
const sel=[];
arr.forEach((c,idx)=>{
const b=document.createElement('button'); b.textContent='?';
b.addEventListener('click',()=>{
if(c.done||c.open) return; c.open=true; b.textContent=c.t;
sel.push({i:idx,b});
if(sel.length===2){
const [a,b2]=sel.splice(0,2);
if(arr[a.i].t===arr[b2.i].t){ arr[a.i].done=arr[b2.i].done=true; } else {
setTimeout(()=>{ arr[a.i].open=false; arr[b2.i].open=false; a.b.textContent='?'; b2.b.textContent='?'; },600);
}
if(arr.every(x=>x.done)){ alert('أحسنت!'); unlock('kidsStreak3'); }
}
});
list.appendChild(b);
});
}
newDeck();
}


// ------------------------------
// Theme toggle & Logout
// ------------------------------
function initShell(){
$('#themeToggle').addEventListener('click', ()=>{
document.documentElement.style.filter = document.documentElement.style.filter? '' : 'invert(1) hue-rotate(180deg)';
});
$('#logoutBtn').addEventListener('click', ()=>{ localStorage.removeItem('rafiq.user'); location.reload(); });
$('#loadAyah').addEventListener('click', loadAyah);
$('#favAyah').addEventListener('click', favAyah);
}


// ------------------------------
// Boot
// ------------------------------
(async function boot(){
// Restore counters/achievements
APP.state.readToday = +load('rafiq.readToday',0)||0; updateReadToday();
renderAchievements();


initAuth();
await loadChapters();
loadReciters();
bindAudio();
initVoice();
initPomodoro();
initTasbeeh();
initGeoBlocks();
initHadith();
initGroups();
initDonations();
initKids();
initShell();


// Persist readToday periodically
setInterval(()=> save('rafiq.readToday', APP.state.readToday), 5000);
})();const sel=[];
arr.forEach((c,idx)=>{
const b=document.createElement('button'); b.textContent='?';
b.addEventListener('click',()=>{
if(c.done||c.open) return; c.open=true; b.textContent=c.t;
sel.push({i:idx,b});
if(sel.length===2){
const [a,b2]=sel.splice(0,2);
if(arr[a.i].t===arr[b2.i].t){ arr[a.i].done=arr[b2.i].done=true; } else {
setTimeout(()=>{ arr[a.i].open=false; arr[b2.i].open=false; a.b.textContent='?'; b2.b.textContent='?'; },600);
}
if(arr.every(x=>x.done)){ alert('أحسنت!'); unlock('kidsStreak3'); }
}
});
list.appendChild(b);
});
}
newDeck();
}


// ------------------------------
// Theme toggle & Logout
// ------------------------------
function initShell(){
$('#themeToggle').addEventListener('click', ()=>{
document.documentElement.style.filter = document.documentElement.style.filter? '' : 'invert(1) hue-rotate(180deg)';
});
$('#logoutBtn').addEventListener('click', ()=>{ localStorage.removeItem('rafiq.user'); location.reload(); });
$('#loadAyah').addEventListener('click', loadAyah);
$('#favAyah').addEventListener('click', favAyah);
}


// ------------------------------
// Boot
// ------------------------------
(async function boot(){
// Restore counters/achievements
APP.state.readToday = +load('rafiq.readToday',0)||0; updateReadToday();
renderAchievements();


initAuth();
await loadChapters();
loadReciters();
bindAudio();
initVoice();
initPomodoro();
initTasbeeh();
initGeoBlocks();
initHadith();
initGroups();
initDonations();
initKids();
initShell();


// Persist readToday periodically
setInterval(()=> save('rafiq.readToday', APP.state.readToday), 5000);
})();
