import { getRandomNum } from '../cli.js'

const runPrimeGame = () => {
  const randomNum = getRandomNum()

  const isPrime = () => {
    if (randomNum < 2) return false
    if (randomNum === 2) {
      return true
    }
    if (randomNum % 2 === 0) return false
    for (let i = 3; i < Math.sqrt(randomNum); i += 2) {
      if (randomNum % i === 0) return false
    }
    return true
  }

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

  return { question: randomNum, correctAnswer }
}

export { runPrimeGame }
