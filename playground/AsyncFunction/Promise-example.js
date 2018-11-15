const data = require('./data.json')

// ! Convert function from Callback ==> Promise
const fetchDataPerson = () => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(data.persons)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataPerson promise '})
        }
    })
}

const fetchDataPersonStepOne = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataPersonStepOne promise '})
        }
    })
}

const fetchDataPersonStepTwo = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataPersonStepTwo promise '})
        }
    })
}

// ! Last Step
const fetchDataPersonStepThree = (param) => {
    return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
                resolve(param)
            }, 2 * 1000)
        } else {
            reject({ error: 'Something Error from fetchDataPersonStepThree promise '})
        }
    })
}


module.exports = {
    fetchDataPerson,
    fetchDataPersonStepOne,
    fetchDataPersonStepTwo,
    fetchDataPersonStepThree
}