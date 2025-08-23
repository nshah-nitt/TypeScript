let name = ['Naman', 'Kiran'];
let car = {
    'model': 'Chevrolet',
    'year': '2015',
    'price': '$10,000'
};
console.log(car);
// we can also use generics on function as well 
function merge(a, b) {
    return [a, b];
}
console.log(merge(1, 2));
// use of extends keyword in generic type give ability to restrict the type to a certain type
function mergeobj(a, b) {
    return { ...a, ...b };
}
let student1 = mergeobj({ 'core1': 'MTH112', 'core2': 'BT501', 'core3': 'CHY103' }, { 'ancillary': 'PHY106' });
console.log(student1);
// we can also define generic type on the class 
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
let stu1 = new student("Naman");
console.log(stu1);
export {};
