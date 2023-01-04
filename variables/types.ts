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