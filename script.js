// If the user move any of the keys arrow is pressed the snake have to move right/left/up/down
// If the snake use touch any food she will grow up adding a bullet img 
// If the sknake touch the walla it dies and start again

var keydir = {
    x: undefined,
    y: undefined
}

// When the user click play or press any arrow key the snake starts to move
window.addEventListener('keydown',
    function (e) {
        keydir.x = e.x;
        keydir.y = e.y;
        console.log(keydir);
        switch (e.which) {
            case 37:
                goLeft();
                break;
            case 38:
                console.log("press up");
                break;
            case 39:
                console.log("press right");
                break;
            case 40:
                goDown();
                break;
            default:
                animate();
                break;
        }
    });
//Directions
function goLeft(){
    console.log('I am in goLeft Function');
}
function goDown(){
    animate();
}
//Created Canvas Snake Home

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Snake(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // Draw the snake body
    this.draw = function () {
        // head
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        // body
            ctx.fillStyle = 'rgba(0, 0, 0)';
            ctx.fillRect(this.x + 12, this.y, this.w, this.h);
        // tail
            ctx.fillStyle = 'rgba(0, 0, 0)';
            ctx.fillRect(this.x + 24, this.y, this.w, this.h);

    }

    // Update or move snake
    this.update = function () {
        this.x += 1;
        this.draw();
        if (this.x <= canvas.width && this.y >= canvas.height) {
            console.log('y:' + this.y);

        }

    }

}

var snake = new Snake(50, 50, 10, 5);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    snake.update();
}


// When the snake finds a wall stop animation and clean all food she had eated and starts again where she was
// It the user clicks any arrow the snake should follow the diretion
// Food function call any random pixel
