let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("p");

let turnO = true; //playerx playerO
let count = 0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const rstgame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled =true;
        count++;

        let win = checkWin();
        if(count === 9 && !win){
            gamedraw();
        }
    });
});

const gamedraw = () => {
    msg.innerText = "Game was a Draw";
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWin = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};

const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
             showWin(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click", rstgame);
resetbtn.addEventListener("click", rstgame);