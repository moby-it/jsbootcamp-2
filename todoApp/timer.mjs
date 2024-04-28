var timerInterval;
var startTime;
var elapsedTime = 0;
var timerPaused = true;

function startTimer() {
  if (timerPaused) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    timerPaused = false;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTimer();
  timerPaused = true;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  document.getElementById("timer").textContent = formattedTime;
}

function formatTime(time) {
  var hours = Math.floor(time / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  // Add leading zeros if necessary
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}