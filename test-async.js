const actionCallback = require('./playground/AsyncFunction/Callback.js')

// ! Try to get data from asynchronous function
// console.log(actionCallback.fetchData())
// * Got undefined

// ! Try to implement callback
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

// * testTiming: 8006.222ms
// ! What the heck is that!


// ! And then evolution to something's easier than callback. Promise
