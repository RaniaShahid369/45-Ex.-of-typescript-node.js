
// Q: 32


let current_users: string[] = [`ismail`, `haris`, `mohsin`, `ahtisham`, `rehan`]
let new_users: string[] = [`Ismail`]

new_users.forEach((new_users) => {
    if (current_users.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())
    )
{console.log(`${new_users} Will need to enter new user name`)
}

else{
    console.log(`${new_users} is availabe`)
}
});

