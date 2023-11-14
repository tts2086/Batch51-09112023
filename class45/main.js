var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function carsFun(details) {
    var manufacturer = details.manufacturer, modelName = details.modelName, additionalDetails = __rest(details, ["manufacturer", "modelName"]);
    console.log('Manufacturer : ' + manufacturer);
    console.log('Model Name:' + modelName);
    console.log(additionalDetails);
}
carsFun({
    manufacturer: 'Toyota',
    modelName: '2021',
    color: 'Peral White',
    year: 2023,
    weight: 1500,
});
carsFun({
    manufacturer: 'Mercedes-Benz',
    modelName: 'SLC600',
    color: 'Peral White',
    year: 2022,
    Climate: 'AC',
});
/*       let car1 = 'Toyota';
let car2 = 'Mercedes-Benz';
let car3 = 'BMW';
let car4 = 'Jaguar';
let car5 = 'Porsche';


console.log('Is car == Toyota? I predict True.');
console.log(car1 == 'Toyota');

console.log('Is car == Mercedes-Benz? I predict True.');
console.log(car2 == 'Mercedes-Benz');

console.log('Is car == BMW? I predict True.');
console.log(car3 == 'BMW');

console.log('Is car == Jaguar? I predict True.');
console.log(car4 == 'Jaguar');

console.log('Is car == Porsche? I predict True.');
console.log(car5 == 'Porsche');
console.log('\n')
console.log('Is car == Toyota? I predict false.');
console.log(car1 == 'Toyota1');

console.log('Is car == Mercedes-Benz? I predict false.');
console.log(car2 == 'Mercedes-Benz1');

console.log('Is car == BMW? I predict false.');
console.log(car3 == 'BMW1');

console.log('Is car == Jaguar? I predict false.');
console.log(car4 == 'Jaguar1');

console.log('Is car == Porsche? I predict false.');
console.log(car5 == 'Porsche1');
*/ 
