// const user: (string | number)[] = ["u", 1]
const users: [string, number, boolean][] = [["name", 12, true], ["name2", 13, false]]
const user: [string, number, boolean] = ["name", 12, true]
const rgb: [number, number, number] = [255, 255, 255]

rgb[1] = 154 // tuples can have the values changed
rgb.push(36) // tuples can have new values pushed to it

console.log(users, user, rgb)

