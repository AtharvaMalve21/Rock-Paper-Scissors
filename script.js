let userScore = 0 ;
let compScore = 0 ;

let c = document.querySelectorAll(".choice") ;
let msg = document.querySelector("#msg") ;

const userScorePara = document.querySelector("#user-score") ;

const compScorePara = document.querySelector("#comp-score") ;

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"] ;
    let randIdx = Math.floor(Math.random()*3) ;
    return options[randIdx] ;
}

const drawGame = () => {
    msg.innerText = "Game is a Draw. Play again." ;
    msg.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++ ;
        userScorePara.innerText = userScore ;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green" ;
    }
    else {
        compScore++ ;
       compScorePara.innerText = compScore ;
        msg.innerText = `You loose! ${compChoice} beats your ${userChoice}.` ;
        msg.style.backgroundColor = "red" ;
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    let compChoice = generateCompChoice() ;

    if(userChoice==compChoice) {
        //Draw game
        drawGame() ;
    } else {
        let userWin = true ;

        if(userChoice=="rock") {
            userWin = compChoice === "paper" ? false:true ;
        }

        else if(userChoice=="paper") {
            userWin = compChoice === "rock" ? true: false ;
        }
        else {
            userWin = compChoice === "scissors" ? false:true ;
        }
        showWinner(userWin, userChoice, compChoice) ;
    }
}

c.forEach((choice) => {
    // console.log(choice) ;
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id") ;    
        playGame(userChoice) ;
    }) ;
}) ;