"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
function describe_city(City1, Country1) {
    if (City1 == '' && Country1 == '') {
        console.log('Karachi in Pakistan\n');
    }
    else {
        console.log(City1 + 'is in' + Country1 + '\n');
    }
}
for (;;) {
    var City2 = prompt("Enter City ");
    var Country2 = prompt("Enter Country ");
    if (City2 == '0') {
        break;
    }
    describe_city(City2, Country2);
}
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/ 
