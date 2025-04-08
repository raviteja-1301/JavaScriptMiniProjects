let myBoxs = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".reset");
let winpt = document.querySelector("p");
let msgcnt = document.querySelector(".megcontainer");

let turn0 = true;
let count = 0;

let winpattns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

const resetgame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msgcnt.classList.add("hide");
};

myBoxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
        count++;
        if (count == 9) {
            resetgame();
            desableboxes();
            msgcnt.classList.remove("hide");
            winpt.innerText = `Its a draw! \n To start new game click on Reset.`;
        }
    });
});

const checkwinner = () => {
    for (let pattern of winpattns) {
        let pos1val = myBoxs[pattern[0]].innerText;
        let pos2val = myBoxs[pattern[1]].innerText;
        let pos3val = myBoxs[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                msgcnt.classList.remove("hide");
                winpt.innerText = `Congrats winner is ${pos1val} \n To start new game click on Reset.`;
                desableboxes();
                return;
            }
        }
    }
};

const desableboxes = () => {
    for (let box of myBoxs) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of myBoxs) {
        box.disabled = false;
        box.innerText = "";
    }
};

rstBtn.addEventListener("click", resetgame);