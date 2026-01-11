let but=document.querySelectorAll(".box");
let newg=document.querySelector(".newgame");
let reset=document.querySelector(".reset");
let ren=0;
let turn=0;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let flag=0;
let count=0;
for(let x of but){
    x.addEventListener("click",()=>{
        console.log("you had clicked");
        if (turn==0 && flag==0){
            if (x.innerHTML==""){
                x.innerHTML="X";
                turn=1;
                count++;
            }
        }
        else if(turn==1 && flag==0){
            if (x.innerHTML==""){
                x.innerHTML="O";
                turn=0;
                count++;
            }
        }
        if (flag==0){
            winner();
        }
        if (count==9 && flag==0){
            draw();
            flag=1;
        }
        
    });

}

reset.addEventListener("click",()=>{
    turn=0;
    count=0;
    flag=0;
    removebar();
    ren=0;
    change();

});
newg.addEventListener("click",()=>{
    turn=0;
    count=0;
    flag=0;
    removebar();
    ren=0;
    change();

});
function removebar(){
    if (ren==1){
        let reb1=document.querySelector("#bar");
        reb1.remove();
    }
    if (ren==2){
        let reb2=document.querySelector("#dbar");
        reb2.remove();
    }
    
}
function change(){
    for(let z of but){
        z.disabled=false;
        z.innerText="";
        z.classList.remove("winBox");
    }
}
function winner(){
    for(let y of arr){
        if (but[y[0]].innerHTML!="" && but[y[1]].innerHTML!="" && but[y[2]].innerHTML!="" && but[y[0]].innerHTML==but[y[1]].innerHTML && but[y[2]].innerHTML==but[y[1]].innerHTML){
            // console.log(`winner ${turn}`);
            let bar=document.createElement("div");
            if (turn==0){
            bar.innerText='winner is player O';
            }
            else{
                bar.innerText='winner is player X';
            }
             but[y[0]].classList.add("winBox");
             but[y[1]].classList.add("winBox");
             but[y[2]].classList.add("winBox");
            bar.style.backgroundColor="white";
            bar.style.width="300px"
            bar.style.height="50px"
            bar.style.display="flex";
            bar.style.justifyContent="center"
            bar.style.alignItems="center"
            bar.style.fontSize="20px"
            bar.style.borderRadius="20px"
            bar.style.margin="40px auto"
            bar.id="bar";
            document.querySelector(".head1").after(bar);
            flag=1;
            ren=1;
            newg.style.display="block";
            
        }
    }
}
function draw(){
    console.log("hello")
    let dbar=document.createElement("div");
    dbar.innerText="DRAW";
    dbar.style.backgroundColor="white";
    dbar.style.width="300px"
    dbar.style.height="50px"
    dbar.style.display="flex";
    dbar.style.justifyContent="center"
    dbar.style.alignItems="center"
    dbar.style.fontSize="25px"
    dbar.style.borderRadius="20px"
    dbar.style.margin="40px auto"
    dbar.id="dbar";
    document.querySelector(".head1").after(dbar);
    newg.style.display="block";
    ren=2;
}


