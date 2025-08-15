// when dealing with long complex type , we can use type alias to define a type and use it later

type Roles = 'SuperAdmin' | 'Admin' | 'Poc' | 'GeneralUser';

type User = {
    name: string;
    age: number;
    hobbies?: string[];
    roles?:Roles
}

let user1: User = {
    name: "Naman",
    age: 25,
    hobbies: ["Reading", "Coding"],
    roles: 'Poc'
}