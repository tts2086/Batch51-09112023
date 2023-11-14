//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();

for(;;){
    let Age1 = parseInt(prompt("Enter Person Age  ?, 0 for break loop "));
if (Age1 ===2) {
    console.log('that the person is a baby.');
}
else if (Age1 >=2 && Age1<4) {
    console.log('that the person is toddler.');
}

else if (Age1 >=4 && Age1<13) {
    console.log('that the person is a Kid.');
}
else if (Age1 >=13 && Age1<20) {
    console.log('that the person is a Teenager.');
}
else if (Age1 >=20 && Age1<65) {
    console.log('that the person is a Adult.');
}
else if (Age1 >=65) {
    console.log('that the person is a Elder.');
}
else if (Age1 ===0) {
    console.log('Loop Breat');
    break
}
}
