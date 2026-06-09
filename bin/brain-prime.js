#!/usr/bin/env node

import { mainGameCycle } from '../src/index.js'
import { runPrimeGame } from '../src/games/prime.js'

mainGameCycle(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  runPrimeGame,
)
