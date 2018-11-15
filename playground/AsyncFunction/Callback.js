const data = require('./data.json')

// ! Normal function
// exports.fetchData = () => {
//     return data
// }

// ! Implement asynchronous function
// exports.fetchData = () => {
//     setTimeout(() => {
//         return data
//     }, 2 * 1000)
// }
// * After this. test-async get undefined because async funtion don't wait result from function

// ! Implement callback in parameter : Higher Order Fuction = use function as a parameter
// exports.fetchData = (callback) => {
//     setTimeout(() => {
//         callback(data)
//     }, 2 * 1000)
// }

// ? What's about if I use chain of async function
// * It's call "Callback Hell"


exports.fetchData = (callback) => {
    setTimeout(() => {
        callback(data)
    }, 2 * 1000)
}

exports.fetchDataStepOne = (param, callback) => {
    setTimeout(() => {
        callback(param)
    }, 2 * 1000)
}

exports.fetchDataStepTwo = (param, callback) => {
    setTimeout(() => {
        callback(param)
    }, 2 * 1000)
}

// ! Last Step
exports.fetchDataStepThree = (param, callback) => {
    setTimeout(() => {
        callback(param)
    }, 2 * 1000)
}

