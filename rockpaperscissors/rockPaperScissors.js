const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput == 'rock') {
    return userInput;
  } else if (userInput == 'paper'){
    return userInput;
  } else if (userInput == 'scissors'){
    return userInput;
  } else if (userInput =='bomb') {
    return userInput;
  } else {
    console.log('sorry. please choose rock or paper or scissors only ^^');
  };
};

const getComputerChoice = () => {
  let comNum = Math.floor(Math.random() * Math.floor(3));
  if (comNum == 0) {
    return 'rock';
  } else if (comNum ==1){
    return 'paper';
  } else {
    return 'scissors';
  }
};
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice) {
    return "Tie";
  } else if (userChoice =='bomb') {
    return "user won";
  } else {
    if (userChoice=='rock'){
      if(computerChoice == 'paper'){
        return 'computer won!';
      } else {
        return 'user won!';
      }
    } else if (userChoice=='paper'){
      if(computerChoice =='scissors'){
        return 'computer won';
      } else {
        return 'user won!';
      }
    } else if (userChoice=='scissors'){
      if (computerChoice =="rock"){
        return 'computer won';
      } else {
        return 'user won!';
      }
    }
  }
};

//console.log(determineWinner('paper','scissors'));

const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  return determineWinner(userChoice, computerChoice);
};

console.log(playGame());
