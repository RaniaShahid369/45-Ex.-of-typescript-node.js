
let places: string [] = [`Karachi`, `Islamabad`, `Sydney`, `Paris`, `New york`];

// print your array in its original order
console.log(`roiginal ` + places);

// print your array in alphabetical order without modifying the actual list.
console.log(`copy ` + [...places].sort());

// show that your array is still in its original order by printing it.
console.log(`original ` + places);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy ` + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log(`copy ` + [...places].sort().reverse());


// Reverse the order of your list. Print the array to show that its order has changed.
console.log(`copy ` + [...places].sort());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`copy ` + [...places].sort().reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`copy ` + [...places].sort());

