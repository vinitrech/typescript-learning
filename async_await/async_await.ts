// async function indicates that there will be a value to be expected from a promise through await

function firstFunction() {
    return new Promise((resolve: Function) => {
        setTimeout(() => {
            console.log("Executed timeout")
            resolve(5)
        }, 5000)
    })
}

async function secondFunction() {
    console.log("Started")
    return await firstFunction() // pause execution and returns only after receiving the value from the promise
}

secondFunction().then((value) => {
    console.log("Finished - value: " + value);
})
