let myPromise = new Promise((
    resolve,reject) => {
        setTimeout(() => {
            resolve("Promise Resolved")
        }, 6000);
    })

console.log("Before Calling Promise")

myPromise.then((successMessage)=> {
    console.log("From Callback "+successMessage)
})

console.log("After calling Promise")