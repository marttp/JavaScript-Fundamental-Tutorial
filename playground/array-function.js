const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = null

// ! Map function : Iterator all element in array
// ? I want double value in simpleArray. Can you help me?
newArray = simpleArray.map((value, index) => {
    return value * 2
})
console.log(`Result from map : `, newArray)

// ! Filter function : Filter some element when result is true
// ? I want odd number in simpleArray.
newArray = simpleArray.filter((value, index) => {
    return value % 2 !== 0
})
console.log(`Result from filter : `, newArray)


// ! Reduce function : In most case used to find sum of all element
// ! argument 2 is a initial value
// ? I want to calculate sum of simpleArray.
const answer = simpleArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0)
console.log(`Result from reduce : `, answer)


// ! Chain function : use some function in the same row and make it chaining function
// ? I want to find sum of element from even number only and then multiply its with 10.
const chainAnswer = simpleArray.filter((value, index) => value % 2 === 0).map((value, index) => value * 2).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(`Result from chain function : `, chainAnswer)