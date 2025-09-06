
let name = ['Naman','Kiran']

type Datastore<T> = {
    [prop:string]:T
}

let car = {
    'model':'Chevrolet',
    'year':'2015',
    'price':'$10,000'
} satisfies Datastore<string>;

console.log(car);

// we can also use generics on function as well 
function merge<T>(a:T,b:T){
    return [a,b];
}

console.log(merge(1,2));

// use of extends keyword in generic type give ability to restrict the type to a certain type

function mergeobj<T extends object,U extends object>(a:T,b:U){
    return {...a,...b};
}

let student1 = mergeobj({'core1':'MTH112','core2':'BT501','core3':'CHY103'},{'ancillary':'PHY106'})

console.log(student1);

// we can also define generic type on the class 
class student<T>{
    constructor(public name: T){}
}

let stu1 = new student("Naman")

console.log(stu1);
