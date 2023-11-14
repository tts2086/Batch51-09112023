// Assuming you have a variable with the person's name
var pName = "Eric";
// Convert the name to lowercase
var lowerCName = pName.toLowerCase();
// Convert the name to uppercase
var upperCName = pName.toUpperCase();
// Convert the name to title case
var title = pName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// Printing the names
console.log("Lowercase: ".concat(lowerCName));
console.log("Uppercase: ".concat(upperCName));
console.log("Titlecase: ".concat(title));
