window.onload = function () {
    const squareItem = document.querySelectorAll(".square");
    const startImage = document.querySelector(".startbutton");
    const restartButton = document.querySelector(".restart-button");
    const gameInstruction = document.getElementById("gameinstruction");
    const instructionButton = document.getElementById("instructionbutton");
  
    const scoreDisplay = document.querySelector("#score");
    const missDisplay = document.querySelector("#miss");
    const timeLeft = document.querySelector("#time-left");
  
    let currentMole;
    let score = 0;
    let miss = 0;
    let currentTime = 60;
    let countDownTimerId;
    let moleTimerId;
    let obstacleTimerId;
  

    

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
  
    let game = new Game();
  
    //Start the game!
  
    startImage.addEventListener("click", function () {
      startGame();
      const startAudio = new Audio("./sounds/herewego.wav");
      startAudio.play();
    });
  
    function startGame() {
      game.start();
    }
  
    //Fucntion: get Random Index
    function getRandom() {
      let randomNum = Math.floor(Math.random() * squareItem.length); // range: 0 - 8
      return randomNum.toString();
    }
  
    //Function : create a Target on a random index
    function setMole() {
      moleTimerId = setInterval(function () {
        squareItem.forEach((square) => {
          // array method
          square.classList.remove("mole");
          square.classList.add("mole-two"); // create a grid with 8 white boxes & 1 pink box(removed)
  
          // an existing mole image (an <img> element with the class "mole") within the square
          let existingMoleImage = square.querySelector("img.mole");
          if (existingMoleImage) {
            existingMoleImage.remove();
            // before creating a new randomMole with an image, this makes sure to remove existing one
            // so that we have only one randomMole at a time
          }
        });
  
        let randomMole = squareItem[getRandom()]; // Get a random element from the "squareItem" array
  
        randomMole.classList.add("mole"); //Add the "mole" class to the randomly selected square:  <div class = sqaure mole-two mole" id="8"></div>
  
        currentMole = randomMole.id;
  
        let moleImage = document.createElement("img"); // Create an image element for the mole
        moleImage.src = "./pics/boo.png";
        randomMole.appendChild(moleImage);
        moleImage.classList.add("mole"); //<div class = sqaure mole-two mole" id="8"></div> -> <img src = "..." class = "mole">
      }, 1200);
    }
  
    setMole();
  
    // create Obstacles!
    function generateObstacle() {
      obstacleTimerId = setInterval((square) => {
        squareItem.forEach((square) => {
          square.classList.remove("obstacle");
  
          let existingObstacleImage = square.querySelector("img.obstacle");
          if (existingObstacleImage) {
            existingObstacleImage.remove();
          }
        });
  
        //first obstacle
        let randomIndex1 = getRandom();
        if (randomIndex1 === currentMole) {
          randomIndex1 = getRandom();
        }
        let randomObst1 = squareItem[randomIndex1];
  
        // console.log(randomObst1); <div class "square mole-two obstacle" id="5"></div>
        randomObst1.classList.add("obstacle");
  
        let obstacleImage1 = document.createElement("img");
        obstacleImage1.src = "./pics/booscream.gif";
        randomObst1.appendChild(obstacleImage1);
        obstacleImage1.classList.add("obstacle");
        //<div class = sqaure mole-two obstacle" id="5"></div> -> <img src = "..." class = "obstacle">
  
        //second obstacle
        let randomIndex2 = getRandom();
        if (randomIndex2 === randomIndex1 || randomIndex2 === currentMole) {
          randomIndex2 = getRandom();
        }
        let randomObst2 = squareItem[randomIndex2];
        randomObst2.classList.add("obstacle");
  
        let obstacleImage2 = document.createElement("img");
        obstacleImage2.src = "./pics/green.png";
        randomObst2.appendChild(obstacleImage2);
        obstacleImage2.classList.add("obstacle");
  
        //third obstacle
        let randomIndex3 = getRandom();
        if (
          randomIndex3 === randomIndex1 ||
          randomIndex3 === randomIndex2 ||
          randomIndex3 === currentMole
        ) {
          randomIndex3 = getRandom();
        }
        let randomObst3 = squareItem[randomIndex3];
        randomObst3.classList.add("obstacle");
  
        let obstacleImage3 = document.createElement("img");
        obstacleImage3.src = "./pics/blue.png";
        randomObst3.appendChild(obstacleImage3);
        obstacleImage3.classList.add("obstacle");
  
        //fourth obstacle
        let randomIndex4 = getRandom();
        if (
          randomIndex4 === randomIndex1 ||
          randomIndex4 === randomIndex2 ||
          randomIndex4 === randomIndex3 ||
          randomIndex4 === currentMole
        ) {
          randomIndex4 = getRandom();
        }
        let randomObst4 = squareItem[randomIndex4];
        randomObst4.classList.add("obstacle");
  
        let obstacleImage4 = document.createElement("img");
        obstacleImage4.src = "./pics/teacher.png";
        randomObst4.appendChild(obstacleImage4);
        obstacleImage4.classList.add("obstacle");
  
        //fifth obstacle
        let randomIndex5 = getRandom();
        if (
          randomIndex5 === randomIndex1 ||
          randomIndex5 === randomIndex2 ||
          randomIndex5 === randomIndex3 ||
          randomIndex5 === randomIndex4 ||
          randomIndex5 === currentMole
        ) {
          randomIndex5 = getRandom();
        }
  
        let randomObst5 = squareItem[randomIndex5];
        randomObst5.classList.add("obstacle");
  
        let obstacleImage5 = document.createElement("img");
        obstacleImage5.src = "./pics/purple.png";
        randomObst5.appendChild(obstacleImage5);
        obstacleImage5.classList.add("obstacle");
      }, 1200);
    }
  
    generateObstacle();
  
    //score & miss
    squareItem.forEach((square) =>
      square.addEventListener("click", function () {
        
        const myAudio = new Audio("./sounds/bubblesound.wav");
        myAudio.play();
  
        if (square.id === currentMole) {
          score++;
          scoreDisplay.innerHTML = `Your Score: ${score}`;
        }
  
        if (square.id !== currentMole) {
          miss++;
          missDisplay.innerHTML = `Miss: ${miss}`;
        }
  
        if (miss > 5) {
          game.endGame();
          const startAudio = new Audio("./sounds/gameover.mp3");
          startAudio.play();
        }
      })
    );
  
    //Time-left
    function timeCount() {
      currentTime--;
      timeLeft.innerHTML = `Time Left: ${currentTime}`;
  
      if (currentTime === 0) {
        clearInterval(moleTimerId);
        clearInterval(countDownTimerId);
        clearInterval(obstacleTimerId);
        game.endGame();
      }
    }
  
    countDownTimerId = setInterval(timeCount, 1000);
  
    restartButton.addEventListener("click", function () {
      const myAudio = new Audio("./sounds/bubblesound.wav");
      myAudio.play();
      restartGame();
      
    });
  
    function restartGame() {
      location.reload();
    }
  };
  