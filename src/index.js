import readlineSync from 'readline-sync'
import { questionName } from '../src/cli.js'
// import { runEvenGame } from '../src/games/even.js'

const mainGameCycle = (description, game) => {
  const name = questionName()
  const roundsCount = 3
  let countCorrectAnswer = 0

  console.log(description)

  while (countCorrectAnswer < roundsCount) {
    const { question, correctAnswer } = game()
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `)

    if (answer === correctAnswer) {
      console.log('Correct!')
      countCorrectAnswer += 1
    }
    else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export { mainGameCycle }
