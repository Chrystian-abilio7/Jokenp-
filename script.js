const resultado = document.getElementById('resultado');
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playComputer());
}

/* 
playComputer -> Camel Case
GAME_CHOICES -> Snake Case
*/


//ENUM
const GAME_CHOICES = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors"
}

const playComputer = () => {
    const choices = [GAME_CHOICES.Rock, GAME_CHOICES.Paper, GAME_CHOICES.Scissors];
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber];
}

const playTheGame = (humanChoice, computerChoice) => {
    console.log(`Humano: ${humanChoice} - Computador: ${computerChoice}`);

// Lógica do jogo
    if (humanChoice === computerChoice) {
        resultado.innerHTML = "Empate!";
    
    } else if (
    (humanChoice === GAME_CHOICES.Rock && computerChoice === GAME_CHOICES.Scissors) ||
    (humanChoice === GAME_CHOICES.Paper && computerChoice === GAME_CHOICES.Rock) ||
    (humanChoice === GAME_CHOICES.Scissors && computerChoice === GAME_CHOICES.Paper)) {
    resultado.innerHTML = "Você ganhou!";
} 
    else {
        resultado.innerHTML = "Você perdeu!";
}
// Mudança de cor do resultado
    if(resultado.innerHTML === "Você ganhou!"){
        resultado.style.color = "green";
    }
    else if(resultado.innerHTML === "Você perdeu!"){
        resultado.style.color = "red";
    } 
    else if (resultado.innerHTML === "Empate!"){
        resultado.style.color = "yellow";
    }

// Adicionando pontos
    let humanScore = parseInt(document.getElementById('score').innerHTML) || 0;

    if(resultado.innerHTML === "Você ganhou!"){
        humanScore++;
    }

    document.getElementById('score').innerHTML = humanScore;

    let computerScore = parseInt(document.getElementById('computerScore').innerHTML) || 0;

    if(resultado.innerHTML === "Você perdeu!"){
        computerScore++;
    }

    document.getElementById('computerScore').innerHTML = computerScore;

// Exibindo a escolha do computador
    const escolhas = document.getElementById('escolhas');

    if (computerChoice === "scissors") {
        escolhas.innerHTML = "Computador escolheu: Tesoura";
} 
    else if (computerChoice === "rock") {
        escolhas.innerHTML = "Computador escolheu: Pedra";
} 
    else if (computerChoice === "paper") {
        escolhas.innerHTML = "Computador escolheu: Papel";
} 
}

// Função para resetar o jogo
const resetGame = () => {
    document.getElementById('score').innerHTML = 0;
    document.getElementById('computerScore').innerHTML = 0;
    resultado.innerHTML = "";
    resultado.style.color = "white";
    document.getElementById('escolhas').innerHTML = "";
}
