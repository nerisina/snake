// Create Stage
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var size = 10;
var x, y, sl;
var snake = [];

//    snake.push({
//        x: 0,
//        y: 0
//    });

// push objetcs inside
//var push = function () {
//    snake.push({
//        x: x++,
//        y: y++
//    })
//}

// Creating the snake square and lenght
var square = function (x, y) {
    ctx.fillStyle = 'rgb(214, 55, 5)';
    ctx.fillRect(x * size, y * size, size, size);
    ctx.strokeStyle = 'rgb(0, 255, 255)';
    ctx.strokeRect(x * size, y * size, size, size);
}
var drawWorm = function (x,y) {
    sl = 3;
    for (var i = 0; i <= sl; i++) {
        snake.push({
            x: i,
            y: 0
        });
    }
       square(snake[i].x++, snake[i].y);
    
}

var interval = setInterval(function (x, y) {
    sl = snake.length;
//     snake.push({
//            x: snake[snake.length]+1,
//            y: 0
//        });
    console.log(sl);
    
    if(sl<4){
        temp = snake.pop();
        
    }
    else{
       drawWorm(x,y);
        
    }
    
    
}, 1000);


//sl = snake.length;
//
//for (var i = 0; i <= sl; i++) {
//    var sn = snake[i];
//    if (typeof sn !== 'undefined') {
//        square(sn.x, sn.y);
//    }
//}

//setInterval(function() {
//                  window.location.reload();
//                }, 30000);

drawWorm();
