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
    function getRandom(indexArray) {
      let randomNum;
      do {
       randomNum = Math.floor(Math.random() * squareItem.length);
       } while (indexArray.includes(randomNum)); //index already exists (true)
      return randomNum; // keep generating a new index (if true, until it becomes false)
      }

      // Previous function: (generating just random numbers into string, without indexArray)
      /* 
      function getRandom() {
        let randomNum = Math.floor(Math.random() * squareItem.length); // range: 0 - 8
        return randomNum.toString();
      }
      */

    //Function : create a Target on a random index
    function setMole() {
      moleTimerId = setInterval(function () {
        squareItem.forEach((square) => {
       
          square.classList.remove("mole");
          square.classList.add("mole-two"); 

          let existingMoleImage = square.querySelector("img.mole");
          if (existingMoleImage) {
            existingMoleImage.remove();
            
          }
        });
  
        let randomMole = squareItem[getRandom([]).toString()]; // here - toString!
  
        randomMole.classList.add("mole");
  
        currentMole = randomMole.id;
  
        let moleImage = document.createElement("img");
        moleImage.src = "./pics/boo.png";
        randomMole.appendChild(moleImage);
        moleImage.classList.add("mole"); 
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

          const indexArray =[]; // indexArray = [0,2,4,3,1] (no overlaps)
          const obstImages = [
              "./pics/blue.png",
              "./pics/green.png",
              "./pics/booscream.gif",
              "./pics/purple.png",
              "./pics/teacher.png",
          ];
  
          for (let i=0; i<5; i++) { //5 obstacle-options
          const randomNum = getRandom(indexArray);
          indexArray.push(randomNum);
          const randomObst = squareItem[randomNum];
          randomObst.classList.add("obstacle");

          const obstacleImage = document.createElement("img");
          obstacleImage.src = obstImages[i];
          randomObst.appendChild(obstacleImage);
          obstacleImage.classList.add("obstacle");
              
          }

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
  