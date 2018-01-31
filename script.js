 // Draw the snake using Canvas
// When the user click play or press any arrow key the snake starts to move
// If the user move any of the keys arrow is pressed the snake have to move right/left/up/down
// If the snake use touch any food she will grow up adding a bullet img 
// If the sknake touch the walla it dies and start again
window.addEventListener('keypress',
                                function(){
            if(KeyboardEvent.keyCode === DOWN){
                console.log('down');
            }
            
        });


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
                       )
function Snake(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.draw = function(){
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(this.x+12, this.y, this.w, this.h); 
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(this.x+24, this.y, this.w, this.h);  
  }
  
  this.update = function(){
    this.x += 2;
    this.draw();
    if(this.x > innerWidth || this.y > innerHeight){
      this.x = 0;
    }
  }  
 
}

var snake = new Snake(4,5,10,10);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, innerWidth, innerHeight);
  snake.update(); 
  
}
  
animate();