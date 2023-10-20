const princess = document.querySelector('.princess');
const suggar = document.querySelector('.suggar');

const jump = () => {
    princess.classList.add('jump');
    setTimeout(() => {
        princess.classList.remove('jump');
    }, 500);
}
 
const loop = setInterval(() => {



    const suggarPosition = suggar.offsetLeft;
    const princessPosition = +window.getComputedStyle(princess).bottom.replace('px', '');

    if (suggarPosition <= 130 && suggarPosition > 0 && princessPosition < 80) {

        suggar.style.animation = 'none';
        suggar.style.left = `${suggarPosition}px`;

        princess.style.animation = 'none';
        princess.style.bottom = `${princessPosition}px`;

        princess.src = "./imagens/game-over.png"
        princess.style.width = "130px"
        princess.style.marginLeft = "20px"

        clearInterval(loop);
    }
})

document.addEventListener("keydown", jump);