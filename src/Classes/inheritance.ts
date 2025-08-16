// Inheritance basics in TypeScript

class Employee {
    protected __firstName: string = '';
    protected __lastName: string = '';
    protected  __age?: number| undefined;

    constructor(firstName?: string, lastName?: string, age?: number) {
        this.__firstName = firstName || '';
        this.__lastName = lastName || '';
        this.__age = age;
    }

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error("Name cannot be empty");
        }
        this.__firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error("Last name cannot be empty");
        }
        this.__lastName = name;
    }

    set age(age: number) {
        if (age < 0 || age > 100) {
            throw new Error("Age must be between 0 and 100");
        }
        this.__age = age;
    }

    get fullName(): string {
        return `${this.__firstName} ${this.__lastName}`;
    }
    
    static companyName: string = 'Kinshav Technologies'; // static property, can be accessed without creating an instance of the class
}

// now lets create a new class which inherits from employee class 

class Developer extends Employee {
    private __domain:string = '';
    private __programmingLanguage: string[] = [];

    constructor(domain:string, programmingLanguage: string[],...item: any[]) {
        super(...item); // call the parent class constructor

        this.__domain = domain,
        this.__programmingLanguage = programmingLanguage;
    }

    set domain(name:string){
        if(name.trim() === ''){
            throw new Error("Domain cannot be empty");
        }
        this.__domain = name;
    }

    set programmingLanguage(languages: string[]) {
        if (languages.length === 0) {
            throw new Error("Programming languages cannot be empty");
        }
        this.__programmingLanguage = languages;
    }

    get getDetails(): string {
        
        return `${this.fullName} is a developer who knows ${this.__programmingLanguage.length} programming languages.`;
    }
    
    developerName() : string {
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

abstract class UIElement {
    constructor(public identifier: string) {}

    public abstract render(position: 'left' | 'right' | 'center' | 'top' | 'bottom'): void
}

class Navbar extends UIElement {
    constructor(identifier: string) {
        super(identifier);
    }

    public render(position: 'left' | 'right' | 'center' | 'top' | 'bottom'): void {
        console.log(`Rendering Navbar at ${position} with identifier ${this.identifier}`);
    }
}

let navbar = new Navbar("main-navbar");
navbar.render('top'); // Rendering Navbar at top with identifier main-navbarxf
