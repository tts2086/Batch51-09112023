//Tests for equality and inequality with strings
var str1 = "Tariq";
var str2 = "Sheikh";
console.log("str1=Tariq, str2=Sheikh\n");
console.log('Testing String equality', str1 == str2);
console.log("Testing String inequality", str1 !== str2);
console.log("\nTests using the lower case function\n");
console.log('Testing String equality', str1.toLowerCase() == str2.toLowerCase());
console.log("Testing String inequality", str1.toLowerCase() !== str2.toLowerCase());
console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to\n");
var Num1 = 36;
var Num2 = 49;
console.log('Testing Number equality, Number 36,49', Num1 == Num2);
console.log('Testing Number inequality, Number 36,49', Num1 !== Num2);
console.log('Testing Number Greater then, Number 36,49', Num1 > Num2);
console.log('Testing Number Less Then, Number 36,49', Num1 < Num2);
console.log('Testing Number Greater then or equail to, Number 36,49', Num1 >= Num2);
console.log('Testing Number Less Then or equail, Number 36,49', Num1 <= Num2);
//Tests using "and" and "or" operators
console.log('\nTests using "and" and "or" operators\n');
console.log('Testing Number and opertor, Number 36,49', (Num1 > Num2) && (Num1 < Num2));
console.log('Testing Number or opertor, Number 36,49', (Num1 > Num2) || (Num1 < Num2));
console.log("\nTest whether an item is in a array\n");
var furiteArry = ['Apple', 'Mongo', 'Grape', 'Pineapple'];
var bol1 = false;
if (furiteArry.indexOf("Banana") == -1) {
    bol1 = false;
}
console.log('Find Banana in Furite list', bol1);
if (furiteArry.indexOf("Mongo") > 0) {
    bol1 = true;
}
console.log('Find Mongo in Furite list', bol1);
