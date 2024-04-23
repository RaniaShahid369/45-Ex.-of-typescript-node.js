
// Q: 24


let apple ="apple";
let uppercaseApple = "APPLE";
let five = 5;
let ten = 10;
let vegetables =[`Potato`, `Tomato`, `Onion`];


// Test for equality and inequality with strings

console.log("\nIs apple = apple?");
console.log(apple == "apple");

console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");


// Tests using Lowercase function

console.log("\nIs apple is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs apple not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");


// Not equal to

console.log("\nIs five not equal to ten?");
console.log(five != ten);


// Equal to

console.log("\nIs five equal to ten?");
console.log(five == ten);

// Greater than

console.log("\nIs five > zero?");
console.log(five > 0);

// Less than

console.log("\nIs ten < than five?");
console.log(ten < five);

// Greater than or equal to

console.log("\nIs ten is greater than or equal to five?");
console.log(ten >= five);

// Less than or equal to

console.log("\nIs ten is less than or equal to five?");
console.log(ten <= five);


// Tests using "and" & "or" operators

// Using && (and)
console.log("\nTen is not equal to five and ten is greater than five");
console.log(ten != five && ten > five);


console.log("\n10 is not equal to 5 and 10 is greater than 15");
console.log(ten != five && ten > 15);

// Using || (or)
console.log("\n5 is greater than 10 or 10 is equal to 10");
console.log(5 > 10 || 5 == 5);


console.log("\n5 is greter than 10 or 10 is not equal to 10");
console.log(5 > 10 || 10 != 10);


// Tests whether an item is include in array

console.log("\nIs Potato include in my vegetables array");
console.log(vegetables.includes("Potato"));

// Not include
console.log("\nIs Potato not include in my vegetables array?");
console.log(!vegetables.includes("Potato"));