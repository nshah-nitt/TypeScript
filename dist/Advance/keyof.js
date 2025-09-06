let validKey = 'name';
// The below example demonstrates the usefullness of keyof
function props(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null)
        throw new Error("value cannot be null or undefined");
    return val;
}
let a = {
    Name: "Kirit",
    location: "Varanasi"
};
let c = props(a, 'location');
console.log(c);
export {};
