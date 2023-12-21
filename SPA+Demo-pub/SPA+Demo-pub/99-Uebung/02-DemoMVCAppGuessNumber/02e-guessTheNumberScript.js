function initApp() {
  const introDiv = document.getElementById("introDiv");
  const guessingDiv = document.getElementById("guessingDiv");
  const evalGuessDiv = document.getElementById("evalGuessDiv");
  const endDiv = document.getElementById("endDiv");

  const startBtn = document.getElementById("startBtn");
  const roundOut = document.getElementById("roundOut");
  const guessInput = document.getElementById("guessInput");
  const guessHistoryOutput = document.getElementById("guessHistoryOutput");
  const checkBtn = document.getElementById("checkBtn");
  const guessOut = document.getElementById("guessOut");
  const guessEvalOut = document.getElementById("guessEvalOut");
  const guessAgainBtn = document.getElementById("guessAgainBtn");
  const resultRoundsOut = document.getElementById("resultRoundsOut");
  const guessedNumberOut = document.getElementById("guessedNumberOut");
  const reStartBtn = document.getElementById("reStartBtn");

  let hiddenNumber;
  let roundNumber;
  let currentGuess;
  let guessEval;
  let guessHistory;

  const STATE_INTRO = 0;
  const STATE_GUESSING = 1;
  const STATE_EVAL = 2;
  const STATE_END = 3;

  let state = STATE_INTRO;

  const TEXT_TOO_HIGH = document.getElementById("TEXT_TOO_HIGH").innerText;
  const TEXT_TOO_LOW = document.getElementById("TEXT_TOO_LOW").innerText;
  const TEXT_YOU_GUESSED_TOO_HIGH = document.getElementById(
    "TEXT_YOU_GUESSED_TOO_HIGH"
  ).innerText;
  let TEXT_YOU_GUESSED_TOO_LOW = document.getElementById(
    "TEXT_YOU_GUESSED_TOO_LOW"
  ).innerText;

  function updateUI() {
    console.log(state, guessHistory);
    introDiv.hidden = true;
    guessingDiv.hidden = true;
    guessingHistoryDiv.hidden = true;
    evalGuessDiv.hidden = true;
    endDiv.hidden = true;
    switch (state) {
      case STATE_INTRO:
        introDiv.hidden = false;
        break;
      case STATE_GUESSING:
        roundOut.value = roundNumber;
        guessHistoryOutput.value = guessHistory;
        guessingHistoryDiv.hidden = false;
        guessingDiv.hidden = false;
        break;
      case STATE_EVAL:
        guessOut.value = currentGuess;
        guessEvalOut.value = guessEval;
        evalGuessDiv.hidden = false;
        break;
      case STATE_END:
        resultRoundsOut.value = roundNumber;
        guessedNumberOut.value = hiddenNumber;
        guessingHistoryDiv.hidden = false;
        endDiv.hidden = false;
        break;
    }
  }

  function startGame() {
    roundNumber = 1;
    guessHistory = "";
    hiddenNumber = Math.floor(Math.random() * 100) + 1;
    console.log(hiddenNumber);
    state = STATE_GUESSING;
    updateUI();
  }

  startBtn.addEventListener("click", startGame);
  reStartBtn.addEventListener("click", startGame);

  function evalGuess() {
    currentGuess = parseInt(guessInput.value);
    if (currentGuess === hiddenNumber) {
      state = STATE_END;
    } else {
      guessHistory += currentGuess;
      if (currentGuess > hiddenNumber) {
        guessHistory += TEXT_TOO_HIGH + " ";
        guessEval = TEXT_YOU_GUESSED_TOO_HIGH;
      } else {
        guessHistory += TEXT_TOO_LOW;
        guessEval = TEXT_YOU_GUESSED_TOO_LOW;
      }
      state = STATE_EVAL;
    }
    updateUI();
  }

  checkBtn.addEventListener("click", evalGuess);

  function nextGuess() {
    roundNumber++;
    state = STATE_GUESSING;
    updateUI();
  }

  guessAgainBtn.addEventListener("click", nextGuess);
}

window.addEventListener("load", initApp);