"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grades; // we can use string literal types to define a set of specific string values that a variable can take. This is useful for defining a fixed set of options, such as grades, status codes, etc.
grades = 'A'; // valid
// grades = 'E'; // invalid, will cause an error
// also we can force the literal to take specific value for tuples or array 
let xpoints;
xpoints = [[1, -1], [-1, 1]]; // valid
// xpoints = [[2, -1], [-1, 1]]; // invalid, will cause an error
