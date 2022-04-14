// Event loop => with the help of event loop, we can offload some time consuming task and keep our users happy
console.log("first")
setTimeout(() => {
    // offload this callback function
    console.log("second")
}, 0)
console.log("third")