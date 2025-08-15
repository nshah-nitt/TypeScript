// defining a basic class in ts
class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
// alternative way using public keywords (which automatically creates properties and can be used outside of the class)
// if we omit the public keyword then also the property would be treated as public but inittialization of the property would not be done in the constructor
class User2 {
    name;
    age;
    email;
    subjectCode = []; // with public subjects can be assigned or accessed outside the class
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let naman = new User2("Naman", 25);
naman.subjectCode = ["CS101", "MTH103", "PHY303", "PR33"]; // can assign values to public properties
console.log(naman, naman.subjectCode); // can be accessed outside the class
// we also have private and protected keywords which restrict this behaviour and can be used to create private properties or methods that can only be accessed within the class or its subclasses. 
// apart from this standard keywords we also have readonly keyword which can be used to create properties that can only be assigned once and cannot be changed later. (can do editing but assignment is not allowed)
class User3 {
    id; // this property can only be assigned once and cannot be changed later
    constructor(id) {
        this.id = id;
    }
}
let user2 = new User3(1);
// user2.id = 3 // this will cause an error because id is readonly and cannot be changed after initialization
console.log(user2);
export {};
