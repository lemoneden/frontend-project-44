import { getRandomNum } from '../cli.js'

const runProgressionGame = () => {
  let start = getRandomNum(0, 10)
  const step = getRandomNum(1, 10)
  const progressionLength = 10

  const progression = []

  for (let i = 0; i < progressionLength; i++) {
    const currentElement = start + i * step
    progression.push(currentElement)
  }

  const randomIndex = getRandomNum(0, progressionLength - 1)
  const correctAnswer = String(progression[randomIndex])
  progression[randomIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

export { runProgressionGame }
