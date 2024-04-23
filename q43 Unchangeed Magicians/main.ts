// Q: 43

//  Define the function to show magicians names
 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array 

function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`);
}

//  Define an array containing magicians name

let magician_names = ["Daniyal", "Hamza", "Mushtaq"]


// Make a copy of original array through .slice() function

let copy_magician_names = magician_names.slice() 

// Modify the copied array to include "The Great" with their names 

let  copy_great_magicians =  make_great(copy_magician_names);

// Show both arrays original and copied

// Original

console.log("\nOriginal Array\n")
show_magicians(magician_names);

// Copied 

console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);



