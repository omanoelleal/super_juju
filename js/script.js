const princess = document.querySelector('.princess');
const suggar = document.querySelector('.suggar');
const botaorestart = document.getElementById("restart");
let score_val = document.querySelector('.score_val');
let game_over_message = document.querySelector('.game_over_message');
let score_title = document.querySelector('.score_title');
let score_message = document.querySelector('.score_message');
const audioPulo = document.getElementById("audioPulo");
const audioGameOver = document.getElementById("audioGameOver");
const audioPerdeuVida = document.getElementById("audioPerdeuVida");

const jump = () => {
    audioPulo.play();
    princess.classList.add('jump');
    setTimeout(() => {
        princess.classList.remove('jump');
    }, 500);
}

score_title.innerHTML = 'SCORE ';
score_val.innerHTML = '0';

 
contador = 0;

const loop = setInterval(() => { 

    botaorestart.style.display = "none";

    let suggarPosition = suggar.offsetLeft;
    const suggarPositionScore = +window.getComputedStyle(suggar).right.replace('px', '');
    const princessPosition = +window.getComputedStyle(princess).bottom.replace('px', '');

    if (suggarPosition <= 130 && suggarPosition > 0 && princessPosition < 80) {

        audioPerdeuVida.play();

        suggar.style.animation = 'none';
        suggar.style.left = `${suggarPosition}px`;

        princess.style.animation = 'none';
        princess.style.bottom = `${princessPosition}px`;

        princess.src = "./imagens/game-over.png"
        princess.style.width = "130px"
        princess.style.marginLeft = "20px"
        
        setTimeout(() =>{
            audioGameOver.play();
            game_over_message.innerHTML = 'GAME OVER';
            score_message.innerHTML = `YOUR SCORE ${score_val.innerHTML}`;
            botaorestart.style.display = "block";
        }, 3000);
        
        clearInterval(loop);
        
    }
    if (suggarPosition < 0 && princessPosition >= 0) {
        contador++;
        if (contador == 1) {
            score_val.innerHTML ++;
        }
    }
    else {
        contador = 0;
    }
    
})


botaorestart.addEventListener("click", function () {
    location.reload();
})

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
