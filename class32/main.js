"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tariq Batch 510
var promptSync = require("prompt-sync");
var prompt = promptSync();
//let name =prompt("Enter Alien Color ? ");
var current_users = ['Ali', 'Tariq', 'Hamza', 'Yazdani', 'Aijaz'];
var new_users = ['Ali', 'Ayaan', 'Abbas', 'Asif', 'Aijaz'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var nuser = new_users_1[_i];
    if (current_users_lower[current_users_lower.indexOf(nuser.toLowerCase())] == nuser.toLowerCase()) {
        console.log('the person will need to enter a new username.');
    }
    else {
        console.log('Great username is available!');
    }
    //console.log(alien_color.length);
    //console.log(alien_color.length[0]);
}
