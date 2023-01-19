// The word “async” before a function means one simple thing: a function always returns a promise.
// Other values are wrapped in a resolved promise automatically.

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

    try { // await should always be enclosed by try-catch block
        return await firstFunction() // pause execution and returns only after receiving the value from the promise
    } catch (error) {
        alert(error)
    }
}

secondFunction().then((value) => {
    console.log("Finished - value: " + value);
}).catch(err => {
    alert(err)
})
