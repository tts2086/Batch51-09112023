var cars = [
    {
        Name: "Mercedes-Benz",
        Model: "SL600",
        ManfuctureYear: 2020
    },
    {
        Name: "BMW",
        Model: "X& SUV",
        ManfuctureYear: 2023
    },
    {
        Name: "Jaguar",
        Model: "F-PACE",
        ManfuctureYear: 2024
    },
    {
        Name: "Porsche",
        Model: "718 Boxster",
        ManfuctureYear: 2024
    }
];
// Print information about each book
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("Title: ".concat(car.Name, ", Author: ").concat(car.Model, ", Publication Year: ").concat(car.ManfuctureYear));
}
