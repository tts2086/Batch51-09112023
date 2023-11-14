//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();

var favorite_fruits = ['Cherry', 'Banana', 'Pineapple'];

for(;;){
    let name =prompt("Enter Favorite fruits name ?, B for break loop ")
if (favorite_fruits[favorite_fruits.indexOf(name)].toLowerCase() ==='Banana'.toLowerCase()) {
    console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name)]);
}
else if (favorite_fruits[favorite_fruits.indexOf(name)].toLowerCase() ==='Pineapple'.toLowerCase()) {
    console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name)]);
}

else if (favorite_fruits[favorite_fruits.indexOf(name)].toLowerCase() ==='Cherry'.toLowerCase()) {
    console.log('really like ', favorite_fruits[favorite_fruits.indexOf(name)]);
}

else if (name ==='b' || name ==='B') {
    console.log('Loop Breat');
    break
}
}
