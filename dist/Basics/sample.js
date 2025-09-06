// TypeScript Concepts Summary
// ===============================
// 1. Basic Types
// ===============================
// Number, String, Boolean
let age = 25;
let name = "John";
let isActive = true;
// Array
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
// Tuple
let tuple = ["hello", 42];
// Enum
var Role;
(function (Role) {
    Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Poc"] = 2] = "Poc";
    Role[Role["GeneralUser"] = 3] = "GeneralUser";
})(Role || (Role = {}));
// String-based enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
// ===============================
// 2. Special Types
// ===============================
// Union Types
let id;
id = 1; // valid
id = "one"; // valid
// Literal Types
let grades;
grades = "A"; // valid
// ===============================
// 3. Functions
// ===============================
// Function with type annotations
function add(a, b) {
    return a + b;
}
// Void function
function log(message) {
    console.log(message);
}
// Never type
function throwError(message) {
    throw new Error(message);
}
// ===============================
// 5. Classes
// ===============================
// Basic class
class UserClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Class with access modifiers
class Employee2 {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        this._firstName = name;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    static companyName = "Company Name";
}
function loadData(source) {
    if (source.type === "file") {
        return source.path;
    }
    return source.connectionUrl;
}
// Generics
function identity(arg) {
    return arg;
}
// Generic Classes
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
// ===============================
// 7. Type Utilities
// ===============================
// Record Type
let dataStore = {
    key1: "value1",
    key2: "value2",
};
// Satisfies Operator
let vehicle = {
    brand: "Toyota",
    model: "Camry",
    year: "2023",
};
// ===============================
// 8. Type Assertions
// ===============================
let someValue = "Hello World";
let strLength = someValue.length;
// or
let strLength2 = someValue.length;
// Example usage of all these concepts
function demonstrateAll() {
    // Create a user
    const user = {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "coding"],
    };
    // Use an enum
    const userRole = Role.Admin;
    // Use generics
    const numbers = identity(42);
    const text = identity("Hello");
    // Use a class
    const employee = new Employee2();
    employee.firstName = "John";
    // Use type guards
    const source = { type: "file", path: "/path/to/file" };
    const data = loadData(source);
    console.log({ user, userRole, numbers, text, data });
}
export {};
