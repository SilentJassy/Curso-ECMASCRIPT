const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve'))


Promise.allSettled([promise1, promise2])
    .then(response => console.log(response))