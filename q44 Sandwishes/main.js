// Define a function with a rest parameter that accept items arguments representing our 
function makeSandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwish with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy sandwish");
}
// Call the function 3 times with 3 different number of arguments
makeSandwish("Chicken", "Cheese", "Mayo", "Egg");
makeSandwish("Bread", "Butter");
makeSandwish("Chicken", "Cheese", "cucumber", "Tomato", "Mayo", "Lettuce", "Egg", "Butter", "Bread");
