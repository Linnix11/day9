const character = document.getElementById('character');

let keyState = {};
let x = 0;

document.addEventListener('keydown', function(e) {
    keyState[e.key] = true;
});

document.addEventListener('keyup', function(e) {
    keyState[e.key] = false;
});

function gameLoop() {
    let move = 0;
    
    if (keyState['ArrowLeft']) {
        move = -1;
        character.classList.add('left');
        character.classList.add('walking');
    } else if (keyState['ArrowRight']) {
        move = 1;
        character.classList.remove('left');
        character.classList.add('walking');
    } else {
        character.classList.remove('walking');
        character.classList.add('resting');
    }

    if (move !== 0) {
        x += move * 5; // vitesse de deplacement //
        character.style.transform = `translateX(${x}px)`;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();