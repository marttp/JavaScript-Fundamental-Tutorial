const actionCallback = require('./playground/AsyncFunction/Callback.js')
const actionPromise = require('./playground/AsyncFunction/Promise-example.js')
const actionAsyncAwait = require('./playground/AsyncFunction/Async-Await-example.js')
// ! Try to get data from asynchronous function
// console.log(actionCallback.fetchData())
// * Got undefined

// ! Try to implement callback
/*
console.time('testTiming')
actionCallback.fetchData((persons) => {
    actionCallback.fetchDataStepOne(persons, (personFromFirst) => {
        actionCallback.fetchDataStepTwo(personFromFirst, (personFromSecond) => {
            actionCallback.fetchDataStepThree(personFromSecond, (personFromThird) => {
                console.log(personFromThird)
                console.timeEnd('testTiming')
            })
        })
    })
})
*/
// ! What the heck is that!


// ! And then evolution to something's easier than callback. Promise
/*
console.time('testTiming')
actionPromise.fetchDataPerson().then(persons => {
    actionPromise.fetchDataPersonStepOne(persons).then(personFromFirst => {
        actionPromise.fetchDataPersonStepTwo(personFromFirst).then(personFromSecond => {
            actionPromise.fetchDataPersonStepThree(personFromSecond).then(personFromThird => {
                console.log(personFromThird)
                console.timeEnd('testTiming')
            })
        })
    })
})
*/

// ? What's different between callback and promise
// * Re-structure it
/*
console.time('testTiming')
actionPromise.fetchDataPerson()
    .then(persons => {
        actionPromise.fetchDataPersonStepOne(persons)
        .then(personFromFirst => {
            actionPromise.fetchDataPersonStepTwo(personFromFirst)
            .then(personFromSecond => {
                actionPromise.fetchDataPersonStepThree(personFromSecond)
                .then(personFromThird => {
                    console.log(personFromThird)
                    console.timeEnd('testTiming')
                })
            })
        })
    }).catch(error => {
        console.log(error)
})
*/

// * Can you make it more readable? Yes. I can.
/*
console.time('testTiming')
actionPromise.fetchDataPerson()
    .then(persons => {
        return actionPromise.fetchDataPersonStepOne(persons)
    })
    .then(personFromFirst => {
        return actionPromise.fetchDataPersonStepTwo(personFromFirst)
    })
    .then(personFromSecond => {
        return actionPromise.fetchDataPersonStepThree(personFromSecond)
    })
    .then(personFromThird => {
        console.log(personFromThird)
        console.timeEnd('testTiming')
    })
    .catch(error => {
        console.log(error)
})
*/

// * Shorter!!!!
/*
console.time('testTiming')
actionPromise.fetchDataPerson()
    .then(persons => actionPromise.fetchDataPersonStepOne(persons))
    .then(personFromFirst => actionPromise.fetchDataPersonStepTwo(personFromFirst))
    .then(personFromSecond => actionPromise.fetchDataPersonStepThree(personFromSecond))
    .then(personFromThird => {
        console.log(personFromThird)
        console.timeEnd('testTiming')
    })
    .catch(error => {
        console.log(error)
})
*/
// ! Your life seem easier



/*
! When ES7 coming and create Async/Await to manage async funtion
! OK. Then try it.

! The first if you wanna use Async/Await. You should know Async/Await = new version of promise
! Write your Promise and make it to Async/Await
! If you want to implement Async/Await
! Important keyword : async (before name of function or params arrow)
* See it Async-Await-example.js
*/

// actionAsyncAwait.fetchPerson()

// ! Try it on Parallel
actionAsyncAwait.fetchData()