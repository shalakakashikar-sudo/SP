
import { CrosswordPuzzle } from '../types';

export const crosswords: CrosswordPuzzle[] = [
  {
    id: 'cw-es-001',
    difficulty: 'Easy',
    size: 5,
    // H O L A .
    // . . U . .
    // M A N O .
    // . . A . .
    // . . . . .
    // Across 1: HOLA (Hello)
    // Across 3: MANO (Hand)
    // Down 2: LUNA (Moon)
    
    gridSolution: [
      ['H', 'O', 'L', 'A', null],
      [null, null, 'U', null, null],
      ['M', 'A', 'N', 'O', null],
      [null, null, 'A', null, null],
      [null, null, null, null, null] 
    ],
    clues: {
      across: [
        { num: 1, row: 0, col: 0, clue: 'Hello', length: 4 },
        { num: 3, row: 2, col: 0, clue: 'Hand', length: 4 }
      ],
      down: [
        { num: 2, row: 0, col: 2, clue: 'Moon', length: 4 }
      ]
    }
  },
  {
    id: 'cw-es-002',
    difficulty: 'Easy',
    size: 6,
    gridSolution: [
      ['C', 'A', 'S', 'A', null, null],
      [null, 'M', null, 'Z', null, null],
      [null, 'O', null, 'U', null, null],
      [null, 'R', null, 'L', null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ],
    clues: {
      across: [
        { num: 1, row: 0, col: 0, clue: 'House', length: 4 }
      ],
      down: [
        { num: 2, row: 0, col: 1, clue: 'Love', length: 4 },
        { num: 3, row: 0, col: 3, clue: 'Blue', length: 4 }
      ]
    }
  },
  {
    id: 'cw-es-medium-1',
    difficulty: 'Medium',
    size: 7,
    gridSolution: [
      ['F', 'A', 'M', 'I', 'L', 'I', 'A'],
      ['I', null, 'A', null, 'I', null, 'M'],
      ['E', null, 'R', null, 'B', null, 'I'],
      ['S', null, 'T', null, 'R', null, 'G'],
      ['T', 'I', 'E', 'M', 'P', 'O', 'O'], 
      ['A', null, 'S', null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    clues: {
      across: [
        { num: 1, row: 0, col: 0, clue: 'Parents and children', length: 7 },
        { num: 6, row: 4, col: 0, clue: 'Clock measures this', length: 6 } 
      ],
      down: [
        { num: 1, row: 0, col: 0, clue: 'Party', length: 6 },
        { num: 2, row: 0, col: 2, clue: 'Tuesday', length: 6 },
        { num: 3, row: 0, col: 4, clue: 'You read it', length: 5 },
        { num: 4, row: 0, col: 6, clue: 'Friend', length: 5 }
      ]
    }
  }
];