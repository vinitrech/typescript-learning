function addTwo(num: number) {
    return num + 2
}

console.log(addTwo(2))

// console.log(addTwo("2")) not allowed

function getUpper(val: string): string {
    return val.toUpperCase();
}

console.log(getUpper("a"));

function signUp(name: string, email: string, isPaid: boolean) {
    return `${name} - ${email} > ${isPaid}`
}

console.log(signUp("name", "email", false));

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log("logged");
}

loginUser("name", "email", false);

function getValue(myVal: number): boolean | string | number { // Union type
    if (myVal > 5) {
        return true;
    } else if (myVal === 5) {
        return 5;
    }

    return "200 OK"
}

console.log(getValue(6))
console.log(getValue(5))
console.log(getValue(4))

const getHello = (s: string) => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map(hero => {
    return `hero is ${hero}`;
});

function consoleError(err: string): void {
    console.log(err);
}

function handleError(err: string): never { // never means that the function throws an exception or ends the execution of the program
    throw new Error(err);
}

(function (): void {
    console.log("executou")
})();

((): void => {
    console.log("executou 2")
})();