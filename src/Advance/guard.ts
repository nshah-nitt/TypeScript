// type guards
type FileSource = { type: 'file', path: string };
const fileSource: FileSource = {
    type:'file',
    path: "some/path/to/file.csv",
};

type DBSource = { type: 'database',connectionUrl: string };
const dbSource: DBSource = {
    type:'database',
    connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  if ("path" in source) {
    return source.path;
  }
  return source.connectionUrl;
}

// discriminated Union type 
function loadData1(source: Source) {
  // Open + read file OR reach out to database server
  if(source.type === 'file'){
    return source.path
  }
  return source.connectionUrl
}

class Teacher{
    constructor(public name:string,public subject:string){
        this.name = name;
        this.subject = subject
    }
    assignGrades():string{
        return `${this.name} has given ${(Math.random()*11).toFixed(2)} grades out of 10 in ${this.subject}`;
    }
}

class Student{
    constructor(public name:string){
        this.name = name
    }
    getGrades():string{
        return `${this.name} has ${(Math.random()*11).toFixed(2)} grade out of 10`;
    }
}
const eric = new Student("Eric")
const jennifer = new Teacher("jennifer","Maths")

type Entity = Teacher | Student
// instace of operator (instance of is only used non primitive types such as objects , for primitive types such as strings or boolean we need to use typeof)
function teacherGrades(element: Entity) {
  // Open + read file OR reach out to database server
  if(element instanceof Teacher){
    console.log(element.assignGrades())
  }
  else if(element instanceof Student){
    console.log(element.getGrades());
  }
}

teacherGrades(eric)
teacherGrades(jennifer)