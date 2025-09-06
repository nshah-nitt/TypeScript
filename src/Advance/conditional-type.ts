// conditional type

type CheckType<T> = T extends Array<any> ? T[number]: T

type A = CheckType<(number | {}) []> // A is string
type B = CheckType<object>