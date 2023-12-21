function isArray(array){
    return array instanceof Array;
}

let toCheck = [[], {}, 3];
for( const x of toCheck) {
    console.log(`${JSON.stringify(x)} is ${isArray(x) ? 'an' : 'not an'} Array`);
}

console.log("------------------------------");

function palindromeV1(str) {
    const len = str.length;
    for ( let i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function palindromeV2(str){
    return str === str.split('').reverse().join('');
}

toCheck = ['maoam', 'michael',  'qwertzztrewq', 'qwertztrewq'];
for(const x of toCheck)
{
    console.log(`${x} is ${palindromeV1(x) ? 'a' : 'not a'} palindrome`);
    console.log(`${x} is ${palindromeV2(x) ? 'a' : 'not a'} palindrome`);
}

console.log("------------------------------");

const data = {
    name: 'hawaii',
    ingredient: ['cheese', 'ham','pineapple'],
    price: 19.95
};

function showData(obj){
    for( const x in obj) {
        console.log(x + ' = ' +  obj[x]);
    }
}

showData(data);


console.log("------------------------------");

