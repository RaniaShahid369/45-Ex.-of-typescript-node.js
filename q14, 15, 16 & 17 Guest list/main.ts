// Q: 14

let guest_list: string[] =  [`Hassam`, `Abid`, `Mushtaq`, `Ahtisham` ];

// for (let i=0; i<guest_list.length; i++){ 
    // console.log(`\n\nDear ` + guest_list[i] + `\nYou are invited for dinner today.\nThank you.`);
// }





// Q : 15

let not_coming: string = `Hassam`;
let new_guest: string = `Ismail`;
guest_list[0] = new_guest;

// for (let i=0; i<guest_list.length; i++){
//     console.log(`\n\nDear ` + guest_list[i] + `\nYou are invited for dinner today.\nThank you.\n\n`);
// }

// console.log(`Mr. ${not_coming} is not coming for dinner.`);




// Q: 16

guest_list.unshift(`Naseem`);
guest_list.splice(guest_list.length/2, 2, `Waseem`);
guest_list.push(`Babar Azam`);

// for (let i=0; i<guest_list.length; i++){
//     console.log(`\n\nDear ` + guest_list[i] + `\nYou are invited for dinner today.\nThank you.\n\n`);
// }

// console.log(`We have found a bigger dinner table so we invited more guests.`);





// Q: 17 

console.log(`\n\nUnfortunately we are out of space, so we have space for two guest only.\n\n`);
while(guest_list.length>2){
    let removed_guest = guest_list.pop()
    console.log(` Sorry Dear ${removed_guest}, You are not invited for a dinner.`);
}

for (let i=0; i<guest_list.length; i++){
         console.log(`\n\nDear ` + guest_list[i] + `\nYou all are still invited for dinner today.\nThank you.\n\n`);
     }

     guest_list.splice(0.2);
     console.log(guest_list);
     
    

    
