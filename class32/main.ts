//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();
//let name =prompt("Enter Alien Color ? ");
var current_users=['Ali','Tariq','Hamza','Yazdani','Aijaz'];
var new_users=['Ali','Ayaan','Abbas','Asif','Aijaz'];
const current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for(var nuser of new_users){
    
if (current_users_lower[current_users_lower.indexOf(nuser.toLowerCase())]==nuser.toLowerCase()) {
   
    console.log('the person will need to enter a new username.');
}
else {
    console.log('Great username is available!');
}
//console.log(alien_color.length);
//console.log(alien_color.length[0]);
}

