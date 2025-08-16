// getter and setter
class Employee {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    get getFullName() {
        return `${this.name} is ${this.age} years old`;
    }
}
let emp = new Employee("Naman", 25);
// console.log(emp.age); // will cause an error because age is private
// console.log(emp.getFullName);
// apart from getter we can also use setter which can be used to set the value and check the validation of the value before setting it
class Employee2 {
    _firstName = '';
    __lastName = '';
    _age = 25;
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error("Name cannot be empty");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error("Last name cannot be empty");
        }
        this.__lastName = name;
    }
    set age(age) {
        if (age < 0 || age > 100) {
            throw new Error("Age must be between 0 and 100");
        }
        this._age = age;
    }
    get fullName() {
        return `${this._firstName} ${this.__lastName}`;
    }
    static companyName = 'Kinshav Technologies'; // static property, can be accessed without creating an instance of the class
}
console.log(Employee2.companyName); // this can be accessed without creating an instance of the class
let emp2 = new Employee2();
emp2.firstName = "Naman";
emp2.lastName = "Shah";
emp2.age = 25;
console.log(emp2.fullName); // Naman Shah
export {};
