let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      if (turnO) {
        box.innerHTML = "O";
        turnO = false;
        box.style.backgroundColor = "white";
      } else {
        box.innerHTML = "X";
        turnO = true;
        box.style.backgroundColor = "white";
      }
      box.disabled = true;
      count++;
      checkwinner();
      if (count == 9) {
        showwinner("Draw");
      }
    }
  });
});

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
      }
    }
  }
};

const showwinner = (winner) => {
  if (winner === "Draw") {
    msg.innerText = `The Game Is Drawn!!`;
  } else {
    msg.innerText = `Congratulations!! Winner Is ${winner}`;
  }
  msgcontainer.classList.remove("hide");
  disablebtns();
};

const disablebtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enablebtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "#ffffc7";
  }
  count = 0; // Reset the move count
};

const resetgame = () => {
  turnO = true;
  enablebtns();
  msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
