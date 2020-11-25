const toFizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
  if (num % 3 === 0) return 'Fizz'
  if (num & 5 === 0) return 'Buzz'
  return num
}

const isFizz = num => {
  return num % 3 === 0
}

const isBuzz = num => {
  return num % 5 === 0
}

module.exports = toFizzBuzz
