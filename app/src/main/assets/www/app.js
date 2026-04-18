window.onload=function(){
let c=localStorage.getItem("cookie");
if(c){document.getElementById("cookie").value=c;}
};

function toggleMenu(){
document.getElementById("menu").classList.toggle("hide");
}

function closeMenu(){
document.getElementById("menu").classList.add("hide");
}

function aboutApp(){
showStatus("FB SHAREX V2 PRO");
}

function saveCookie(){
let c=document.getElementById("cookie").value.trim();
localStorage.setItem("cookie",c);
showStatus("Cookie Saved");
}

function showStatus(t){
let s=document.getElementById("status");
s.classList.remove("hide");
s.innerText=t;
}

function showLog(t){
let l=document.getElementById("logs");
l.classList.remove("hide");
l.innerText=t;
}

async function runShare(){

let cookie=document.getElementById("cookie").value.trim();
let link=document.getElementById("link").value.trim();
let limit=document.getElementById("limit").value.trim();

if(!cookie||!link||!limit){
showStatus("Fill all fields");
return;
}

showStatus("Processing...");
showLog("Sending request...");

let url="https://vern-rest-api.vercel.app/api/fb-share?cookie="
+encodeURIComponent(cookie)
+"&link="
+encodeURIComponent(link)
+"&limit="
+encodeURIComponent(limit);

try{
let r=await fetch(url);
let t=await r.text();

if(r.ok || t.toLowerCase().includes("success")){
showStatus("SUCCESS");
showLog("Share completed");
}else{
showStatus("FAILED");
showLog("Request rejected");
}
}catch(e){
showStatus("FAILED");
showLog("Network error");
}
}
