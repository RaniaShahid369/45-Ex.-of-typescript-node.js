// Q: 21

interface item {
    name: string
    price: number
}

// Create two objects

const book : item = {
name : `Essential TypeScript`
price : 500
}

const mango : item = {
    name : `mango`,
    price : 300
}

console.log(`book name : ${book.name}, price: $${book.price}`);

console.log(`mango name : ${mango.name}, price: $${mango.price}`);
