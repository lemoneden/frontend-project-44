#!/usr/bin/env node

import { mainGameCycle } from '../src/index.js'
import { runEvenGame } from '../src/games/even.js'

mainGameCycle(
  'Answer "yes" if the number is even, otherwise answer "no".',
  runEvenGame,
)
