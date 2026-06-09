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
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  const fraction = array[0] / (0xffffffff + 1)
  return Math.floor(fraction * (max - min + 1)) + min
}

export { questionName, getRandomNum }
