// ! Declare variable
var variableGlobal = 0
let variableChange = 0
const variableNotChange = 100

const simpleArray = []
const simpleObject = {
    simpleKey: 'simpleValue',
    simpleKey2: 'simpleValue2',
    simpleKey3: 'simpleValue3',
}

// ! Decision
const score = 50
if (score > 50) {
    console.log(score + ' more than 50')
} else {
    console.log(score + ' lower than equals 50')
}

const testTertiary = score > 50 ? true : false
console.log(testTertiary)

const grade = 'A'
switch (grade) {
    case 'A':
        console.log('Your score in range : 100 - 80')
        break;
    case 'B':
        console.log('Your score in range : 79 - 70')
        break;
    case 'C':
        console.log('Your score in range : 69 - 60')
        break;
    case 'D':
        console.log('Your score in range : 59 - 50')
        break;
    case 'F':
        console.log('Your score in range : 0 - 49')
        break;
    default:
        console.log('Something wrong')
        break;
}


// ! Iteration
// ? for
for (let index = 0; index < 10; index++) {
    simpleArray[index] = index
}
console.log(simpleArray)
// ? while
let simpleArrayLengthTest = simpleArray.length
while (simpleArrayLengthTest < 20) {
    simpleArray[simpleArrayLengthTest] = simpleArrayLengthTest++
}
console.log(simpleArray)
// ? do-while
do {
    simpleArray[simpleArrayLengthTest] = simpleArrayLengthTest++
} while (simpleArrayLengthTest < 30)
console.log(simpleArray)

// ? foreach : all element in array
simpleArray.forEach((value) => console.log(`Test foreach : ${value}`))

// ? forin : all key in object
for (const key in simpleObject) {
    if (simpleObject.hasOwnProperty(key)) {
        const element = simpleObject[key]
        console.log(`${key}: ${element}`)
    }
}