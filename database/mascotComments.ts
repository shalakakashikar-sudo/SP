
// @/database/mascotComments.ts
import { MascotState } from '../types';

export interface MascotReaction {
    text: string;
    state: MascotState;
}

// Personality-specific reactions
export const leoReactions: MascotReaction[] = [
    { text: "¡Hola! Soy Leo el Gato. (Hi! I'm Leo the Cat.)", state: 'happy' },
    { text: "¿Sabías que soy un experto en verbos? (Did you know I'm a verb expert?)", state: 'nerdy' },
    { text: "Mi cerebro es 90% gramática y 10% atún. (My brain is 90% grammar and 10% tuna.)", state: 'cool' },
    { text: "¡Miau! Me gusta tu estilo de estudio. (Meow! I like your study style.)", state: 'proud' },
    { text: "Estoy meditando sobre el subjuntivo. (I'm meditating on the subjunctive.)", state: 'thinking' },
    { text: "¡Qué elegancia la de Francia! (How elegant!)", state: 'cool' },
    { text: "Las ratas son malas, las palabras son buenas. (Rats are bad, words are good.)", state: 'silly' },
    { text: "Me dejas sin palabras. (You leave me speechless.)", state: 'shocked' }
];

export const miaReactions: MascotReaction[] = [
    { text: "¡Hola! Soy Mia. (Hi! I'm Mia.)", state: 'happy' },
    { text: "¡Me encanta correr por la pantalla! (I love running across the screen!)", state: 'excited' },
    { text: "¿Te gusta mi pelaje rosa? (Do you like my pink fur?)", state: 'cheeky' },
    { text: "¡Eres un genio total! (You're a total genius!)", state: 'star-struck' },
    { text: "¡Miau! Vamos a bailar un poco. (Meow! Let's dance a bit.)", state: 'dancing' },
    { text: "La vida es mejor en color rosa. (Life is better in pink.)", state: 'love' },
    { text: "¡Increíble! Eres muy rápido. (Incredible! You're very fast.)", state: 'wowed' },
    { text: "Me pica la oreja. (My ear itches.)", state: 'tickled' }
];

export const mascotComments = {
  WELCOME: [
    "¡Bienvenidos al recreo! (Welcome to the playground!)",
    "¿Listo para brillar? (Ready to shine?)",
    "¡Miau! Vamos a jugar. (Meow! Let's play.)",
    "El español es pan comido. (Spanish is a piece of cake.)",
    "¡Hoy es un gran día para aprender! (Today is a great day to learn!)",
    "¿Has desayunado verbos hoy? (Did you have verbs for breakfast?)"
  ],
  MASCOT_CLICK: [ 
    "¡Miau! Eso me hace cosquillas. (Meow! That tickles.)", 
    "¡Prrr! Sigue así. (Purr! Keep it up.)",
    "¿Necesitas una pista felina? (Do you need a feline hint?)",
    "A tus órdenes, humano. (At your service, human.)"
  ],
  CORRECT_ANSWER: [
    "¡Qué listo eres! (How smart you are!)",
    "¡Perfecto! Ni yo lo haría mejor. (Perfect! Not even I would do it better.)",
    "¡Excelente! (Excellent!)",
    "¡Eres un crack! (You're an expert!)",
    "¡Buen trabajo, humano! (Good job, human!)",
    "¡Miau! ¡Impresionante! (Meow! Impressive!)",
    "¡Bravo! Dame esos cinco. (Bravo! Give me five.)"
  ],
  INCORRECT_ANSWER: [
    "Casi, pero no. (Almost, but no.)",
    "Incluso los gatos fallamos a veces. (Even we cats fail sometimes.)",
    "No pasa nada, sigue intentando. (It's okay, keep trying.)",
    "¡Ups! Revisa tus notas. (Oops! Check your notes.)",
    "¡Ánimo! La próxima es la buena. (Cheer up! The next one is the one.)",
    "¿Estás durmiendo? (Are you sleeping?)",
    "¡Concéntrate, amigo! (Concentrate, friend!)"
  ],
  THINKING: [
    "Mmm... déjame consultar mi almohada. (Mmm... let me consult my pillow.)",
    "Pensando... procesando... (Thinking... processing...)",
    "Mi cerebro de gato está trabajando. (My cat brain is working.)",
    "Espera, estoy meditando. (Wait, I am meditating.)",
    "¿Es la A, la B o un ratón? (Is it A, B, or a mouse?)",
    "¡No me interrumpas! (Don't interrupt me!)"
  ],
  TIME_RUNNING_OUT: [
    "¡Corre como un galgo! (Run like a greyhound!)",
    "¡El tiempo vuela! (Time flies!)",
    "¡Rápido, rápido! (Quick, quick!)",
    "¡Tic tac! No te duermas. (Tick tock! Don't fall asleep.)"
  ],
  TIME_UP: [
    "¡Se acabó el tiempo! (Time is up!)",
    "¡Demasiado tarde, pajarito! (Too late, little bird!)",
    "¡Miau! El reloj ganó esta vez. (Meow! The clock won this time.)"
  ],
  HIGH_SCORE: [
    "¡Eres el rey de la selva! (You are the king of the jungle!)",
    "¡Felicidades, maestro! (Congratulations, master!)",
    "¡Increíble puntuación! (Incredible score!)",
    "¡Eres una máquina! (You're a machine!)"
  ],
  // Fix: Added missing category WOWED_SCORE referenced in ResultsScreen
  WOWED_SCORE: [
    "¡Increíble! Eres un maestro. (Incredible! You're a master.)",
    "¡Puntuación perfecta! (Perfect score!)",
    "¡Me dejas sin palabras! (You leave me speechless!)"
  ],
  // Fix: Added missing category MEDIUM_SCORE referenced in ResultsScreen
  MEDIUM_SCORE: [
    "¡Nada mal! Sigue practicando. (Not bad! Keep practicing.)",
    "Buen esfuerzo, vas por buen camino. (Good effort, you're on the right track.)",
    "¡Bien hecho! (Well done!)"
  ],
  // Fix: Added missing category SAD_SCORE referenced in ResultsScreen
  SAD_SCORE: [
    "No te rindas, la próxima será mejor. (Don't give up, next time will be better.)",
    "Sigue estudiando, ¡tú puedes! (Keep studying, you can do it!)",
    "A veces se gana, a veces se aprende. (Sometimes you win, sometimes you learn.)"
  ],
  // Fix: Added missing category HINT_USED referenced in WordDetectiveBoard
  HINT_USED: [
    "Aquí tienes una pequeña ayuda. (Here's a little help.)",
    "¡Una pista para mi detective favorito! (A hint for my favorite detective!)",
    "A ver si esto te ayuda... (Let's see if this helps...)"
  ],
  WORD_DETECTIVE: [
    "¡A investigar, detective! (Let's investigate, detective!)",
    "Busca las letras ocultas. (Find the hidden letters.)",
    "Usa tu lupa mental. (Use your mental magnifying glass.)"
  ],
  FACTS: [
    "¿Sabías que 'gato' es 'cat'?",
    "Leo significa 'león' en latín.",
    "El español es el segundo idioma más hablado.",
    "Me encanta el atún. (I love tuna.)"
  ]
};

export const getRandomComment = (category: keyof typeof mascotComments): string => {
  const comments = mascotComments[category];
  if (!comments || comments.length === 0) return "";
  return comments[Math.floor(Math.random() * comments.length)];
};
