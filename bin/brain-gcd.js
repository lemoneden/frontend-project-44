#!/usr/bin/env node

import { mainGameCycle } from '../src/index.js'
import { runGcdGame } from '../src/games/gcd.js'

mainGameCycle('Find the greatest common divisor of given numbers.', runGcdGame)
