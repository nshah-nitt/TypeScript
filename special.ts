let disability: string | null;

disability = null; // This is valid
disability = "Blindness"; // This is also valid

let custom_shoe: number | undefined;
custom_shoe = undefined; // This is valid
custom_shoe = 42; // This is also valid

// type narrowing
let element = document.getElementById("geName") as HTMLInputElement | null;

if(!element){
    throw new Error("Element not found");
}
 // with the if statement,element type has been narrowed to HTMLElement
console.log(element?.value);

// unknown type 
function getValue(value:unknown){
    if(!!value && typeof value === 'object' && 'log' in value && typeof value.log === 'function'){
        value.log("This is a value"); // enssure to perform certain checks before using the value
    }
}
