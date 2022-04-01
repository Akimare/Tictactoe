const body = document.querySelector('body')
const boxes = Array.from(document.querySelectorAll('.box'))
    // body.style.cursor = isX ? 'url(cross.png), auto' : 'url(circle.png), auto';
var isX = false
const resetbtn = document.querySelector('.resetbtn')
const playbtn = document.querySelector('.playbtn')
    // identyfikacja boxów wizualnie poprzez ich id
    //boxes.forEach(box => box.before(box.id))
const winningCombs = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

var xmoves = []
var omoves = []
    //x.includes()
function winCheck() {
    winningCombs.forEach(combination => {
        if (xmoves.includes(combination[0]) && xmoves.includes(combination[1]) && xmoves.includes(combination[2])) {
            winner();
        } else if (omoves.includes(combination[0]) && omoves.includes(combination[1]) && omoves.includes(combination[2])) {
            winner();
        } else if (omoves.length + xmoves.length == 9) {
            winner(false)
        }
    })
}

function winner(someoneWon = true) {
    boxes.forEach(box => box.removeEventListener('click', move))
    if (someoneWon) {
        if (isX) {
            overlayOn("✖ won the game!")

        }
        if (!isX) {
            overlayOn("⭕ won the game!")

        }
    } else {
        overlayOn("It's a draw.")
    }

}

function reset() {
    boxes.forEach(box => box.innerHTML = '')
    xmoves = []
    omoves = []

}

function move() {
    if (this.innerHTML === "" | this.innerHTML === " ") {
        if (isX) {
            this.innerHTML = "✖"
            xmoves.push(this.id)

        } else {
            this.innerHTML = "⭕"
            omoves.push(this.id)
        }
        winCheck()
        isX = !isX
    }

}

function play() {
    boxes.forEach(box => box.addEventListener('click', move))
}

function overlayOn(text) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text").textContent = text
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}
playbtn.addEventListener('click', play)
resetbtn.addEventListener('click', reset)