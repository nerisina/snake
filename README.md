# Snake Game

## Files

This folder contains:

- index.html
- style.css
- script.js
- README.md

# Next steps
- Snake move:
    - To make the snake move: The queues data structure is the best solution. The tail (index[0]) will be removed and added to the end which is the head (index[last])
        - snake = [0,1,2,3]
        - snake = [1,2,3,0]
        - snake = [2,3,0,1]
        - snake = [3,0,1,2]
    
- If the random coordinates (x,y) of food is the same as the body this will generate another random number for (x,y).

- When the snake eats, the new head will be added to the body ex: 
    - snake = [0,1,2,3]
    - snake = [0,1,2,3,4] 

- The score counting will starts after she eats her first food.

- Game over: If two elements in the array have the same coordinates (x,y) or if the head of the snake touch the walls. The game restarts. 
