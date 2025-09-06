type Operations = {
    add:(a:number,b:number) => number,
    subtract:(a:number,b:number) => number,
    multiply:(a:number,b:number) => number,
    divide:(a:number,b:number) => number
}

type MapToNum<T> = {
    [P in keyof T]:number
}


let results: Operations = {
    add(a:number,b:number){
        return a+b
    },
    subtract(a:number,b:number){
        return a-b
    },
    multiply(a:number,b:number){
        return a*b
    },
    divide(a:number,b:number){
        if(b === 0) throw new Error("Cannot divide by zero");
        return a/b
    }
}

type ResultType = MapToNum<Operations>

// for filtering specifc keys we can use Pick keyword
type NumProps<T,K extends keyof T> = {
    [P in keyof Pick<T,K>]:number
}
type ResultType2 = NumProps<Operations,'add' | 'subtract'>

// also we can remove keyOf pick 
type OmitProps<T,K extends keyof T> = {
    [P in Exclude<keyof T,K>]:number
}