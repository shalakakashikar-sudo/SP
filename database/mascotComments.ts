
// @/database/mascotComments.ts
import { MascotState } from '../types';

export interface MascotReaction {
    text: string;
    state: MascotState;
}

// Beginner-friendly, Spanglish/Translation approach
export const interactiveReactions: MascotReaction[] = [
    // --- GREETINGS / HAPPY ---
    { text: "¡Hola! (Hello!)", state: 'happy' },
    { text: "¡Miau! (Meow!)", state: 'happy' },
    { text: "¡Miau miau! (Meow meow!)", state: 'love' },
    { text: "¡Prrr! (Purr!)", state: 'love' },
    { text: "¡Amigo! (Friend!)", state: 'love' },
    { text: "¡Me gusta! (I like it!)", state: 'love' },
    { text: "Estoy feliz. (I am happy.)", state: 'happy' },
    
    // --- SILLY / PLAYFUL ---
    { text: "¡Miau! (Meow!)", state: 'silly' },
    { text: "Tengo hambre. (I am hungry.)", state: 'thinking' },
    { text: "Me gusta jugar. (I like to play.)", state: 'excited' },
    { text: "¿Dónde está la leche? (Where is the milk?)", state: 'confused' },
    { text: "¡Vamos! (Let's go!)", state: 'excited' },
    { text: "¡Fiesta! (Party!)", state: 'dancing' },

    // --- ENCOURAGEMENT ---
    { text: "¡Tú puedes! (You can do it!)", state: 'proud' },
    { text: "¡Muy bien! (Very good!)", state: 'proud' },
    { text: "¡Excelente! (Excellent!)", state: 'star-struck' },
    { text: "¡Fantástico! (Fantastic!)", state: 'star-struck' },
    { text: "¡Buen trabajo! (Good job!)", state: 'happy' },
    { text: "¡Miau! ¡Sigue así! (Meow! Keep it up!)", state: 'happy' },
    { text: "¡Eres genial! (You are great!)", state: 'star-struck' },

    // --- CONFUSED / QUESTIONING ---
    { text: "¿Qué? (What?)", state: 'confused' },
    { text: "No entiendo. (I don't understand.)", state: 'confused' },
    { text: "¿Por qué? (Why?)", state: 'thinking' },
    { text: "¿Miau? (Meow?)", state: 'thinking' },
    
    // --- EMOTIONS ---
    { text: "Tengo sueño. (I am sleepy.)", state: 'sleeping' },
    { text: "Estoy cansado. (I am tired.)", state: 'sleeping' },
    { text: "¡Ay, caramba!", state: 'shocked' },
    { text: "¡Qué sorpresa! (What a surprise!)", state: 'shocked' },
    { text: "Te quiero. (I love you.)", state: 'love' },
    { text: "¡Un abrazo! (A hug!)", state: 'love' }
];

