var Role;
(function (Role) {
    Role[Role["SuperAdmin"] = 1] = "SuperAdmin";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Poc"] = 3] = "Poc";
    Role[Role["GeneralUser"] = 4] = "GeneralUser";
})(Role || (Role = {})); // Enum are a special type in TypeScript that allows you to define a set of named constants. They are useful for defining a collection of related values, such as user roles, status codes, etc. Enums can be numeric or string-based.
// Numeric enums are the default type, where the first value is 0 and subsequent values increment by 1.
// String enums allow you to assign specific string values to each member of the enum, which can be useful for readability and clarity.
// Example of numeric enum
// enum Direction {
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
// }
var users = Role.Poc;
console.log(users);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
var traffic = Color.Red;
