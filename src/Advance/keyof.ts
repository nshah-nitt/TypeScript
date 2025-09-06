type User = {name:'Naman shah',age:25}
type UserKeys = keyof User // it should be followed by another type

let validKey:UserKeys = 'name'

// The below example demonstrates the usefullness of keyof

function props<T extends object,U extends keyof T>(obj:T,key:U):T[U]{
    const val = obj[key];
    if(val === undefined || val === null) throw new Error("value cannot be null or undefined");
    
    return val;
}

let a = {
    Name:"Kirit",
    location:"Varanasi"
}

let c = props(a,'location')

console.log(c);

