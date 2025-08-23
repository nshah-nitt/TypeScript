const fileSource = {
    type: 'file',
    path: "some/path/to/file.csv",
};
const dbSource = {
    type: 'database',
    connectionUrl: "some-connection-url",
};
function loadData(source) {
    // Open + read file OR reach out to database server
    if ("path" in source) {
        return source.path;
    }
    return source.connectionUrl;
}
// discriminated Union type 
function loadData1(source) {
    // Open + read file OR reach out to database server
    if (source.type === 'file') {
        return source.path;
    }
    return source.connectionUrl;
}
class Teacher {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.name = name;
        this.subject = subject;
    }
    assignGrades() {
        return `${this.name} has given ${(Math.random() * 11).toFixed(2)} grades out of 10 in ${this.subject}`;
    }
}
class Student {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getGrades() {
        return `${this.name} has ${(Math.random() * 11).toFixed(2)} grade out of 10`;
    }
}
const eric = new Student("Eric");
const jennifer = new Teacher("jennifer", "Maths");
// instace of operator (instance of is only used non primitive types such as objects , for primitive types such as strings or boolean we need to use typeof)
function teacherGrades(element) {
    // Open + read file OR reach out to database server
    if (element instanceof Teacher) {
        console.log(element.assignGrades());
    }
    else if (element instanceof Student) {
        console.log(element.getGrades());
    }
}
teacherGrades(eric);
teacherGrades(jennifer);
export {};
