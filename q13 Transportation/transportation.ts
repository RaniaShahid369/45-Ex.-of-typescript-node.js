// Q: 13
// Your own array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several
//  examples. Use your list to print a series of statements about these items, such as “I would like to own a
//   Honda motorcycle.”

let transportation: string[] = [`car`, `bike`, `plane`, `cycle`];
for (let index = 0; index < transportation.length; index++) {
    console.log(`I would like to own a ` + transportation[index]);
    
}