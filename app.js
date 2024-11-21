let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-gamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno =true;
 const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const resetgame = () =>{
    turno =true;
    enableBOxes();
    msgcontainer.classList.add("hide")
 };
  
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
      if(turno){
        box.innerText = "o";
        turno = false;
       }
       else{
        box.innerText ="x";
        turno = true;
      }
      box.disabled = true ; 
      checkwinner();
    });
 });
 const disableBOxes = () =>{
    for(let box of boxes){
        box.disable = true;
    }
 }
 const enableBOxes = () =>{
    for(let box of boxes){
        box.disable = false;
        box.innerText ="";
    }
 };
 const showwinner =(winner) =>{
    msg.innerText = `congrulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBOxes();
 }

 

const checkwinner = () => {
      for(let patterns of winpattern){
        let pos1val  =boxes[patterns[0]].innerText;
        let pos2val =boxes[patterns[1]].innerText;
        let pos3val =boxes[patterns[2]].innerText;

        if (pos1val != ""&& pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val ===pos3val){
                console.log("WINNER",pos1val);
                
                showwinner(pos1val);
            }

        }
      }
}
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);