// Q: 42
//  Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//  Define an array containing magicians name
var magician_names = ["Daniyal", "Hamza", "Mushtaq"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
