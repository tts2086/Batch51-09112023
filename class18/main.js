var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Muhammad Tariq 11-11-2023 Batch 51
var CityArry = ["Bangkok", "London", "Macau", "Singapore", "Paris", "Dubai", "New York City", "Kuala Lumpur", "Istanbul", "Delhi", "Antalya",
];
console.log("array in its original order " + CityArry + "\n");
console.log("array in sorted order " + __spreadArray([], CityArry, true).sort() + "\n");
console.log("array in its original unchange order = " + CityArry + "\n");
console.log("array in reverse sorted order = " + __spreadArray([], CityArry, true).sort().reverse() + "\n");
console.log("array in reverse change order = " + CityArry.reverse() + "\n");
console.log("array in reverse orginal  order = " + CityArry.reverse() + "\n");
console.log("array in sorted change order = " + CityArry.sort() + "\n");
console.log("array in reverse sorted change  order = " + CityArry.sort().reverse() + "\n");
