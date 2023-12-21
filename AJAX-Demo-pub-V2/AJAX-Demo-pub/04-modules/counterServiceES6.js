// ES6 Module
let hiddenCounter = 0;

var hiddenVarVar = "VarVar";

export const EXPORTED_CONSTANT = 47;

export function getCounter() {
  return hiddenCounter;
}

export function incCounter() {
  return ++hiddenCounter;
}

export default {getCounter, incCounter, EXPORTED_CONSTANT};

