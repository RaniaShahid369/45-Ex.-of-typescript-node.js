let users: string[] = [`Shaheer`, `Ismail`, `Hamza`, `Kashif`, `Admin`]

for(let user of users)
    if (user === `Admin`){
        console.log(`Hello Admin, Would you like to see a status report?`)
    }

    else {
        console.log(`Hello ${user}, Thank you for logging in again.`)
    }

