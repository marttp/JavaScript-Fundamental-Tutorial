class Human {

    // ! Constructor : Special method for allocation memory and give it to instance
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }

    static walk(){
        console.log(`Human walk`)
    }

    introduceYourSelf(){
        console.log(`Hello. My name's ${this.name}.`)
        console.log(`Height: ${this.height} Weight: ${this.weight}` )
    }
}

module.exports = Human