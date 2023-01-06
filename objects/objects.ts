const User = {
    name: "name",
    email: "email@abc.com.br",
    isActive: true
}


function createUser({name: string, isPaid: boolean}):void {
}
let newUser = {name: "testing name", isPaid: false, email: "email@email.com"}
createUser(newUser) // odd behavior, need to adhere to type

type User = {
    name: string
    email: string
    isActive: boolean
}

function createUserCorrectWay(user: User):void {
}
let newUser2 = {name: "testing name", email: "email@email.com", isActive: false}
createUserCorrectWay(newUser2) // correct behavior

function createCourse({name: string, price: number}): {name: String, price: number} {
    return {name: "react", price: 399}
}
