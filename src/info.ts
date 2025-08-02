// ===========================================
// COMPLETE TYPESCRIPT TYPES REFERENCE
// ===========================================

// ===========================================
// 1. PRIMITIVE TYPES
// ===========================================
let num: number = 42;
let str: string = "hello";
let bool: boolean = true;
let sym: symbol = Symbol("id");
let n: null = null;
let u: undefined = undefined;

// ===========================================
// 2. SPECIAL TYPES
// ===========================================
let anything: any = "can be anything";
let unknown: unknown = "type-safe any";
let nothing: void = undefined; // function return type
let never: never; // never returns (throws or infinite loop)
let obj: object = {}; // non-primitive types

// ===========================================
// 3. LITERAL TYPES
// ===========================================
let stringLiteral: "hello" | "world" = "hello";
let numericLiteral: 1 | 2 | 3 = 2;
let booleanLiteral: true = true;
type Directions = "north" | "south" | "east" | "west";
type HttpStatus = 200 | 404 | 500;

// Template Literal Types
type Greeting = `hello-${string}`;
type EventName = `on${Capitalize<string>}`;

// ===========================================
// 4. ARRAY AND TUPLE TYPES
// ===========================================
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
let readonlyNumbers: ReadonlyArray<number> = [1, 2, 3];
let immutableArray: readonly number[] = [1, 2, 3];

// Tuples
let tuple: [string, number] = ["hello", 42];
let readonlyTuple: readonly [string, number] = ["hello", 42];
let namedTuple: [name: string, age: number] = ["John", 30];

// Rest in Tuples
let restTuple: [string, ...number[]] = ["first", 1, 2, 3];

// ===========================================
// 5. OBJECT TYPES
// ===========================================
// Object literal type
let person: { name: string; age: number } = {
  name: "John",
  age: 30
};

// Optional properties
let user: { name: string; age?: number } = { name: "Jane" };

// Index signatures
let dictionary: { [key: string]: any } = {};
let numberDict: { [key: string]: number } = { a: 1, b: 2 };

// ===========================================
// 6. INTERFACE TYPES
// ===========================================
interface User {
  readonly id: number;
  name: string;
  age?: number;
  email: string;
}

interface AdminUser extends User {
  permissions: string[];
}

// Call signature
interface Callable {
  (x: number): string;
}

// Construct signature
interface Constructable {
  new (x: number): string;
}

// Method signature
interface Calculator {
  add(x: number, y: number): number;
  subtract: (x: number, y: number) => number;
}

// ===========================================
// 7. FUNCTION TYPES
// ===========================================
// Function type expression
let func1: (x: number) => string = (x) => x.toString();

// Function with optional parameters
let func2: (x: number, y?: string) => void;

// Function with rest parameters
let func3: (...args: number[]) => number;

// Function with default parameters
function greet(name: string = "World"): string {
  return `Hello, ${name}!`;
}

// Overloaded functions
function convert(x: string): number;
function convert(x: number): string;
function convert(x: string | number): string | number {
  return typeof x === "string" ? parseInt(x) : x.toString();
}

// ===========================================
// 8. UNION AND INTERSECTION TYPES
// ===========================================
// Union types
type StringOrNumber = string | number;
type Status = "loading" | "success" | "error";

// Intersection types
type Person = { name: string };
type Employee = { employeeId: number };
type PersonEmployee = Person & Employee;

// Discriminated unions
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

// ===========================================
// 9. UTILITY TYPES (BUILT-IN)
// ===========================================
interface OriginalUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - makes all properties optional
type PartialUser = Partial<OriginalUser>;

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties read-only
type ReadonlyUser = Readonly<OriginalUser>;

// Pick - select specific properties
type UserNameEmail = Pick<OriginalUser, "name" | "email">;

// Omit - exclude specific properties
type UserWithoutId = Omit<OriginalUser, "id">;

// Record - create object with specific key-value types
type UserRoles = Record<"admin" | "user" | "guest", boolean>;
type StringRecord = Record<string, any>;

// Exclude - exclude types from union
type NonStringTypes = Exclude<string | number | boolean, string>;

