// index-access-type.ts is used to extract a type from an object type using a specific key.
type Person = {
    name: string;
    age: number;
    orderHistory: {
        orderId: number;
        product: string;
        quantity: number;
    }[];
}

type Order = Person['orderHistory'][number] // extracts the type of an individual order from the orderHistory array

// also note that this only works with types and will throw an error if used with const or other keywords

interface Car {
    name:string
    model: string;
    year: number;
    mileage: number;
    vehicleType: 'sedan' | 'suv' | 'truck';
}

type CarName = Car['name']

class Vehicle {
    constructor(public name: CarName, public model: string,public hardware:{engine:string,year:string}) {}
}

type ModelHardware = Vehicle['hardware']
