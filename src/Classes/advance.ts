// getter and setter

class Employee {
    constructor(private name: string, private age: number){};

    get getFullName(): string {
        return `${this.name} is ${this.age} years old`;
    }
}

let emp = new Employee("Naman", 25);
// console.log(emp.age); // will cause an error because age is private

// console.log(emp.getFullName);


// apart from getter we can also use setter which can be used to set the value and check the validation of the value before setting it

class Employee2 {
    private _firstName:string = '';
    private __lastName:string = '';
    private _age?:number = 25;

    set firstName(name:string){
        if(name.trim() === ''){
            throw new Error("Name cannot be empty");
        }
        this._firstName = name;
    }

    set lastName(name:string){
        if(name.trim() === ''){
            throw new Error("Last name cannot be empty");
        }
        this.__lastName = name;
    }

    set age(age:number){
        if(age < 0 || age > 100){
            throw new Error("Age must be between 0 and 100");
        }
        this._age = age;
    }

    get fullName():string {
        return `${this._firstName} ${this.__lastName}`;
    }

    static companyName: string = 'Kinshav Technologies'; // static property, can be accessed without creating an instance of the class
}

console.log(Employee2.companyName); // this can be accessed without creating an instance of the class

let emp2 = new Employee2();
emp2.firstName = "Naman";
emp2.lastName = "Shah";
emp2.age = 25;

console.log(emp2.fullName); // Naman Shah


