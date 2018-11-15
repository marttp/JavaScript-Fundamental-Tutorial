const Human = require('./Human')

class Programmer extends Human {

    constructor(name, height, weight) {
        super(name, height, weight)
        this.skills = ['JS']
    }

    coding(){
        console.log(`${this.name} can code in javascript`)
    }

}

module.exports = Programmer