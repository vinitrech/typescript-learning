export {}

/*
* typeof checks if the variable is of some primitive type
* instanceof checks if an object is an instance of a certain class
* */

function detectType(val: number | string | number[] | null) { // arrays are of type 'object'
    if (!val) {
        console.log("Value is null")
        return
    }

    if (typeof val === 'object') {
        return val
    }

    if (typeof val === 'string') {
        return val.toLowerCase()
    }

    return val * 1.05
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID")
        return
    }

    id.toLowerCase()
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin): boolean {
    if ("isAdmin" in account) { // check if the object has the 'isAdmin' property
        return account.isAdmin;
    }

    return false
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "Fish food"
    } else {
        return "Bird food"
    }
}

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

//discriminated union type check
function getTrueShape(shape: Shape): string {
    if (shape.kind === "circle") {
        return "Circle"
    } else if (shape.kind === "rectangle") {
        return "Rectangle"
    }

    return "Square"
}

//exhaustive type checking with 'never'
function getArea(shape: Shape): string {
    switch (shape.kind) {
        case "circle":
            return "Area of the circle"
        // case "square":
        //     return "Area of the square"
        // case "rectangle":
        //     return "Area of the square"
        default:
            const _defaultShape: never = shape // will yell because there is no treatment for all the types
            return _defaultShape
    }
}
