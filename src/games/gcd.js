import { getRandomNum } from '../cli.js'

const runGcdGame = () => {
  let FirstRandomNum = getRandomNum()
  let SecondRandomNum = getRandomNum()

  const question = `${FirstRandomNum} ${SecondRandomNum}`
  let gcd

  while (SecondRandomNum !== 0) {
    if (SecondRandomNum !== 0) {
      const tempSecondNum = SecondRandomNum
      SecondRandomNum = FirstRandomNum % tempSecondNum
      FirstRandomNum = tempSecondNum
    }
  }

  gcd = FirstRandomNum

  return { question, correctAnswer: gcd }
}

export { runGcdGame }
