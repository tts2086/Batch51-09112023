// Define a TypeScript interface for the Book object
interface Car {
    Name: string;
    Model: string;
    ManfuctureYear: number;
}

let cars: Car[] = [
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
for (let car of cars) {
    console.log(`Name: ${car.Name}, Model: ${car.Model}, MAnfucture Year: ${car.ManfuctureYear}`);
}
