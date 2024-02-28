let boxes=document.querySelectorAll(".ticTakToe")
let resetBtn=document.querySelector(".resetBtn")
let newGameBtn=document.querySelector(".newgameBtn")
let msg=document.querySelector(".msg")
let turnX=true;
let X=prompt("name for X")
let O=prompt("name for O")


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],

    [1,4,7],

    [2,5,8],
    [2,4,6],

    [3,4,5],

    [6,7,8]
]
const noWinner=()=>{
msg.innerText="Draw Match"
msg.style.display="block"
}

const resetGame=()=>{
    turnX=true
    enableBox();
    msg.style.display="none"
}
let boxCount=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnX){
        boxCount++;
          box.style.color="#b0413e"
        box.innerText="X"
        turnX=false;
       }
       else{
        boxCount++;
        box.style.color="green"
               box.innerText="O"
               turnX=true;
       }
       
       box.disabled=true;
       if(boxCount==9){
        noWinner();
       }
      if(boxCount>4 && boxCount<10){
          checkWinner();
      }
      
     
    })
})
const disableBoxes=()=>{
   for (const iterator of boxes) {
    boxCount=0;
       iterator.disabled=true
   }
}
const enableBox=()=>{
  for (const iterator of boxes) {
    boxCount=0

    iterator.disabled=false
    iterator.innerText=""
    
  }
}

const showWinner=(winner)=>{
   msg.innerText=`congratulations,${winner} You Won The Match `
   msg.style.display="block"
   disableBoxes();
}

const checkWinner=()=>{
    for(let i of winPattern){
    
           let pos1val= boxes[i[0]].innerText
           let pos2val= boxes[i[1]].innerText 
           let pos3val= boxes[i[2]].innerText

           if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                  
               
                 if(!turnX){
                    showWinner(X);
                     // disableBoxes();
                //   console.log("winner",X)
                 }else{
                    showWinner(O);
                     // disableBoxes();
            //  console.log("winner",O)
                 }
               
            }
           }
             
    }
    // const disableBoxes =()=>{
    //     for (const i of boxes) {
    //         i.disabled=true;
    //     }
    // };
  resetBtn.addEventListener("click",resetGame)

  newGameBtn.addEventListener("click",resetGame)
   

}