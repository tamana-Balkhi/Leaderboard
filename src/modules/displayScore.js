

let DATA = [];
async function getDATA() {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HM4EVKKEOdqP9F8CeQFM/scores');
  const info = await res.json();
  DATA = [];
  info.result.forEach((element) => {
    DATA.push(element);
  });
}

const listContainer = document.querySelector('.listContainer');

const display = async () => {
  await getDATA();
  listContainer.innerHTML = '';
  DATA.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = `${item.user}: ${item.score}`;
    listContainer.appendChild(li);
  });
};

display();

export default display;