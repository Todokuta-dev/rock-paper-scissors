let score = JSON.parse(localStorage.getItem('score'))  ||
      {
        wins : 0,
        losses : 0,
        ties : 0
      };
      updateScore();
      function computerDecision () {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber > 0 && randomNumber <= 1/3 ) {
          computerMove = 'ROCK';
        }else if (randomNumber > 1/3 && randomNumber <= 2/3) {
          computerMove = 'PAPER';
        }else if (randomNumber > 2/3 && randomNumber < 1) {
          computerMove = 'SCISSORS';
        }
        return computerMove;

      }
    function playGame (myMove) {
      const computerMove = computerDecision();
      let result = '';
    if (myMove === 'ROCK') {
        if (computerMove === 'ROCK') {
          result = 'Tie.';
        } else if (computerMove === 'PAPER') {
          result = 'You Lose.';
        } else if (computerMove === 'SCISSORS') {
          result = 'You Win.';
        }
      }  else if (myMove === 'PAPER') {
        if (computerMove === 'ROCK') {
          result = 'You Win.';
        } else if (computerMove === 'PAPER') {
          result = 'Tie.';
        } else if (computerMove === 'SCISSORS') {
          result = 'You Lose.';
        }
      }else if (myMove === 'SCISSORS') {
          if(computerMove === 'ROCK'){
            result='You Lose.'    
        }else if(computerMove=== 'PAPER'){
            result='You Win.'
        }else if(computerMove==='SCISSORS'){
            result='Tie.'
        } 
      }
    if (result === 'You Win.') {
      score.wins += 1;
    } else if (result === 'You Lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
    updateScore();
    document.querySelector('.js-results').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = ` You Picked <img src="thumbnails/${myMove}-emoji.png" class="moves-icon">
    , Computer Picked <img src="thumbnails/${computerMove}-emoji.png" class="moves-icon">`;
    localStorage.setItem('score',JSON.stringify(score));
    }
function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties ${score.ties}`
}