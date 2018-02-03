# Snake Game

## Usage
Unzip the folder and ouble click index.html.  

I created a simple css and js files in the same folder which are called from index.

This folder contains:

- index.html
- style.css
- script.js
- README.md

--

# Next steps

- Add functionality to the spacebar. 

    - The user will be able to start the game onces the spacebar is pressed. I will add to the switch an other case to detect the keycode number 8 (spacebar) named start.
    - When the spacebar is pressed the game starts the snake starts to move and food appends.

- To make the snake move:
    - Created an empty array
    - Add to the array elements with (x,y) values.
    - The tail (index[0]) will be the new head (index[last])
    
- The function food() before show anything have to make sure that the body of the snake is not in the same place than the random food is that the case: If the random (x,y) is the same as the body this will generate another random number (x,y).

- When the snake eat a new head will added to the body and the length will increased ex: snake = [0,1,2,3], snake = [0,1,2,3,4] 

- The game over is when the snake have a collision in the wall which the (x,y) shouldn’t be the same as the array length. If the snake array head position (x,y) is not less that the canvas.height and canvas.witdth.
