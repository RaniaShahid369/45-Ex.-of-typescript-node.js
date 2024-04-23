// Define a function with a rest parameter that accept items arguments representing our 

function makeSandwish(...items: string[]){
    console.log("\nMaking a sandwish with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy sandwish");
}


// Call the function 3 times with 3 different number of arguments

makeSandwish(`Chicken`, `Cheese`, `Mayo`, `Egg`);

makeSandwish(`Bread`, `Butter`);

makeSandwish(`Chicken`, `Cheese`, `cucumber`, `Tomato`, `Mayo`, `Lettuce`, `Egg`, `Butter`, `Bread`);


