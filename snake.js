// Create Stage
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snakeSize = 10;
var snake;
var x;
var y;

// Draw the snake
function drawSnake(){
    this.snakeSize = snakeSize;
   
    snake = [];
    for(i = 0; i < 4; i++){
    snake.push({x: i, y:0});
        console.log(snake[i].x);
        ctx.fillStyle = 'rgb(255, 153, 153)';
        ctx.fillRect(snake[i].x+5, snake[i].y, snakeSize, snakeSize); 
        ctx.strokeStyle = 'rgb(0, 255, 255)';
        ctx.strokeRect(snake[i].x+5, snake[i].y, snakeSize, snakeSize);
        
    }
}

// Create Food 
// Append food in random places inside the stage
function snakeFood() {
    var rx = Math.random() * canvas.width;
    var ry = Math.random() * canvas.height;

    ctx.fillStyle = 'rgb(214, 55, 5)';
    ctx.fillRect(rx, ry, 10, 5);
}

// Snake eats  
// If the snake touch any food she will grow 
// When the snake eats she grows


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

// If the user move any of the keys arrow is have to move right/left/up/down
function sneakyMove(){
    if(move == "up"){
        y++;
    }
    else if(move == "down"){
        y--;
    }
    else if(move == "left"){
        x--;
    }
    else if(move == "right"){
        x++;
    }  
}

//Game over
//If the snakes touch any wall stage GAME OVER and RESTART
//If snaek touch her body GAME OVER and RESTART

// Game starts

function gameStarts(){
    snakeFood();
    drawSnake();   
}
gameStarts();
