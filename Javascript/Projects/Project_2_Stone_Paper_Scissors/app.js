let userscore = 0;
let compscore = 0;
let msg = document.querySelector(".msg");

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

let playgame = (userchoice) => {
  let compchoice = gencompchoice();
  if (userchoice == compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice == "Rock") {
      userwin = compchoice == "Paper" ? false : true;
    } else if (userchoice == "Paper") {
      userwin = compchoice == "Scissors" ? false : true;
    } else {
      userwin = compchoice == "Rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

let gencompchoice = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};

let drawgame = () => {
  msg.innerText = "Game Was Drawn! Play Again";
  msg.style.backgroundColor = "#081b31";
};

let showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! ${userchoice} Beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You lose! ${compchoice} Beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
