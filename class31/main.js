"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
//let name =prompt("Enter Alien Color ? ");
var current_users = ['Ali', 'Tariq', 'Hamza', 'Yazdani', 'Aijaz'];
var count1 = current_users.length;
for (var i = 0; i < count1; i++) {
    if (current_users.length > 0) {
        current_users = [];
        console.log('thAll user remove.');
    }
    else if (current_users.length <= 0) {
        console.log('Need to find new users!');
    }
    //console.log(alien_color.length);
    //console.log(alien_color.length[0]);
}
