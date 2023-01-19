// Closures are functions that can access code from outside its scope

let a: number = 2;

function closure(b: number){ // this is a closure function, it has access to data outside the scope, but the outer scope has no access to the function's body
    return a + b;
}


for(let i=0; i < 3; i++){ // if 'i' was declared with 'var', the console.log would output 3, 3, 3
    // because by the time the setTimout would execute, the loop would've already finished,
    // so the variable is already 3. And, with 'let', the variable is only block scoped, instead of globally.

    const log = () => { // this is a closure function, cause it depends on variables from outside its scope
        console.log(i);
    }

    setTimeout(log, 100);
}
