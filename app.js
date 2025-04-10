let btn = document.querySelectorAll(".btn");
let st = document.querySelector(".start");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newGame = document.querySelector(".new-game");

let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let turnO = true; 
let count = 0;

btn.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerHTML = "O";
            box.classList.add("xColor");
            box.classList.remove("yColor");
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.classList.add("yColor");
            box.classList.remove("xColor");
            turnO = true;
        }     
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const resetGame = () => {
    enableBox();
    newGame.classList.add("hide");
    msg.classList.add("hide");
    for (let box of btn) {
        box.innerText = "";
    }
}

reset.addEventListener("click",resetGame)
st.addEventListener("click",resetGame)

const disableBox = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of btn) {
        box.disabled = false;
    }
}

const winner = (winner) => {
    newGame.classList.remove("hide");
    msg.classList.remove("hide");
    msg.innerText = `WINNER IS ${winner}`;
    disableBox();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                winner(pos1val);
            }
        }
    }
    if(count === 9){
        msg.innerText = "MATCH DRAAW";
        newGame.classList.remove("hide");
        msg.classList.remove("hide");
        count = 0;
    }
}


