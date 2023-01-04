function addTwo(num: number) {
    return num + 2
}

console.log(addTwo(2))

// console.log(addTwo("2")) not allowed

function getUpper(val: string) {
    return val.toUpperCase();
}

console.log(getUpper("a"));

function signUp(name: string, email: string, isPaid: boolean){
    return `${name} - ${email} > ${isPaid}`
}

console.log(signUp("name", "email", false));

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log("logged");
}

loginUser("name", "email", false);

export {}