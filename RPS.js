let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const aiChoice = document.querySelector("#ai");


const genCompChoice = () => {
   //rock,paper,scissors
   const options =["Rock" , "Paper", "Scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   aiChoice.innerText = `Computer chose ${options[randIdx]}`;
   return options[randIdx];
};


const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw , Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice, compChoice) => {
   if(userWin)
     {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
      msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    }
    else 
      {
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose");
       msg.innerText = `You Lose. ${compChoice} beats  your ${userChoice}`;
       msg.style.backgroundColor = "red";
       msg.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.6)";
    }
};


const playGame = (userChoice) => {
   console.log("user choice = ", userChoice);
   //generate comp choice --modular function
   const compChoice = genCompChoice();
   console.log("comp choice = ", compChoice);

   if(userChoice === compChoice)
   {
     drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "Rock")
    {
        userWin = compChoice === "Paper" ? false : true ;
    }
    else if(userChoice === "Paper")
    {
        userWin = compChoice === "Scissors" ? false : true;
    }
    else 
    {
        userWin = compChoice ==="Rock" ? false : true;
    }

    showWinner(userWin , userChoice, compChoice);
   }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
    //    console.log("choice was clicked" , choiceId);
       playGame(userChoice);
    });
});

