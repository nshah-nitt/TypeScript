"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Naman",
    age: 25,
    hobbies: ["Reading", "Coding"],
    roles: {
        desscription: "Admin",
        permissions: ["read", "write", "execute"],
    },
};
let username = {}; // empty braces on the left is a type which means the value on the right can be anything but not null or undefined
let data; // Record is a built-in utility type in TS which allows you to define an object type but not sure about the actual key value pair
data = {
    name: "Naman",
    subjectCodes: ["CS101", "CS102"],
    age: 25,
};
