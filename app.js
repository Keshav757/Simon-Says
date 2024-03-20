let gameseq=[]
let userseq=[]
let started=false
let btns=['red','green','orange','blue']
let h4=document.querySelector("h4");
document.addEventListener("keypress",function (){
    if(started!=true){
        console.log("started")
        started=true;
        levelUp();   
    }
});
let level=0
let highest=0
function levelUp(){
    userseq=[]
    level++;
    h4.innerText= `Level ${level}`;
    let idx=Math.floor(Math.random()*3)
    let color=btns[idx]
    let randbtn=document.querySelector(`.${color}`)
    gameseq.push(color);
    console.log(gameseq)
    gameFlash(randbtn)
    if(highest<level){
        highest=level
    }
}

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash");
    },80)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },80)
}

function btnPress(){
    console.log("pressed")
    gameFlash(this)
    userColor=this.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1)
}

function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h4.innerHTML=`GAME OVER!<br>Your score is ${level}.<br> Your Highest Score is ${highest}.<br>Press any key to start. `
        reset();
    }
}

let allbtns=document.querySelectorAll('.btn')
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}