"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
var favorite_fruits = ['Cherry', 'Banana', 'Pineapple'];
for (;;) {
    var name_1 = prompt("Enter Favorite fruits name ?, B for break loop ");
    if (favorite_fruits[favorite_fruits.indexOf(name_1)] === 'Banana') {
        console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name_1)]);
    }
    else if (favorite_fruits[favorite_fruits.indexOf(name_1)] === 'Pineapple') {
        console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name_1)]);
    }
    else if (favorite_fruits[favorite_fruits.indexOf(name_1)] === 'Banana') {
        console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name_1)]);
    }
    else if (name_1 === 'b' || name_1 === 'B') {
        console.log('Loop Breat');
        break;
    }
}
