//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();

var usernames = ['admin', 'Ali', 'Assad','Majeed'];

for(;;){
    let name =prompt("Enter User name ?, B for break loop ")
    //console.log(usernames[usernames.indexOf(name)], name); 


if (usernames[usernames.indexOf(name)] ==='admin') {
    console.log('Hello admin, would you like to see a status report?');
}
else if (usernames[usernames.indexOf(name)] !=='admin' && usernames.indexOf(name)>=0) {
    console.log('Hello '+ usernames[usernames.indexOf(name)]+', thank you for logging in again');
}
else if (name =='b' || name =='B') {
    console.log('Loop Break');
    break
}
}
/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will 
print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/