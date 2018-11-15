const Human = require('./playground/OOP/Human')
const Programmer = require('./playground/OOP/Programmer')

const instanceMart = new Human('Mart',169,65)

// ! example access attribute in object
console.log({
    Name: instanceMart.name,
    Height: instanceMart.height,
    Weight: instanceMart.weight
})
// ! Use method from class
instanceMart.introduceYourSelf()
// ! Use static method
Human.walk()


const instanceMartUpgrade = new Programmer('Mart Developer',169,65)
console.log({
    Name: instanceMartUpgrade.name,
    Height: instanceMartUpgrade.height,
    Weight: instanceMartUpgrade.weight,
    Skills: instanceMartUpgrade.skills
})
// ! Use method from class
instanceMartUpgrade.introduceYourSelf()
instanceMartUpgrade.coding()