//Q: 11
    //   Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing 
    // each element in the list, one at a time.
    
    //  let friends: string[] =[`Naseem`,`Mohsin`,`Ayesha`,`Zeenat`,`Adifa`];
    //  for (let index = 0; index < friends.length; index++) {
    //  console.log(friends[index]);
    //  }


    //Q: 12
        //  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
        //  print a message to them. The text of each message should be the same, but each message should be personalized 
        // with the person’s name.


        let friends: string[] =[`Naseem`,`Mohsin`,`Ayesha`,`Zeenat`,`Adifa`];
        let message: string = `May Allah bless you ` ; for ( let index = 0; index < friends.length; index++) {
        console.log(message+friends[index]);
        }



