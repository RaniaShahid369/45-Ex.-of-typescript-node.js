// Q: 32
var current_users = ["ismail", "haris", "mohsin", "ahtisham", "rehan"];
var new_users = ["Ismail"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " Will need to enter new user name"));
    }
    else {
        console.log("".concat(new_users, " is availabe"));
    }
});
