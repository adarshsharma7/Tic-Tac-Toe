let boxes=document.querySelectorAll(".ticTakToe")
let resetBtn=document.querySelector(".resetBtn")
let newGameBtn=document.querySelector(".newgameBtn")
let msg=document.querySelector(".msg")
let enterName=document.querySelector(".enterName")
let submitName=document.querySelector(".submitName")
let submitNameO=document.querySelector(".submitNameO")
let enterNameO=document.querySelector(".enterNameO")
let boxCount=0;
let turnX=true;
let X;
let O;
// let X=prompt("name for X")
// let O=prompt("name for O")
const disableBoxes=()=>{
  for (const iterator of boxes) {
   boxCount=0;
      iterator.disabled=true
  }
}
const startforO=()=>{
  document.querySelector(".formO").style.display="block"
  enterNameO.placeholder="Enter Name For O"
  submitNameO.addEventListener("click",(e)=>{
     O=enterNameO.value
     e.preventDefault()
     document.querySelector(".formO").style.display="none"
     document.querySelector(".player1").innerHTML=`Player1(X)=${X}`
     document.querySelector(".player2").innerHTML=`Player2(O)=${O}`
     enableBox()
  })
}
const startforX=async()=>{

  disableBoxes()
  msg.style.display="none"
  
  document.querySelector(".formO").style.display="none"
  enterName.placeholder="Enter Name For X"
  document.querySelector(".formX").style.display="block"
   submitName.addEventListener("click",(e)=>{
   X=enterName.value

   e.preventDefault()
   document.querySelector(".formX").style.display="none"
  startforO()
})
}
startforX()
 

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
// let boxCount=0;
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
// const disableBoxes=()=>{
//    for (const iterator of boxes) {
//     boxCount=0;
//        iterator.disabled=true
//    }
// }
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
                  console.log(X)
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
    const newgame=()=>{
      startforX()
    }
  resetBtn.addEventListener("click",resetGame)

  newGameBtn.addEventListener("click",newgame)
   

}
