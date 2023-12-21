'use strict';

function createMemberList(){
    var list = [];
    return {
        [Symbol.iterator] : function*() {
            for(let element of list){
                yield element;
            }
        },
        add : function(name){list.push(name)}
    }
}

var list = createMemberList();
list.add("Michael");
list.add("Silvan");
list.add("Markus");

for(let el of list) {
    console.log(el);
}