// Inheritance basics in TypeScript
class Employee {
    __firstName = '';
    __lastName = '';
    __age;
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error("Name cannot be empty");
        }
        this.__firstName = name;
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
        this.__age = age;
    }
    get fullName() {
        return `${this.__firstName} ${this.__lastName}`;
    }
    static companyName = 'Kinshav Technologies'; // static property, can be accessed without creating an instance of the class
}
// now lets create a new class which inherits from employee class 
class Developer extends Employee {
    __domain = '';
    __programmingLanguage = [];
    constructor() {
        super(); // call the parent class constructor
    }
    set domain(name) {
        if (name.trim() === '') {
            throw new Error("Domain cannot be empty");
        }
        this.__domain = name;
    }
    set programmingLanguage(languages) {
        if (languages.length === 0) {
            throw new Error("Programming languages cannot be empty");
        }
        this.__programmingLanguage = languages;
    }
    get getDetails() {
        return `${this.fullName} is a developer who knows ${this.__programmingLanguage.length} programming languages.`;
    }
}
let dev = new Developer();
dev.firstName = "Naman";
dev.lastName = "Shah";
dev.age = 25;
dev.domain = "Web Development";
dev.programmingLanguage = ["JavaScript", "TypeScript", "Python"];
console.log(dev.getDetails); // Naman Shah is a developer who knows 3
export {};
