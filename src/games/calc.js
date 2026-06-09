import { getRandomNum } from '../cli.js'

const runCalcGame = () => {
  const FirstRandomNum = getRandomNum()
  const SecondRandomNum = getRandomNum()
  const operators = ['+', '-', '*']
  //   console.log('operator:', getRandomNum(0, operators.length - 1))
  const operator = operators[getRandomNum(0, operators.length - 1)]

  const calculate = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      default:
        throw new Error(`Unknown operator: ${operator}`)
    }
  }

  const mathExample = `${FirstRandomNum} ${operator} ${SecondRandomNum}`
  const correctAnswer = String(
    calculate(FirstRandomNum, SecondRandomNum, operator),
  )

  return { question: mathExample, correctAnswer }
}

export { runCalcGame }
