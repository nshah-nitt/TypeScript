// Interfaces are TypeScript's way to define the shape of an object, specifying what properties and methods it should have. They are used to enforce type safety and ensure that objects adhere to a specific structure.

// Use interfaces when:
// - You want to define contracts for classes or objects.
// - You need to describe the structure of complex types.
// - You want to enable code reusability and maintainability by enforcing consistent object shapes.

interface User{
    firstname: string;
    lastname: string;
    password: string;
    username: string;
    email: string;
    isloginExternal: boolean;
    externalLoginProvider?: 'google' | 'facebook' | 'github'; // optional property with union type
    passwordStrength?: 'weak' | 'medium' | 'strong'; // optional property with union type
    passwordExpiryDate?: Date; // optional property with Date type

    login?(): void
    logout?(): void
}

let user:User = {
    firstname: "Naman",
    lastname: "Shah",
    password: "password123",
    username: "naman123",
    email: "namanshah2275@gmail.com",
    isloginExternal: true,
    externalLoginProvider: 'github', // optional property can be undefined
    passwordStrength: 'strong', // optional property can be assigned a value
    passwordExpiryDate: new Date('2024-12-31') // optional property can
}
// Interfaces can also be used to define the structure of classes, ensuring that they implement specific properties and methods.

class UserClas implements User {
    constructor(public firstname: string, public lastname: string, public password: string, public username: string, public email: string, public isloginExternal: boolean, public externalLoginProvider?: 'google' | 'facebook' | 'github', public passwordStrength?: 'weak' | 'medium' | 'strong', public passwordExpiryDate?: Date) {}

    login(): void{
        // mock function to simulate user login
        // let __logged = mock.User.verifyPassword(this.password);

        // if(__logged){
        //     this.isloginExternal = true;
        // }
        console.log(`${this.firstname} ${this.lastname} logged in successfully.`);

    }

    logout(): void {
        // mock function to simulate user logout
        this.isloginExternal = false;
        console.log(`${this.firstname} ${this.lastname} logged out successfully.`);
    }
}

// interfaces can also be used to define the structure of functions, allowing you to specify the types of parameters and return values.

const userlogin = (user: User): string =>{
    return `${user.firstname} ${user.lastname} logged in with username ${user.username}`;
}

// interfaces just like the classes can also be extended to create new interfaces that inherit properties and methods from existing ones. This allows for code reuse and better organization of types.

interface Admin extends User {
   role: 'admin' | 'superadmin' | 'moderator'| 'custodian'
   permissions: string[]; // array of permissions
}