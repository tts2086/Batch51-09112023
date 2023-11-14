// Assuming you have a variable with the person's name
let pName: string = "Eric";

// Convert the name to lowercase
let lowerCName: string = pName.toLowerCase();

// Convert the name to uppercase
let upperCName: string = pName.toUpperCase();

// Convert the name to title case
let title: string = pName.replace(/\b\w/g, (char) => char.toUpperCase());

// Printing the names
console.log(`Lowercase: ${lowerCName}`);
console.log(`Uppercase: ${upperCName}`);
console.log(`Titlecase: ${title}`);
