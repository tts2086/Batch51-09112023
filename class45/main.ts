interface CarDetails {
  manufacturer: string;
  modelName: string;
  [key: string]: any; // Allows for any additional properties with string keys
}
function carsFun(details:CarDetails){
  const { manufacturer, modelName, ...additionalDetails } = details;
          console.log('Manufacturer : '+manufacturer);
          console.log('Model Name:' +modelName);
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