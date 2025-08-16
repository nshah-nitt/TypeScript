// Interfaces are TypeScript's way to define the shape of an object, specifying what properties and methods it should have. They are used to enforce type safety and ensure that objects adhere to a specific structure.
let user = {
    firstname: "Naman",
    lastname: "Shah",
    password: "password123",
    username: "naman123",
    email: "namanshah2275@gmail.com",
    isloginExternal: true,
    externalLoginProvider: 'github', // optional property can be undefined
    passwordStrength: 'strong', // optional property can be assigned a value
    passwordExpiryDate: new Date('2024-12-31') // optional property can
};
// Interfaces can also be used to define the structure of classes, ensuring that they implement specific properties and methods.
class UserClas {
    firstname;
    lastname;
    password;
    username;
    email;
    isloginExternal;
    externalLoginProvider;
    passwordStrength;
    passwordExpiryDate;
    constructor(firstname, lastname, password, username, email, isloginExternal, externalLoginProvider, passwordStrength, passwordExpiryDate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.username = username;
        this.email = email;
        this.isloginExternal = isloginExternal;
        this.externalLoginProvider = externalLoginProvider;
        this.passwordStrength = passwordStrength;
        this.passwordExpiryDate = passwordExpiryDate;
    }
    login() {
        // mock function to simulate user login
        // let __logged = mock.User.verifyPassword(this.password);
        // if(__logged){
        //     this.isloginExternal = true;
        // }
        console.log(`${this.firstname} ${this.lastname} logged in successfully.`);
    }
    logout() {
        // mock function to simulate user logout
        this.isloginExternal = false;
        console.log(`${this.firstname} ${this.lastname} logged out successfully.`);
    }
}
export {};
