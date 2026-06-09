#!/usr/bin/env node

import { mainGameCycle } from '../src/index.js'
import { runCalcGame } from '../src/games/calc.js'

mainGameCycle('What is the result of the expression?', runCalcGame)
