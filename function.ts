function Add(a: number, b: number): number {
    return a + b;
} // we can specify the return type of the function

function Log(message: string): void {
    console.log(message);
} // void means the function does not return anything

function ErrorLog(message: string): never {
    console.error(message);
    throw new Error(message);
} // never means the function will never return, it will always throw an error