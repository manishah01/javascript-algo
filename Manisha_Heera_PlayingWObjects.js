var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//print John's Age //
console.log(users[1].age);

// print-log first object name //
console.log(users[0].name);

// all users & age using a for loop//
for (var i=0; i<users.length;i++){
console.log(users[i].name,"-", users[i].age);
}
