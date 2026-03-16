const resultado = document.getElementById('resultado');
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playComputer());
}

const playComputer = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber];
}

const playTheGame = (humanChoice, computerChoice) => {
    console.log(`Humano: ${humanChoice} - Computador: ${computerChoice}`);

// Lógica do jogo
    if (humanChoice === computerChoice) {
        resultado.innerHTML = "Empate!";
    
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
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

