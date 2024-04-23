// Making a Function

function make_shirt (size: string = "large", printMessage: string = "I enjoy coding with TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default value

make_shirt();

//  Calling a function now with Medium size and default message

make_shirt("medium")

// Calling a function now with small size with different print message

make_shirt("small", "I enjoy coding with JavaScript too")