class Game {
    constructor(setmole) {
      this.startScreen = document.querySelector("#start-screen"); //first HTML element
      this.gameScreen = document.querySelector("#game-screen");
      this.gameEndScreen = document.querySelector("#game-end");
  
      this.gameIsOver = false; 
  } 
  
  
    start() {
      this.startScreen.style.display = "none"; // hide the start screen
      this.gameScreen.style.display = "block";
    }
      
  
    endGame() 
    { 
      this.gameIsOver = true;
      this.gameScreen.style.display = "none"; // hide the game screen
      this.gameEndScreen.style.display = "block";
    
    } 
  
    
  }