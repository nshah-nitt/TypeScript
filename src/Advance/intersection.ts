// Intersection types in TypeScript allow you to combine multiple types into one. An object of an intersection type will have all the properties and methods of the combined types.

type student = {
    name: string;
    age?: number;
    roll_id?: number;
    standard?: string;
}

type subjects = {
    subjects?: Array < [string, string] >
    references?: Array < [string, string] >
}

type studentWithSubjects = student & subjects ; // intersection type, combines both types

let student:studentWithSubjects = {
    name:'Naman'

}

// same can be done with interfces as well
interface car {
    name : string;
    model: string;
    year: number;
    mileage: number;
    vehicleType: 'sedan' | 'suv' | 'truck';
}

interface carFeatures {
    features: Array<string>;
    safetyRating: number;
}

interface carWithFeatures extends car, carFeatures {} // intersection type using interfaces