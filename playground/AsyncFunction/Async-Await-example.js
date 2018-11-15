const data = require('./data.json')
const actionPromise = require('./Promise-example.js')

// ! Rewrite Promise to Async/Await
// const fetchPerson = async () => {
//     try {
//         console.time('testTiming')
//         const persons = await actionPromise.fetchDataPerson()
//         const personFromFirst = await actionPromise.fetchDataPersonStepOne(persons)
//         const personFromSecond = await actionPromise.fetchDataPersonStepTwo(personFromFirst)
//         const personFromThird = await actionPromise.fetchDataPersonStepThree(personFromSecond)
//         console.log(personFromThird)
//         console.timeEnd('testTiming')
//     } catch (error) {
//         console.log(error)
//     }
// }



const fetchDataBook = () => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(data.books)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataBook promise '})
        }
    })
}

const fetchDataBookStepOne = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataBookStepOne promise '})
        }
    })
}

const fetchDataBookStepTwo = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataBookStepTwo promise '})
        }
    })
}

// ! Last Step
const fetchDataBookStepThree = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataBookStepThree promise '})
        }
    })
}


// ! Implement another function to make parallel async function
const fetchPerson = async () => {
    try {
        const persons = await actionPromise.fetchDataPerson()
        const personFromFirst = await actionPromise.fetchDataPersonStepOne(persons)
        const personFromSecond = await actionPromise.fetchDataPersonStepTwo(personFromFirst)
        const personFromThird = await actionPromise.fetchDataPersonStepThree(personFromSecond)
        return personFromThird
    } catch (error) {
        console.log(error)
        return
    }
}

const fetchBooks = async () => {
    try {
        const persons = await fetchDataBook()
        const personFromFirst = await fetchDataBookStepOne(persons)
        const personFromSecond = await fetchDataBookStepTwo(personFromFirst)
        const personFromThird = await fetchDataBookStepThree(personFromSecond)
        return personFromThird
    } catch (error) {
        console.log(error)
    }
}

// ! 1
// const fetchData = async () => {
//     try {
//         console.time('testTiming')
//         const persons = await fetchPerson()
//         const books = await fetchBooks()
//         console.timeEnd('testTiming')
//         console.log({
//             persons,
//             books
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
// * Test Timing : 16009.729ms (16 second)
// ? Try it faster? No problem

// ! 2
const fetchData = async () => {
    try {
        console.time('testTiming')
        // ! Make it async call parallel
        const preparePersons = fetchPerson()
        const prepareBooks = fetchBooks()

        const persons = await preparePersons
        const books = await prepareBooks

        console.timeEnd('testTiming')
        console.log({
            persons,
            books
        })
    } catch (error) {
        console.log(error)
    }
}
// * Test Timing : 8002.823ms (8 second)

// ! After all you should study on
// ! Promise.all()

module.exports =  {
    fetchPerson,
    fetchBooks,
    fetchData
}