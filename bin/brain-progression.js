#!/usr/bin/env node

import { mainGameCycle } from '../src/index.js'
import { runProgressionGame } from '../src/games/progresstion.js'

mainGameCycle('What number is missing in the progression?', runProgressionGame)
