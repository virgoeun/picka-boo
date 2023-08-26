
# My First Game Project
# "Picka-Boo!" 

<img src="./Pics/boo.png" alt="Alt text" title="Optional title">

[Play Game](http://github.com)

## Description
<img src="./Pics/monsters.png" alt="Alt text" title="Optional title">
<br>
<br>
<br>
It's inpsired the Pixar's animatino movie, "Monster.,Inc". The little girl, named "Boo" accidentally entered into the Monster World, where monsters gather and use children's cries as a energy source. However, a human being cannot entered into the Monster world, because they believe touching human can contaminate them and even kill them, which is a myth. The game starts from there, and you(user) need to resuce "Boo" in 1 minute! 

<br>
Each user has 1 minute time and 5 chances to miss, and if you get "Boo"(on click), you get +1 socre and you can keep playing until time is up or you miss all 5 chances.

<br>

## Main Functionality
- Have a seperate start page with shake animation 
- Users click **'Find Boo'** image button to start the game.
- On the start screen, users can check **'How To Play'** image button for **instructions**, which has a click & pops up & close function.
- On the upper right corner, there is **music icon (on/off)** that users can control music sound.
- On the game-screen, there is one main target to click and 5 different obstacles to confuse users. Each item pops up randomly on differet box of grid without overlap.
- There is a **game panel** that users can check time-left, score, and the number of miss.
- On the **Time-Left**, the time limit is 1 minute and it starts counting down till it's 0.
- When 1 minute is up, the game stops - this is for giving a time pressure to make a game more challenging. 
- When 1 minute is up, the game stops and give you game over screen.
- On the **Score**, by clicking the right target, you get the +1 score and there is no limit.
- On the **Miss**, by clicking the wrong one, which is empty box or obsticle, you get your 'Miss' point, which is up to 5.
- When the Miss point is over 5, the game stops and shows the **Game Over** screen.
- On the **Game Over** screen, users can get back to the start screen to restart the game(**Do It Again** image button with shake animation).

<br>

## Backlog
- Adding different end-screen after time is up, such as "Time is up!" instead of 'game over' screen since time is not the main factor of losing logic.
- Adding more obstacles at the same time frame
- Adding more time interval before the actual game start
- Adding different level depending on interval time and the number of obstacles.
- More design & visual elements (e.g., sound to the end screen)

<br>

## Technologies Used
- HTML
- CSS
- JavaScript
- DOM Manipulation

<br>

## Stages
1. Start Screen: Title, main image, start Button, instruction button, music control 
2. Game Screen: game status panel, grid, background image
3. Game End: ending image, restart button

<br>

## Proyect Structure
### Game.js
- Game Class: Game()
- createGameScreen();
- removeGameScreen();
- createGameOverScreen();
- removeGameOverScreen();
- startGame();
- gameOver();

### Scrpt.js
- Window.onload
- Game instruction("How To Play" button) pops up click event
- new Game()
- start Game 
- get Random (index number for 9*9 grid)
- setMole() function (target)
- setInterval for the target & each obstacles
- getObstacle function to get 5 obstales on the random position of grid without overlap
- click Event for score & miss points and gameover
- timeCount to track Time-Left
- clearInterval to cancel each setInterval oftarget, obstacles and time and stop the game
- Click Event for restart 
- reload

## Extra Links

- [Notion Link](https://www.notion.so/f61dba19b85843da8cb81cc8ced45aaa?v=b554d2db337b40a9ace406e5749c4f8f)
- [Slides Link](https://docs.google.com/presentation/d/1qnjEPpRRqf5Ppr8rTeAcEVSfLK1KsevOmA9syoTN8lM/edit?usp=sharing)
- [Github repository Link](https://github.com/virgoeun/mochi-pochi)
- [Deployment Link](http://github.com)
