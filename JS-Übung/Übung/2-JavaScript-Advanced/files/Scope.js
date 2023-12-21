const globalObject = typeof(global) != 'undefined' ? global : window;

let a = 0;
var varA = 'varA';
b = 0;

function scope() {
    let b = 0;
    c = "ABC";
    varA = 'varAA';
    a++;
    b++;
}

scope();
console.log(a, varA, b, c);
console.log(globalObject.a, globalObject.varA, globalObject.b, globalObject.c);
