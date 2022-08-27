import './style.css';
import display from './modules/displayScore.js';

const refreshList = document.getElementById('refresh-btn');

refreshList.addEventListener('click', display);

const addScore = document.getElementById('add_score');
addScore.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-name');
  const score = document.getElementById('input-score');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HM4EVKKEOdqP9F8CeQFM/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  name.value = '';
  score.value = '';
});

// Create the game
/* fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'lboard',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data.result)); */