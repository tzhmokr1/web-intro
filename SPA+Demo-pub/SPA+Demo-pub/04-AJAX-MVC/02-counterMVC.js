import nextCounterService from "./02-nextCounterService.js";
import {Counter} from "./02-counterClass.js";

function initApp() {
  // app model (part of app, proxy/copy of Model on server)
  let localCounter = new Counter(0);

  // view references
  const counterOutputElement = document.getElementById('count');
  const nextBtnElement = document.getElementById('nextBtn');

  const updateView = function () {
    counterOutputElement.value = localCounter.counter;
  }

  // controller & helper
  const renderNextCounter = function (serverCounterObject) {
    localCounter.counter = serverCounterObject.counter;
    updateView();
  }

  nextBtnElement.addEventListener('click',
    () => nextCounterService.fetchNextCounter(renderNextCounter));

  // init view
  nextCounterService.fetchNextCounter(renderNextCounter);

}

window.onload = initApp;
