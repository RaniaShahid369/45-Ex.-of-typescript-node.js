// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I enjoy coding with TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a function with by-default value
make_shirt();
//  Calling a function now with Medium size and default message
make_shirt("medium");
// Calling a function now with small size with different print message
make_shirt("small", "I enjoy coding with JavaScript too");
