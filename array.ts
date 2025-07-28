let hobbies: (number | string)[];

hobbies = [1, "Reading", 2, "Coding"];

hobbies = [1, 2, 3, 4];

let hobbies2 = Array<number | string>;

let hobbies3: [number,number]; // tuple type, fixed length and types

hobbies3 = [1, 2]; // valid
// hobbies3 = [1, "Reading"]; // invalid, will cause an error

let points: Array<[number,number]>; // array of tuples, each tuple has two numbers  

points = [[1,2],[3,4]];

let numbers: Array<number> = []
numbers.push(2)
