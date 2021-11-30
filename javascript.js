//SITE DE REFERENCIA https://www.youtube.com/watch?v=JP3eYU137t8

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  console.log(userInput)

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  } else {
    return console.log('error')
  }

}

const getComputerChoice = () => {
  let value = Math.floor(Math.random() * 3)
  switch (value){
  case 0:
    return 'rock'
    break
  case 1:
    return 'paper'
    break
  case 2:
    return 'scissors'
    break
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'EMPATE'
  }

  if (userChoice === 'rock'){ 
    if(computerChoice === 'paper'){
      return 'Computador Ganhou com papel'
    }else {
      return 'User ganhou com pedra'
    }
  }

if (userChoice === 'paper'){ 
    if(computerChoice === 'scissors'){
      return 'Computador Ganhou com scissors'
    }else {
      return 'User ganhou com paper'
    }
  }

  if (userChoice === 'scissors'){ 
    if(computerChoice === 'rock'){
      return 'Computador Ganhou com rock'
    }else {
      return 'User ganhou com scissors'
    }
  }

}

const playGame = () => {
  let userChoice = getUserChoice('paper')
  let computerChoice = getComputerChoice()
  console.log(`user escolheu ${userChoice}, computador escolheu ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
  
}
