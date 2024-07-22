let scoreStr=localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);
    function resetScore(scoreStr){
      score=scoreStr ? JSON.parse(scoreStr):{  //if scoreStr is available then JSON.parse otherwise define score as 0 0 0s
        win:0,
        lost:0,
        tie:0,
    }
    
    score.displayScore= function(){
         return` Result: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
        }
        showResult();
    }
    
    function generateComputerChoice() {
      //This will generate random number between 0 and 3  
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
      } else {
        return 'Stump';
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++;
          return 'Congrats😀! You have won';
        } else if (computerMove === 'Bat') {
            score.tie++;
          return `It's a tie🙂`;
        } else if (computerMove === 'Stump') {
            score.lost++;
          return 'Computer has won. Better Luck Next Time👍';
        }
      } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.tie++;
          return `It's a tie🙂`;
        } else if (computerMove === 'Bat') {
            score.lost++;
          return 'Computer has won. Better Luck Next Time👍';
        } else if (computerMove === 'Stump') {
            score.win++;
          return 'Congrats😀! You have won.';
        }
      } else {
        if (computerMove === 'Ball') {
            score.lost++;
          return 'Computer has won. Better Luck Next Time👍';
        } else if (computerMove === 'Bat') {
            score.win++;
          return 'Congrats😀 ! You have Won.';
        } else if (computerMove === 'Stump') {
            score.tie++;
          return `It's a tie🙂`;
        }
      }
    }

    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score',JSON.stringify(score));

      document.querySelector('#user-move').innerText=
      userMove? `Your choice is ${userMove} `:'';
     
      document.querySelector('#computer-move').innerText=
      computerMove? `Computer choice is ${computerMove} `:'';

      document.querySelector('#result').innerText=result||'';
      // result? result:''; ternary operator we can also use result||''

      document.querySelector('#score').innerText=score.displayScore();

    }
    function playGame(userMove) {
      document.querySelector('#user-move').innerText = `Your choice is ${userMove}`;
      document.querySelector('#result').innerText = 'Wait for Computer Choice...';
      document.querySelector('#computer-move').innerText = ''; // to clear previous computer move
    
      let countdown = 3;
      const countdownInterval = setInterval(() => {
        document.querySelector('#result').innerText = `Processing... ${countdown}`;
        countdown--;
        if (countdown < 0) {
          clearInterval(countdownInterval);
          let computerMove = generateComputerChoice();
          let result = getResult(userMove, computerMove);
          showResult(userMove, computerMove, result);
        }
      }, 1000); // 1000 milliseconds = 1 second
      instruct();
    }
    function instruct(){
      document.querySelector('.instructions').innerText=``;
    }
    function resetGame() {
      localStorage.clear();
      resetScore();.......
    }
    