export const mascotComments = {
  WELCOME: [
    "¡Hola! (Hello!)",
    "¡Miau! (Meow!)",
    "¡Bienvenidos! (Welcome!)",
    "¿Listo? (Ready?)",
    "¡Vamos a aprender! (Let's learn!)",
    "Español es divertido. (Spanish is fun.)",
    "¡Buenos días! (Good morning!)",
    "¡Buenas tardes! (Good afternoon!)"
  ],
  MASCOT_CLICK: [ 
    "¡Miau! (Meow!)", 
    "¡Miau miau! (Meow meow!)",
    "¡Prrr! (Purr!)",
    "¡Hola amigo! (Hello friend!)",
    "¡Me gusta! (I like it!)"
  ],
  CORRECT_ANSWER: [
    "¡Miau! (Meow!)",
    "¡Muy bien! (Very good!)",
    "¡Excelente! (Excellent!)",
    "¡Correcto! (Correct!)",
    "¡Perfecto! (Perfect!)",
    "¡Buen trabajo! (Good job!)",
    "¡Increíble! (Incredible!)",
    "¡Sí! (Yes!)",
    "¡Bravo!",
    "¡Eres inteligente! (You are smart!)",
    "¡Eso es! (That's it!)",
    "¡Así se hace! (That's the way!)"
  ],
  INCORRECT_ANSWER: [
    "Casi. (Almost.)",
    "Inténtalo de nuevo. (Try again.)",
    "No pasa nada. (It's okay.)",
    "Otra vez. (Again.)",
    "¡Ups! (Oops!)",
    "No te rindas. (Don't give up.)",
    "Está bien. (It's fine.)",
    "Practica más. (Practice more.)",
    "¡Ánimo! (Cheer up!)"
  ],
  THINKING: [
    "Un momento... (One moment...)",
    "Pensando... (Thinking...)",
    "¿Mmm...?",
    "Es difícil... (It is difficult...)",
    "¿Cuál es? (Which one is it?)",
    "Déjame pensar. (Let me think.)",
    "¿Qué piensas? (What do you think?)",
    "¡Concéntrate! (Concentrate!)"
  ],
  TIME_RUNNING_OUT: [
    "¡Rápido! (Quick!)",
    "¡El tiempo! (The time!)",
    "¡Vamos! (Let's go!)",
    "¡Corre! (Run!)",
    "¡Apúrate! (Hurry up!)",
    "¡Tic tac! (Tick tock!)"
  ],
  TIME_UP: [
    "¡Tiempo! (Time's up!)",
    "¡Se acabó! (It's over!)",
    "¡Lo siento! (I'm sorry!)",
    "¡Demasiado tarde! (Too late!)"
  ],
  HIGH_SCORE: [
    "¡Fantástico! (Fantastic!)",
    "¡Genial! (Great!)",
    "¡Eres el mejor! (You are the best!)",
    "¡Ganaste! (You won!)",
    "¡Felicidades! (Congratulations!)",
    "¡Campeón! (Champion!)"
  ],
  MEDIUM_SCORE: [
    "¡Bien hecho! (Well done!)",
    "¡Nada mal! (Not bad!)",
    "¡Buen intento! (Good attempt!)",
    "Sigue así. (Keep it up.)",
    "¡Vas bien! (You're doing well!)"
  ],
  LOW_SCORE: [
    "¡Tú puedes! (You can do it!)",
    "¡Ánimo! (Cheer up!)",
    "Practica un poco más. (Practice a little more.)",
    "No estés triste. (Don't be sad.)",
    "¡Sigue intentando! (Keep trying!)"
  ],
  WOWED_SCORE: [
    "¡Guau! (Wow!)",
    "¡Impresionante! (Impressive!)",
    "¡Increíble! (Incredible!)",
    "¡Perfecto! (Perfect!)",
    "¡Maestro! (Master!)"
  ],
  SAD_SCORE: [
    "¡Ay no! (Oh no!)",
    "Qué pena. (What a pity.)",
    "Lo siento. (I'm sorry.)",
    "Triste... (Sad...)"
  ],
  HINT_USED: [
    "Una pista. (A hint.)",
    "Ayuda. (Help.)",
    "Mira esto. (Look at this.)",
    "Es fácil. (It's easy.)"
  ],
  WORD_DETECTIVE: [
    "¿Qué palabra es? (What word is it?)",
    "Busca la palabra. (Find the word.)",
    "¡Detective!",
    "¿Sabes qué es? (Do you know what it is?)"
  ],
  FACTS: [
    "Hola significa Hello.",
    "Gato significa Cat.",
    "Perro significa Dog.",
    "Amigo significa Friend.",
    "Gracias significa Thank you.",
    "Por favor significa Please.",
    "Adiós significa Goodbye."
  ],
  QUOTE_BUILDER: [
    "Palabras... (Words...)",
    "Construye la frase. (Build the phrase.)",
    "Paso a paso. (Step by step.)"
  ]
};

export const getRandomComment = (category: keyof typeof mascotComments): string => {
  const comments = mascotComments[category];
  if (!comments || comments.length === 0) {
    return "";
  }
  return comments[Math.floor(Math.random() * comments.length)];
};
