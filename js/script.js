// Snake Game
// Author Neri Esparza

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var size = 10;
var snake, x, y;

// Creating the snake squares
function square(x, y) {
    ctx.fillStyle = 'rgb(214, 55, 5)';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'rgb(0, 255, 255)';
    ctx.strokeRect(x, y, size, size);
}

// Drawing snake
function drawSnake() {
    // create array and add x,y positions
    snake = [];
    for (var i = 0; i < 4; i++) {
        snake.push({
            x: i,
            y: 0
        });
    }

    snakeSize = snake.length;
    for (var a = 0; a <= snakeSize; a++) {
        var p = snake[a];
        if (typeof p !== 'undefined') {
            square(p.x * size, p.y * size);
        }
    }
}
// Create Food 
function food() {
    food = ({
        rx: Math.round(Math.random() * canvas.width),
        ry: Math.round(Math.random() * canvas.height)
    });

    //If body and food doesnt have the sale coordonates created food
    square(food.rx, food.ry);
}

// Snake eats  
function sheEats() {
    //If head touch the food the snake array increase
}

//Game over
function gameOver() {
    //If the snakes touch any wall stage GAME OVER and RESTART
    //If snake touch her body GAME OVER and RESTART   
}

// Snake moves
// If the user move any of the keys arrow is have to move right/left/up/down
function sneakyMove() {
    if (move == "up") {
        y++;
    } else if (move == "down") {
        y--;
    } else if (move == "left") {
        x--;
    } else if (move == "right") {
        x++;
    }
}
// Create Controls

// When the key is pressed move the snake whatever the direction it is
window.addEventListener('keydown',
    function (e) {
        switch (e.which) {
            case 37:
                move = "left";
                console.log(move);
                break;
            case 38:
                move = "up";
                break;
            case 39:
                move = "right"
                break;
            case 40:
                move = "down"
                break;
            default:
                break;
        }
    });

// Game starts

function gameStarts() {
    food();
    drawSnake();
}

gameStarts();
