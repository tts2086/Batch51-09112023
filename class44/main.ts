
function Order(Items:String[]=[]){
       
    if (Items.length===0){
        console.log("You ordered an empty sandwich. Please choose some items.\n");
    }
    else
    console.log("Your item with sandwich:\n");
       for(var item of Items)       
    { 
        console.log("You ordered a sandwich with the following items: "+item);
    }


}

let food1=['Chicken Buger','Buff Buger','Drinksr','Water']
Order(food1);

let food2=['Chicken Buger','Firesr','Drink']
Order(food2);
let food3=[]
Order(food3);
