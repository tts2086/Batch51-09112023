"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
//let name =prompt("Enter Alien Color ? ");
var alien_color = ['Green', 'Yellow', 'Red'];
for (;;) {
    var name_1 = prompt("Enter Alien Color ? ");
    if (alien_color[alien_color.indexOf(name_1)] === 'Green') {
        console.log('the alien is green,  the player earned 5 points.');
    }
    else if (alien_color[alien_color.indexOf(name_1)] === 'Yellow') {
        console.log('the alien is green,  the player earned 10 points.');
    }
    else if (alien_color[alien_color.indexOf(name_1)] === 'Red') {
        console.log('the alien is Red,  the player earned 15 points.');
    }
    else if (name_1 === 'b' || name_1 === 'B') {
        console.log('Loop Breat');
        break;
    }
}
//if (alien_color.indexOf('Pink') < 0) {
//    console.log('Not find any Pink Alien, the player just earned 0 points.');
//
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/ 
