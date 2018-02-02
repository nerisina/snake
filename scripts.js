//Create variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var size = 10;
var snake;
var x;
var y;
//Create Snake
function bodySnake(x, y) {
    ctx.fillStyle = 'rgb(187, 170, 204)';
    ctx.fillRect(, , size, size);  
}

function skSnake() {
    var lenght = 3;
    snake = [];
    for (i = lenght; i >= 0; i--) {
        snake.push({
            x: i,
            y: 0
        });
    }
}

//Create Food - Append food in random places inside the stage
function snakeFood() {
    var rx = Math.random() * canvas.width;
    var ry = Math.random() * canvas.height;
    
      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      }
    ctx.fillStyle = 'rgb(214, 55, 5)';
    ctx.fillRect(rx, ry, 10, 5);
}


// Create Events - When the key is pressed move the snake whatever the direction it is
function sneakyMoves() {
    var moveX = snake[0].x;
    var moveY = snale[0].y;
    // Snake Directions UP/DOWN/RIGHT/LEFT
    if (move == 'right') {
        moveX++;
    } else if (move == 'left') {
        moveX--;
    } else if (move == 'up') {
        moveY--;
    } else if (move == 'down') {
        move++;

    }
}

// Snake eats - when the snake eats she needs to grow

//Game over
//If the snakes touch any wall stage GAME OVER and RESTART
//If snaek touch her body GAME OVER and RESTART

//Create Controls

canvas.addEventListener('keydown',
    function (e) {

        switch (e.which) {
            case 37:
                move = "left";
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
// INISIALITATION OF game
function init() {
    move = 'right';
    snakeFood();
    skSnake();
}

init();
