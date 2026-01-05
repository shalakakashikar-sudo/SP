
export interface GameSettings {
  topic: string;
  difficulty: Difficulty;
  numQuestions: number;
  timePerQuestion: number;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface WordOfTheDayData {
  word: string;
  definition: string;
  exampleSentence: string;
}

export interface QuoteOfTheDayData {
  quote: string;
  author: string;
  translation: string;
}

export interface Quote {
  quote: string;
  author: string;
  translation?: string;
}

export interface FlashcardData {
  term: string;
  definition:string;
  type: 'word' | 'idiom';
  status?: FlashcardStatus;
}

export interface DailyContentData {
  wordOfTheDay: WordOfTheDayData;
  quoteOfTheDay: QuoteOfTheDayData;
  flashcards: FlashcardData[];
}

export interface UserProgress {
  level: number;
  xp: number;
}

export type FlashcardStatus = 'known' | 'needs_review';

export interface FlashcardProgress {
  [term: string]: FlashcardStatus;
}

export type MascotState = 'default' | 'thinking' | 'correct' | 'incorrect' | 'happy' | 'wowed' | 'sad' | 'confused' | 'cheeky' | 'dancing' | 'nerdy' | 'cool' | 'star-struck' | 'sleeping' | 'wink' | 'shocked' | 'excited' | 'skeptical' | 'silly' | 'proud' | 'love' | 'laughing' | 'scared' | 'impatient' | 'flipping' | 'tickled' | 'side-eye' | 'blinking';

export enum GameState {
  MENU,
  LOADING,
  PLAYING,
  FINISHED,
  ERROR,
  MORE_GAMES,
  WORD_DETECTIVE_MENU,
  WORD_DETECTIVE_PLAYING,
  MEMORY_MATCH_MENU,
  MEMORY_MATCH_PLAYING,
  WORD_SCRAMBLE_MENU,
  WORD_SCRAMBLE_PLAYING
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Exam';

export const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard', 'Exam'];

export const topics = [
    'Vocabulary', 
    'Idioms', 
    'Numbers', 
    'Colors', 
    'Vegetables', 
    'Fruits', 
    'Body Parts', 
    'Animals', 
    'Family', 
    'Clothing',
    'School',
    'House',
    'Nature',
    'Synonyms/Antonyms'
];

export const questionCounts = [5, 10, 15, 20];
export const timeLimits = [5, 10, 15, 20];

export interface Word {
  term: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
  exampleTranslation?: string; // New field for example translation
  difficulty: Difficulty;
  etymology?: string; 
  category?: string;
  learningTip?: string;
}

export interface Idiom {
  term: string;
  definition: string;
  example: string;
  exampleTranslation?: string; // New field for example translation
  difficulty: Difficulty;
  learningTip?: string;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty;
}

export interface WordDetectiveSettings {
  topic: 'Words' | 'Idioms';
  difficulty: Difficulty;
  numQuestions: number;
}

export const wordDetectiveQuestionCounts = [5, 10, 15];

export interface WordDetectivePuzzle {
  term: string;
  definition: string;
  topic: 'Words' | 'Idioms';
}

export interface CrosswordSettings {
  difficulty: Difficulty;
  timerDuration: number;
}

export const crosswordTimeLimits = [0, 2, 5, 10];

export interface CrosswordClue {
  num: number;
  row: number;
  col: number;
  clue: string;
  length: number;
}

export interface CrosswordPuzzle {
  id: string;
  difficulty: Difficulty;
  size: number;
  gridSolution: (string | null)[][];
  clues: {
    across: CrosswordClue[];
    down: CrosswordClue[];
  };
}

export interface MemoryMatchSettings {
  difficulty: Difficulty;
  topic: 'Vocabulary' | 'Idioms';
}

export interface MemoryCard {
  id: string;
  pairId: string;
  content: string;
  type: 'term' | 'definition';
  isFlipped: boolean;
  isMatched: boolean;
}

export interface WordScrambleSettings {
  topic: 'Vocabulary' | 'Idioms';
  difficulty: Difficulty;
  numQuestions: number;
}

export interface WordScramblePuzzle {
  originalTerm: string;
  scrambledLetters: string[];
  definition: string;
  hint?: string;
}

export interface Coordinates {
  x: number;
  y: number;
}
