// Inheritance basics in TypeScript
class Employee {
    __firstName = '';
    __lastName = '';
    __age;
    constructor(firstName, lastName, age) {
        this.__firstName = firstName || '';
        this.__lastName = lastName || '';
        this.__age = age;
    }
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
    constructor(domain, programmingLanguage, ...item) {
        super(...item); // call the parent class constructor
        this.__domain = domain,
            this.__programmingLanguage = programmingLanguage;
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
    developerName() {
        return `${this.__firstName}`;
    }
}
// let dev = new Developer();
// let dev2 = new Developer('Web Development',["JavaScript", "TypeScript", "Python"],"Naman","Shah",25)
// console.log(dev2.developerName());
// dev.firstName = "Naman";
// dev.lastName = "Shah";
// dev.age = 25;
// dev.domain = "Web Development";
// dev.programmingLanguage = ["JavaScript", "TypeScript", "Python"];
// console.log(dev.getDetails); // Naman Shah is a developer who knows 3
// abstract classes - These are classes that cannot be instantiated directly and are meant to be extended by other classes. They can contain abstract methods (methods without implementation) that must be implemented by the derived classes.
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
}
class Navbar extends UIElement {
    constructor(identifier) {
        super(identifier);
    }
    render(position) {
        console.log(`Rendering Navbar at ${position} with identifier ${this.identifier}`);
    }
}
let navbar = new Navbar("main-navbar");
navbar.render('top'); // Rendering Navbar at top with identifier main-navbarxf
export {};
