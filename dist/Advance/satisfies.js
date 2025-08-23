let vehicles;
vehicles = {
    brand: "Bugaati cherron",
    models: "BGVEH008",
    year: "2008",
};
// No compile-time error here.
// The type of `vehicles` is `Record<string, string>`, which is an index signature.
// This tells TypeScript that `vehicles` can have any string key, and the value will be a string.
// TypeScript doesn't know the *specific* keys, so it allows access to any key like `price`.
// At runtime, `vehicles.price` will be `undefined`.
console.log(vehicles.price); // would not throw an error
let vehicles2 = {
    brand: "Bugaati cherron",
    models: "BGVEH008",
    year: "2008",
};
// A compile-time error occurs here: Property 'price' does not exist on type '{ brand: string; models: string; year: string; }'.
// The `satisfies` operator checks that the object is compatible with `Record<string, string>`
// but it *preserves* the original, more specific inferred type of the object for `vehicles2`.
// The type of `vehicles2` is `{ brand: string; models: string; year: string; }`.
// Since `price` is not a key in this specific type, TypeScript reports an error.
// console.log(vehicles2.price); // would give an error
// --- When to use `instanceof` ---
// The `instanceof` operator is a type guard used to check if an object is an
// instance of a specific class or constructor function. It's particularly useful
// for narrowing the type of a variable within a conditional block when dealing
// with union types of different classes.
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Bike {
    ride() {
        console.log("Riding a bike...");
    }
}
function move(vehicle) {
    if (vehicle instanceof Car) {
        // Inside this block, TypeScript knows `vehicle` is a `Car`.
        // So we can safely call the `drive` method.
        vehicle.drive();
    }
    else if (vehicle instanceof Bike) {
        // Inside this block, TypeScript knows `vehicle` is a `Bike`.
        // So we can safely call the `ride` method.
        vehicle.ride();
    }
}
const myCar = new Car();
const myBike = new Bike();
move(myCar); // Outputs: Driving a car...
move(myBike); // Outputs: Riding a bike...
export {};
