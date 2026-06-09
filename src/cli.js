import readlineSync from 'readline-sync'

const questionName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  return name
}

const minValue = 1
const maxValue = 100
const getRandomNum = (min = minValue, max = maxValue) => {
  return Math.floor(Math.random() * max) + min
}

export { questionName, getRandomNum }
