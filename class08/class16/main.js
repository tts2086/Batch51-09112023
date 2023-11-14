//Muhammad Tariq 11-11-2023 Batch 51
var FriendArry = ["Aliyan", "Hashim", "Huzaifa", "Maahir", "Mahad", "Nahyan"];
//for (var i = 0; i < FriendArry.length; i++) {
//    console.log('Dear ' + FriendArry[i] + '\n You are invited to dinner. We would pleased to have your presence.\n Sincerely Tariq Sheikh\n');
//}
FriendArry[3] = "Azam";
for (var i = 0; i < FriendArry.length; i++) {
    console.log('Dear ' + FriendArry[i] + '\n You are invited to dinner. We would pleased to have your presence.\n Sincerely Tariq Sheikh\n');
}
console.log("\nGood news! We found a bigger dinner table!\n");
FriendArry.unshift("Ali Ahmed");
FriendArry.splice(3, 0, "Kashif Majeed");
FriendArry.push("Rafat Shah");
for (var i = 0; i < FriendArry.length; i++) {
    console.log('Dear ' + FriendArry[i] + '\n You are invited to dinner. We would pleased to have your presence.\n Sincerely Tariq Sheikh\n');
}
