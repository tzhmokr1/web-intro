

const COUNTER_API_URL = 'http://localhost:8080/api/nextCounter';

const getJSON = function(url, processJSON) {
  fetch(url).then(response => response.json()).then(processJSON);
};

const fetchNextCounter = function(processNextCounterCallbackFn) {
  getJSON(COUNTER_API_URL, processNextCounterCallbackFn);
};

export default {fetchNextCounter};
