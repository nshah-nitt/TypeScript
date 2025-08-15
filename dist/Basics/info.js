// ===========================================
// COMPLETE TYPESCRIPT TYPES REFERENCE
// ===========================================
// ===========================================
// 1. PRIMITIVE TYPES
// ===========================================
let num = 42;
let str = "hello";
let bool = true;
let sym = Symbol("id");
let n = null;
let u = undefined;
// ===========================================
// 2. SPECIAL TYPES
// ===========================================
let anything = "can be anything";
let unknown = "type-safe any";
let nothing = undefined; // function return type
let never; // never returns (throws or infinite loop)
let obj = {}; // non-primitive types
// ===========================================
// 3. LITERAL TYPES
// ===========================================
let stringLiteral = "hello";
let numericLiteral = 2;
let booleanLiteral = true;
// ===========================================
// 4. ARRAY AND TUPLE TYPES
// ===========================================
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
let readonlyNumbers = [1, 2, 3];
let immutableArray = [1, 2, 3];
// Tuples
let tuple = ["hello", 42];
let readonlyTuple = ["hello", 42];
let namedTuple = ["John", 30];
// Rest in Tuples
let restTuple = ["first", 1, 2, 3];
// ===========================================
// 5. OBJECT TYPES
// ===========================================
// Object literal type
let person = {
    name: "John",
    age: 30
};
// Optional properties
let user = { name: "Jane" };
// Index signatures
let dictionary = {};
let numberDict = { a: 1, b: 2 };
// ===========================================
// 7. FUNCTION TYPES
// ===========================================
// Function type expression
let func1 = (x) => x.toString();
// Function with optional parameters
let func2;
// Function with rest parameters
let func3;
// Function with default parameters
function greet(name = "World") {
    return `Hello, ${name}!`;
}
function convert(x) {
    return typeof x === "string" ? parseInt(x) : x.toString();
}
// ===========================================
// 10. ENUM TYPES
// ===========================================
// Numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// String enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
// Mixed enum
var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
    Response["Maybe"] = "maybe";
})(Response || (Response = {}));
// ===========================================
// 11. GENERIC TYPES
// ===========================================
// Generic function
function identity(arg) {
    return arg;
}
// Generic class
class GenericClass {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
// typeof operator
const userObj = { name: "John", age: 30 };
// ===========================================
// 13. MODULE AND NAMESPACE TYPES
// ===========================================
// Namespace
var Utilities;
(function (Utilities) {
    function helper() { }
    Utilities.helper = helper;
})(Utilities || (Utilities = {}));
// Module declarations
/**
 * Example module declaration.
 * Replace "some-library" with the actual module name if/when you install one.
 * Remove this if you don't need to augment or declare external modules.
 */
// declare module "some-library" {
//   export function someFunction(): void;
// }
// ===========================================
// 15. TYPE ASSERTION AND TYPE GUARDS
// ===========================================
// Type assertions
let someValue = "hello";
let strLength1 = someValue.length;
let strLength2 = someValue.length;
// Type guards
function isString(x) {
    return typeof x === "string";
}
function isUser(obj) {
    return obj && typeof obj.name === "string";
}
function getUser(id) {
    // Implementation
    return null;
}
export {};
