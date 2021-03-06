// Create Stage
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var wormArray = [];

// Creating the worm square and lenght
var Square = function (x, y, size, num) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.num = num;

  this.drawWorm = function () {
    ctx.fillStyle = 'rgb(214, 55, 5)';
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeStyle = 'rgb(0, 255, 255)';
    ctx.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.font = '18px serif';
    ctx.fillText(this.num, this.x * this.size, this.y * this.size);
  };

  this.update = function () {
    this.drawWorm();
    this.x = this.x++;
    console.log(x);
//    for (var i = 0; i < wormArray.length; i++) {
//      console.log(wormArray[i].x+1);
//    }

  };
};


for (var i = 0; i < 3; i++) {
  var x = i + 1;
  var y = 4;
  var size = 10;
  wormArray.push(new Square(x, y, size, i));
}


function animate() {
  requestAnimationFrame(animate);
  for (var i = 0; i < wormArray.length; i++) {
    wormArray[i].update();
  }
}

animate();
