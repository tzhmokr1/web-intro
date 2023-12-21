//serves http://localhost:8080/api/nextCounter
//       http://localhost:8080/api/slowNextCounter'
//        http://localhost:8080//api/unreliableNextCounter'
// start: node counter-server.js

const http = require('http');
const url = require('url');

const PORT = 8080;
const SLOW_COUNTER_DELAY = 3000;

// e.g. request URL http://localhost:8080/api/nextCounter

// model
class Counter {
  constructor(startValue, incrementValue = 1) {
    this.counter = startValue;
    this.incrementValue = incrementValue;
  }

  increment(specialIncrementValue) {
    let incrementValue = specialIncrementValue || this.incrementValue;
    this.counter += incrementValue;
    return this.counter;
  }
}

let counter = new Counter(1);

// controller


function handleGetAnswer(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({answer: 42}));
}

function handleCounterRequest(req, res) {
  counter.increment();
  let origin = String(req.headers.origin);
  // if (! origin.startsWith("http://localhost")) {
  //   origin = "block";
  // }
  // res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': req.headers.origin});
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  res.end(JSON.stringify({counter: counter.counter}));
}


function handleSlowCounterRequest(req, res) {
  setTimeout(() => handleCounterRequest(req, res), SLOW_COUNTER_DELAY);
}

function handleUnreliableNextCounter(req, res) {
  if (counter.counter % 3 === 0) {
    console.log('fail properly');
    counter.increment();
    res.writeHead(404, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end();
    return; // fail "properly" every 3rd request
  }
  if (counter.counter % 5 === 0) {
    console.log('fail silently');
    counter.increment();
    res.writeHead(404, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    return; // fail silently every 5th request
  }
  if (counter.counter % 2) {
    // slow ever 2nd
    console.log('slow');
    setTimeout(() => handleCounterRequest(req, res), SLOW_COUNTER_DELAY);
  } else {
    console.log('fast');
    handleCounterRequest(req, res);
  }
}


const routes = {
  '/api/nextCounter': handleCounterRequest,
  '/api/slowNextCounter': handleSlowCounterRequest,
  '/api/unreliableNextCounter': handleUnreliableNextCounter,
};

function requestHandler(req, res) {
  // console.log(url.parse(req.url));
  const routeHandler = routes[url.parse(req.url).pathname];
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    console.log(" not found" + url.parse(req.url).pathname);
  }
}

const httpServer = http.createServer(requestHandler);

httpServer.listen(PORT, () => console.log('Node listening on Port ', PORT));



