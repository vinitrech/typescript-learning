/*
* ORDER OF EXECUTION
*
* EVENT LOOP IS THE WATCHER THAT CHECKS THE THINGS TO BE EXECUTED IN THE EXACTLY ORDER BELOW
* CALL STACK -> MICROTASKS -> TASKS
* */

// EXAMPLE

// CALLSTACK
console.log("This goes right to the call stack, because it's a synchronous code")

// MICROTASK -> will be called back before the start of the next event loop
Promise.resolve().then(() => {
    console.log("This is a micro task, because it's asynchronous and executes before the browser can take action")
})

// TASK -> will be called back in the next event loop
setTimeout(() => {
    console.log("This is a task, will be executed after callstack and microtasks")
}, 0);
