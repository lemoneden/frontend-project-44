import { getRandomNum } from '../cli.js'

const runEvenGame = () => {
  //  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const randomNum = getRandomNum()
  const isEven = num => num % 2 === 0
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no'

  return { question: randomNum, correctAnswer }
}

export { runEvenGame }
