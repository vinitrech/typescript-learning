const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number { // not ideal way, can cause confusion
    return val
}

function identityTwo(val: any): any { // not ideal way, any sucks
    return val
}

function identityThree<T>(val: T): T { // correct way, the input passed sets the type to be dealt with, if a string is passed, the return type must be also string
    return val
}

function getSearchProducts<T>(products: T[]): T{
    return products[3]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[3]
}

export {}