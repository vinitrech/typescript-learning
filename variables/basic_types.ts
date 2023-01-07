let userId: number = 12345
let money: number = 12345.5
let name2: string = "name"
let logged: boolean = true

let someId = 123.45 // type inference
let someName = "someName"

let hoax; // ANY = BAD PRACTICE (it turns off type-checking)

function getHoax() {
    return "thor";
}

hoax = getHoax(); // hoax is being defined as "any", which should be avoided

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean // not open to change
    creditCard?: number // optional property
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

let myUser2: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false,
    creditCard: 5415563525878452
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {cvv: number} // combining types

let myCard: cardDetails = {
    cardNumber: "1234123412341234",
    cardDate: "January 1, 2029",
    cvv: 125
}

console.log(myCard)

const heroes:string[] = []
const heroesPowers:number[] = []
const heroCounter: Array<number> = []

heroes.push("spider man")
heroes.push("superman")
heroesPowers.push(50)
heroesPowers.push(100)
heroCounter.push(350)

let myMap: Map<string, number> = new Map()

myMap.set("name 1", 1)
myMap.set("name 2", 2)

console.log(myMap)

export {}