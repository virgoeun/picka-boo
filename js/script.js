window.onload = function () {

  const startImage = document.querySelector(".startbutton");
  const restartButton = document.querySelector(".restart-button");
  const gameInstruction = document.getElementById("gameinstruction");
  const instructionButton = document.getElementById("instructionbutton");

  // start-screen instruction pops up control
  instructionButton.addEventListener("click", () => {
    const startAudio = new Audio("./sounds/softclick.wav");
    startAudio.play();
    gameInstruction.style.display = "block";
    instructionButton.style.display = "none";
    startImage.style.display = "none";
    });
  
  gameInstruction.addEventListener("click", () => {
    const startAudio = new Audio("./sounds/softclick.wav");
    startAudio.play();
    instructionButton.style.display = "block";
    gameInstruction.style.display = "none";
    startImage.style.display = "block";
    });
  
  
    //Start the game!
  
    startImage.addEventListener("click", function () {
      startGame();
      const startAudio = new Audio("./sounds/herewego.wav");
      startAudio.play();
    });
  
    function startGame() {
      game.start();
    }
  
  
    restartButton.addEventListener("click", function () {
      const myAudio = new Audio("./sounds/bubblesound.wav");
      myAudio.play();
      restartGame();
      
    });
  
    function restartGame() {
      location.reload();
    }
  };
  