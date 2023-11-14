"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
var name = prompt("Enter Alien Color");
var alien_color = ['Green', 'Yellow', 'Red'];
//let kind: string  = "";
//let name1 = prompt(`What's your ${kind}name? );
if (alien_color.indexOf(name) >= 0) {
    console.log(' Find Green Alien, the player just earned 5 points.');
}
else {
    console.log(' Find Green Alien, the player just earned 10 points.');
}
//if (alien_color.indexOf('Pink') < 0) {
//    console.log('Not find any Pink Alien, the player just earned 0 points.');
//
