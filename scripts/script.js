let scoreBlock;
let score = 0;

const config = {
    Step: 0,
    maxStep: 6,
    sizeCell: 16,
    sizeBerry:16 / 4
}
const snake = {
    x: 16,
    y: 16,
    dx: config.sizeCell,
    dy: 0,
    tails: [],
    maxTails: 3
}
let berry = { 
    x: 0,
    y: 0
}
function inScore () {
    score++;
    drawScore();
}
function drawScore() {
    scoreBlock.innerHTML = score;
}