const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer;
let isRunning = false;
let elapsedTime = 0;

const startWatch = () => {
  if (!isRunning) {
    isRunning = true;
    let startTime = Date.now() - elapsedTime; //The internal clock in JavaScript starts at midnight January 1, 1970.
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime; // subtracting starttime from date.now will exactly give us how many ms has passed since startTime
      updateStopwatch();
    }, 1000);
  }
};

const format = (ms) => {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = Math.floor(totalSeconds % 60);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

const updateStopwatch = () => {
  stopwatch.textContent = format(elapsedTime);
};
const stopWatch = () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
};

const resetWatch = () => {
  stopWatch();
  elapsedTime = 0;
  updateStopwatch();
};

startButton.addEventListener("click", startWatch);
stopButton.addEventListener("click", stopWatch);
resetButton.addEventListener("click", resetWatch);

updateStopwatch();