// Extract - extract types from union
type StringTypes = Extract<string | number | boolean, string>;

// ReturnType - extract return type of function
type FunctionReturn = ReturnType<typeof greet>;

// Parameters - extract parameter types
type FunctionParams = Parameters<typeof greet>;

// ConstructorParameters - extract constructor parameter types
type DateConstructor = ConstructorParameters<typeof Date>;

// InstanceType - extract instance type of constructor
type DateInstance = InstanceType<typeof Date>;

// ===========================================
// 10. ENUM TYPES
// ===========================================
// Numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// String enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

// Mixed enum
enum Response {
  No = 0,
  Yes = 1,
  Maybe = "maybe"
}

// Const enum (inlined at compile-time)
const enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info"
}

// ===========================================
// 11. GENERIC TYPES
// ===========================================
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic class
class GenericClass<T, U> {
  constructor(public first: T, public second: U) {}
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Conditional types
type IsArray<T> = T extends any[] ? true : false;

// Mapped types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

// ===========================================
// 12. ADVANCED TYPES
// ===========================================
// keyof operator
type UserKeys = keyof OriginalUser; // "id" | "name" | "email" | "age"

// typeof operator
const userObj = { name: "John", age: 30 };
type UserObjType = typeof userObj;

// Indexed access types
type UserName = OriginalUser["name"]; // string
type UserNameOrEmail = OriginalUser["name" | "email"]; // string

// Conditional types with infer
type ReturnTypeCustom<T> = T extends (...args: any[]) => infer R ? R : never;

// Template literal types
type EventNames = "click" | "scroll" | "mousemove";
type EventHandlers = {
  [E in EventNames as `on${Capitalize<E>}`]: (event: Event) => void;
};

// ===========================================
// 13. MODULE AND NAMESPACE TYPES
// ===========================================
// Namespace
namespace Utilities {
  export interface Config {
    version: string;
  }
  
  export function helper(): void {}
}

// Module augmentation
declare global {
  interface Window {
    myGlobalVar: string;
  }
}

// ===========================================
// 14. DECLARATION TYPES
// ===========================================
// Ambient declarations
declare const BUILD_VERSION: string;
declare function externalFunction(x: number): void;

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
let someValue: unknown = "hello";
let strLength1 = (someValue as string).length;
let strLength2 = (<string>someValue).length;

// Type guards
function isString(x: any): x is string {
  return typeof x === "string";
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string";
}

// ===========================================
// 16. COMPLEX REAL-WORLD EXAMPLES
// ===========================================
// API Response type
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

// Event system
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
  resize: { width: number; height: number };
};

type EventListener<K extends keyof EventMap> = (event: EventMap[K]) => void;

// Form validation
type ValidationRule<T> = (value: T) => string | null;
type FormValidation<T> = {
  [K in keyof T]: ValidationRule<T[K]>[];
};

// Database model
interface Model {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Post extends Model {
  title: string;
  content: string;
  authorId: number;
}

type CreatePost = Omit<Post, keyof Model>;
type UpdatePost = Partial<CreatePost>;

// ===========================================
// 17. BRANDED/NOMINAL TYPES
// ===========================================
type Brand<T, U> = T & { __brand: U };
type UserId = Brand<number, "UserId">;
type PostId = Brand<number, "PostId">;

function getUser(id: UserId): User | null {
  // Implementation
  return null;
}

// ===========================================
// 18. RECURSIVE TYPES
// ===========================================
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

// ===========================================
// 19. HIGHER-ORDER TYPES
// ===========================================
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ===========================================
// 20. TYPE CHALLENGES EXAMPLES
// ===========================================
// Flatten array type
type Flatten<T extends readonly any[]> = T extends readonly [infer H, ...infer R]
  ? H extends readonly any[]
    ? [...Flatten<H>, ...Flatten<R>]
    : [H, ...Flatten<R>]
  : [];

// String manipulation
type KebabCase<S extends string> = S extends `${infer C}${infer T}`
  ? KebabCase<T> extends infer U
    ? U extends string
      ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${U}`
        : `${Uncapitalize<C>}-${U}`
      : never
    : never
  : S;

export {};