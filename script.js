const endDate="18 July 2023 3:00 PM";
document.getElementById("main2").innerText=endDate;
// const now
const inputs=document.querySelectorAll("input")
function clock(){
    const end= new Date(endDate)
    const now= new Date()
    console.log(now);
    const diff=(end-now)/1000;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
}
setInterval(()=>{
    clock();
}
,1000);
