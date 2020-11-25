const toFizzBuzz = require('./modules/fizzbuzz')

const app = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(toFizzBuzz(i))
    }
  }
}

module.exports = app
