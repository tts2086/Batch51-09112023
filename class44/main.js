function Order(Items) {
    if (Items === void 0) { Items = []; }
    if (Items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    }
    else
        console.log("Your item with sandwich:\n");
    for (var _i = 0, Items_1 = Items; _i < Items_1.length; _i++) {
        var item = Items_1[_i];
        console.log("You ordered a sandwich with the following items: " + item);
    }
}
var food1 = ['Chicken Buger', 'Buff Buger', 'Drinksr', 'Water'];
Order(food1);
var food2 = ['Chicken Buger', 'Firesr', 'Drink'];
Order(food2);
var food3 = [];
Order(food3);
