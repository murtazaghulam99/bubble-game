let timer = 60;
let score = 0;
let hitRandomNumber = 0;

increaseScore = () => {
  score += 10;
  document.querySelector("#score-value").textContent = score;
};

getNewHit = () => {
  hitRandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit-value").textContent = hitRandomNumber;
};

makeBubble = () => {
  let clutter = "";

  for (let i = 1; i <= 180; i++) {
    let randomNumbers = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumbers}</div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = clutter;
};

runTimer = () => {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-value").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER!</h1>`;
    }
  }, 1000);
};

document.querySelector("#panel-bottom").addEventListener("click", (dets) => {
  let clickedNumber = Number(dets.target.textContent);

  if (clickedNumber === hitRandomNumber) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
increaseScore();
