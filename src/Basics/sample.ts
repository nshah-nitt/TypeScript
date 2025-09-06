// TypeScript Concepts Summary

// ===============================
// 1. Basic Types
// ===============================

// Number, String, Boolean
let age: number = 25;
let name: string = "John";
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Tuple
let tuple: [string, number] = ["hello", 42];

// Enum
enum Role {
  SuperAdmin,
  Admin,
  Poc,
  GeneralUser,
}

// String-based enum
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

// ===============================
// 2. Special Types
// ===============================

// Union Types
let id: string | number;
id = 1; // valid
id = "one"; // valid

// Literal Types
let grades: "A" | "B" | "C" | "D" | "F";
grades = "A"; // valid

// Optional Types
type UserType = {
  name: string;
  age?: number; // optional property
};

// ===============================
// 3. Functions
// ===============================

// Function with type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Void function
function log(message: string): void {
  console.log(message);
}

// Never type
function throwError(message: string): never {
  throw new Error(message);
}

// ===============================
// 4. Objects & Interfaces
// ===============================

// Object type
type Person = {
  name: string;
  age: number;
  hobbies?: string[];
};

// Interface
interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  login?(): void;
  logout?(): void;
}

// Interface extension
interface Admin extends Employee {
  role: "admin" | "superadmin";
  permissions: string[];
}

// ===============================
// 5. Classes
// ===============================

// Basic class
class UserClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Class with access modifiers
class Employee2 {
  private _firstName: string = "";
  protected _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Name cannot be empty");
    }
    this._firstName = name;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  static companyName: string = "Company Name";
}

// ===============================
// 6. Advanced Types
// ===============================

// Type Guards
type FileSource = { type: "file"; path: string };
type DBSource = { type: "database"; connectionUrl: string };
type Source = FileSource | DBSource;

function loadData(source: Source) {
  if (source.type === "file") {
    return source.path;
  }
  return source.connectionUrl;
}

// Generics
function identity<T>(arg: T): T {
  return arg;
}

// Generic Classes
class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

// ===============================
// 7. Type Utilities
// ===============================

// Record Type
let dataStore: Record<string, string> = {
  key1: "value1",
  key2: "value2",
};

// Satisfies Operator
let vehicle = {
  brand: "Toyota",
  model: "Camry",
  year: "2023",
} satisfies Record<string, string>;

// ===============================
// 8. Type Assertions
// ===============================

let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;
// or
let strLength2: number = (<string>someValue).length;

// ===============================
// 9. Intersection Types
// ===============================

type Student = {
  name: string;
  studentId: number;
};

type Athlete = {
  sport: string;
  level: string;
};

type StudentAthlete = Student & Athlete;

// Example usage of all these concepts
function demonstrateAll() {
  // Create a user
  const user: Person = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "coding"],
  };

  // Use an enum
  const userRole: Role = Role.Admin;

  // Use generics
  const numbers = identity<number>(42);
  const text = identity<string>("Hello");

  // Use a class
  const employee = new Employee2();
  employee.firstName = "John";

  // Use type guards
  const source: Source = { type: "file", path: "/path/to/file" };
  const data = loadData(source);

  console.log({ user, userRole, numbers, text, data });
}
