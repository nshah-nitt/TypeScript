let results = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0)
            throw new Error("Cannot divide by zero");
        return a / b;
    }
};
let msg = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
};
export {};
// msg.add = (a:number,b:number) => a*b // Error: Cannot assign to 'add' because it is a read-only property
