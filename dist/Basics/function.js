function Add(a, b) {
    return a + b;
} // we can specify the return type of the function
function Log(message) {
    console.log(message);
} // void means the function does not return anything
function ErrorLog(message) {
    console.error(message);
    throw new Error(message);
} // never means the function will never return, it will always throw an error
export {};
