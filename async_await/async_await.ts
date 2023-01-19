// The word “async” before a function means one simple thing: a function always returns a promise.
// Other values are wrapped in a resolved promise automatically.

function firstFunction() {
    return new Promise((resolve: Function) => {
        setTimeout(() => {
            console.log("Executed timeout")
            resolve(5)
        }, 5000)
    });
}

async function secondFunction() {
    console.log("Started");

    try { // await should always be enclosed by try-catch block
        return await firstFunction(); // pause execution and returns only after receiving the value from the promise
    } catch (error) {
        alert(error);
    }
}

secondFunction().then((value) => {
    console.log("Finished - value: " + value);
});

// The parameters passed to 'resolve' and 'reject' are the 'then()' and 'catch()' methods

const myPromise = () => {
    return new Promise((resolve, reject) => {
        let x: number = 5

        if (x > 5) {
            reject('The number must be lower than 6')
        } else {
            resolve("The number is lower than 6")
        }
    });
}

// standard way to consume promise
myPromise().then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})

// async/await approach 1
async function getPromiseData() {
    try {
        const promiseData = await myPromise();
        return "Success from getPromiseData function: " + promiseData + "\n"
    } catch (err) {
        return "Error from getPromiseData function: " + err + "\n"
    }
}

const promiseDataReturn = getPromiseData();
console.log(promiseDataReturn);

// async/await approach 2
async function getPromiseData2() {
    return await myPromise();
}

getPromiseData2().then(value => {
    console.log("Success from getPromiseData function: " + value)
}).catch(err => {
    console.log("Error from getPromiseData function: " + err)
})
