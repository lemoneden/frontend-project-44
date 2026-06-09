import { getRandomNum } from '../cli.js'

const runPrimeGame = () => {
  const randomNum = getRandomNum()

  const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) {
      return true
    }
    if (num % 2 === 0) return false
    for (let i = 3; i < Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
    }
    return true
  }

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

  return { question: randomNum, correctAnswer }
}

export { runPrimeGame }
