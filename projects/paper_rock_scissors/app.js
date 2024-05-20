let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const  userScorePara = document.querySelector('#user_score');
const  CompScorePara = document.querySelector('#comp_score');



const drawGame = () => {
    console.log('Game was Draw');
}

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log(`User Win`);
        msg.innerText = `User Choice ${userChoice} and Comp Choice ${compChoice} User Win`;
        msg.style.backgroundColor = 'green';

    }else{
        compScore++;
        CompScorePara.innerText = compScore;
        //console.log('User Lose');
        msg.innerText = `User Choice ${userChoice} and Comp Choice ${compChoice} User Lose`;
        msg.style.backgroundColor = 'red';

    }
}
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const playGame = (userChoice) => {
    //console.log('User Choice:', userChoice);
    const compChoice = genCompChoice();
    //console.log('Comp Choice', compChoice);

    if(userChoice === compChoice){
        drawGame();
        msg.innerText = 'Game Draw';
        // draw game

    } else{
        let userWin = true;
        if(userChoice === 'rock'){
            // Comp: paper, scissors
            userWin = compChoice === 'paper' ? false : true;

        } else if(userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;

        } else{     // user: scissors
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        //console.log('choice was clicked', userChoice);
        playGame(userChoice);
    })
    
});