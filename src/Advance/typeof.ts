let UserName = "Naman"

type User = typeof UserName

const students = {
    'name':'Naman shah',
    'age':25,
    'sex':'Male',
    'grades':[2,4,7,8,9]
}


let getStudents = (student: typeof students): void => {
    console.log(students);   
}

getStudents(students)

