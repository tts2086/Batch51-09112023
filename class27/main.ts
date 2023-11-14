//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();
//let name =prompt("Enter Alien Color ? ");

var alien_color = ['Green', 'Yellow', 'Red'];

for(;;){
    let name =prompt("Enter Alien Color ?, B for break loop ")
if (alien_color[alien_color.indexOf(name)] ==='Green') {
    console.log('the alien is green,  the player earned 5 points.');
}
else if (alien_color[alien_color.indexOf(name)] ==='Yellow') {
    console.log('the alien is green,  the player earned 10 points.');
}

else if (alien_color[alien_color.indexOf(name)] ==='Red') {
    console.log('the alien is Red,  the player earned 15 points.');
}

else if (name ==='b' || name ==='B') {
    console.log('Loop Breat');
    break
}
}
