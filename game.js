window.alert("welcome to game of | STONE | PAPER | SCISSOR |");
let text = document.querySelector(".centered-text");

const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
const uscore = document.querySelector("#uscore");
const cscore = document.querySelector("#cscore");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let choiceid = choice.getAttribute("id");
    play(choiceid);
  });
});

const compchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rd = Math.floor(Math.random() * 3);
//   console.log(rd);
  return options[rd];
};
const showWinner = (uwin, choiceid, cchoice) => {
  if (uwin === true) {
    // console.log("you win");
    text.innerText = `You win! ${choiceid} beats ${cchoice}`;
    text.style.backgroundColor="green";
    text.style.color="white";
    userScore++;
    uscore.innerText = userScore;
  } else {
    // console.log("you lose");
    text.innerText = `You Lose! ${cchoice} beats ${choiceid}`;
    text.style.backgroundColor="red";
    text.style.color="white";
    compScore++;
    cscore.innerText = compScore;
  }
};

const play = (choiceid) => {
  const cchoice = compchoice();
//   console.log(choiceid);
//   console.log(cchoice);
  if (choiceid === cchoice) {
    // console.log("DRAW");
    text.innerText = "DRAW";
      text.style.backgroundColor="#219ebc";
    text.style.color="#023047";
    
  } else {
    let uwin = true;
    if (choiceid === "paper") {
      uwin = cchoice === "rock" ? true : false;
    } else if (choiceid === "rock") {
      uwin = cchoice === "scissor" ? true : false;
    } else {
      uwin = cchoice === "paper" ? true : false;
    }
    showWinner(uwin, choiceid, cchoice);
  }
};
