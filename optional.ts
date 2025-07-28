// ? is a optional operator 
function getError(msg?:string):never{
    throw new Error(msg); // This function will never return
}

// we can use the same for object as well 
type Student = {
    name: string;
    age?: number; // age is optional
    address?: string; // address is optional
}