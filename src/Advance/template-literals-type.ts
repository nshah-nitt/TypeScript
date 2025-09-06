type ReadPermission = "read";
type WritePermission = "read" | "write";
type ExecutePermission = "execute";
type DeletePermission = "delete";

type ValidPermissions = `${ReadPermission }-${WritePermission}`;

// template literal can be used to create new string literal types by combining existing string literal types. In this example, we are creating a new type ValidPermissions by combining ReadPermission and WritePermission using template literals.

// one more example of template literals

type FilePermission = `${ReadPermission | WritePermission | ExecutePermission | DeletePermission}-file`;

// now lets create a mapped type which would map function names to their return types
type FileMapping = {
    [K in FilePermission]: ()=> string
}