"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
function make_shirt(size1, msg1) {
    if (size1 == '' && msg1 == '') {
        console.log('Size of T-Shirt :Large Message on T-Shirt : I Love Typescript\n');
    }
    else {
        console.log('Size of T-Shirt : ' + size1 + ' Message on T-Shirt : ' + msg1 + '\n');
    }
}
for (;;) {
    var size2 = prompt("Enter T-Shirt Size ");
    var msg2 = prompt("Enter Message to Print ");
    make_shirt(size2, msg2);
    if (size2 == '0') {
        break;
    }
}
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/ 
