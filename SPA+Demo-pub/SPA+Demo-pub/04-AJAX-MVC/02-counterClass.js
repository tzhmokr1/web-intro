// model definition (including "business logic") used in server and client
export class Counter {
  constructor(startValue, incrementValue = 1) {
    this.counter = startValue;
    this.incrementValue = incrementValue;
  }
  increment (specialIncrementValue) {
    let incrementValue = specialIncrementValue || this.incrementValue;
    this.counter += incrementValue;
    return this.counter;
  }
}
