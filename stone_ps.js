let r=document.querySelector("#rock");
let p=document.querySelector("#paper");
let s=document.querySelector("#scissor")
let UserWinCount=0;
let ComputerWinCount=0;
let rand=-1;
let scoreu=document.querySelector("#scoreuser");
let scorec=document.querySelector("#scorecomputer");
let rg=document.querySelector(".reset");

rg.addEventListener("click",()=>{
    UserWinCount=0;
    ComputerWinCount=0;
    scorec.innerHTML=0;
    scoreu.innerHTML=0;
});
function update(){
    scoreu.innerHTML=UserWinCount;
    scorec.innerHTML=ComputerWinCount;
}
function PlayerPlay(u){
    rand = Math.floor(Math.random() * 3);
    if (rand==u){
        drawbar();
    }
    else if ((rand==1 && u==0) || (u==1 && rand==2) || (u==2 && rand==0)){
        losebar();
        ComputerWinCount++;
    }
    else {
        winbar();
        UserWinCount++;
    }
    update();
}
r.addEventListener("click",()=>{
   PlayerPlay(0);

});
p.addEventListener("click",()=>{
   PlayerPlay(1)
});
s.addEventListener("click",()=>{
   PlayerPlay(2);
});
function drawbar(){
    let dr=document.querySelector(".bar");
    dr.innerHTML="it is a draw";
    dr.style.backgroundColor="black";
};
function winbar(){
    let wb=document.querySelector(".bar");
    if (rand==0){
        wb.innerHTML="You WIN! computer chooses rock";
    }
    else if (rand==1){
        wb.innerHTML="You WIN! computer chooses paper";
    }
    else{
        wb.innerHTML="You WIN! computer chooses scissor";
    }
    wb.style.backgroundColor="green";
    
}
function losebar(){
    let lb=document.querySelector(".bar");
    if (rand==0){
        lb.innerHTML="You lose! computer chooses rock";
    }
    else if (rand==1){
        lb.innerHTML="You lose! computer chooses paper";
    }
    else{
        lb.innerHTML="You lose! computer chooses scissor";
    }
    lb.style.backgroundColor="red";
}
