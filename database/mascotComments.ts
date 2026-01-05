
// @/database/mascotComments.ts
import { MascotState } from '../types';

export interface MascotReaction {
    text: string;
    state: MascotState;
}

// Beginner-friendly, Spanglish/Translation approach
export const interactiveReactions: MascotReaction[] = [
    // --- INTRODUCTIONS & GREETINGS ---
    { text: "¡Hola! Soy Leo el Gato. (Hi! I'm Leo the Cat.)", state: 'happy' },
    { text: "Me llamo Leo. ¿Cómo te llamas? (My name is Leo. What is your name?)", state: 'happy' },
    { text: "¡Mucho gusto! Soy tu guía felino. (Nice to meet you! I'm your feline guide.)", state: 'proud' },
    { text: "¡Miau! ¿Listo para estudiar? (Meow! Ready to study?)", state: 'excited' },
    
    // --- PERSONALITY & FUN ---
    { text: "Soy Leo, el gato más inteligente. (I am Leo, the smartest cat.)", state: 'cool' },
    { text: "Mi deporte favorito es dormir. (My favorite sport is sleeping.)", state: 'sleeping' },
    { text: "¿Tienes leche? Tengo sed. (Do you have milk? I am thirsty.)", state: 'confused' },
    { text: "¡Qué elegancia la de Francia! (How elegant!)", state: 'cool' },
    { text: "Estoy practicando mi español. (I am practicing my Spanish.)", state: 'nerdy' },
    { text: "Las ratas son malas, las palabras son buenas. (Rats are bad, words are good.)", state: 'silly' },

    // --- ENCOURAGEMENT ---
    { text: "¡Tú puedes, amigo! (You can do it, friend!)", state: 'proud' },
    { text: "¡Eres un genio! (You are a genius!)", state: 'star-struck' },
    { text: "¡Increíble! (Incredible!)", state: 'wowed' },
    { text: "Me dejas sin palabras. (You leave me speechless.)", state: 'shocked' },

    // --- SILLY ---
    { text: "¡Mira, una mariposa! (Look, a butterfly!)", state: 'excited' },
    { text: "Me pica la oreja. (My ear itches.)", state: 'tickled' },
    { text: "¡Fiesta de gatos! (Cat party!)", state: 'dancing' },
    { text: "¡Ay, caramba!", state: 'shocked' }
];

export const mascotComments = {
  WELCOME: [
    "¡Hola! Soy Leo el Gato. (Hi! I'm Leo the Cat.)",
    "¡Bienvenidos al recreo! (Welcome to the playground!)",
    "¿Listo para brillar? (Ready to shine?)",
    "¡Miau! Vamos a jugar. (Meow! Let's play.)",
    "Me llamo Leo. ¡Empecemos! (My name is Leo. Let's start!)",
    "El español es pan comido. (Spanish is a piece of cake.)",
    "¡Hoy es un gran día! (Today is a great day!)",
    "¿Has desayunado? (Have you had breakfast?)"
  ],
  MASCOT_CLICK: [ 
    "¡Miau! Eso me hace cosquillas. (Meow! That tickles.)", 
    "¡Prrr! Sigue así. (Purr! Keep it up.)",
    "¡Hola! ¿Necesitas ayuda? (Hi! Do you need help?)",
    "Soy Leo el Gato, a tus órdenes. (I am Leo the Cat, at your service.)",
    "Me gusta cuando me saludas. (I like it when you greet me.)"
  ],
  CORRECT_ANSWER: [
    "¡Qué listo eres! (How smart you are!)",
    "¡Perfecto! Ni yo lo haría mejor. (Perfect! Not even I would do it better.)",
    "¡Excelente! (Excellent!)",
    "¡Eres un crack! (You're an expert!)",
    "¡Eso es! (That's it!)",
    "¡Buen trabajo, humano! (Good job, human!)",
    "¡Miau! ¡Impresionante! (Meow! Impressive!)",
    "¡Directo al grano! (Right to the point!)",
    "¡Bravo! Dame esos cinco. (Bravo! Give me five.)",
    "¡Eres una estrella! (You are a star!)"
  ],
  INCORRECT_ANSWER: [
    "Casi, pero no. (Almost, but no.)",
    "Incluso los gatos fallan. (Even cats fail.)",
    "No pasa nada, sigue intentando. (It's okay, keep trying.)",
    "¡Ups! Revisa tus notas. (Oops! Check your notes.)",
    "¡Ánimo! La próxima es la buena. (Cheer up! The next one is the one.)",
    "¿Estás durmiendo? (Are you sleeping?)",
    "¡Miau! Un pequeño error. (Meow! A small mistake.)",
    "¡Concéntrate, amigo! (Concentrate, friend!)",
    "Nadie es perfecto. (Nobody is perfect.)"
  ],
  THINKING: [
    "Mmm... déjame consultar mi almohada. (Mmm... let me consult my pillow.)",
    "Pensando... procesando... (Thinking... processing...)",
    "¿Cuál será? (Which one could it be?)",
    "Mi cerebro de gato está trabajando. (My cat brain is working.)",
    "Espera, estoy meditando. (Wait, I am meditating.)",
    "¿Es la A, la B o un ratón? (Is it A, B, or a mouse?)",
    "¡No me interrumpas! (Don't interrupt me!)",
    "Interesante pregunta... (Interesting question...)"
  ],
  TIME_RUNNING_OUT: [
    "¡Corre como un galgo! (Run like a greyhound!)",
    "¡El tiempo vuela! (Time flies!)",
    "¡Rápido, rápido! (Quick, quick!)",
    "¡Tic tac! No te duermas. (Tick tock! Don't fall asleep.)",
    "¡Apúrate, gato lento! (Hurry up, slow cat!)",
    "¡Vamos, tú puedes! (Come on, you can do it!)"
  ],
  TIME_UP: [
    "¡Se acabó el tiempo! (Time is up!)",
    "¡Demasiado tarde, pajarito! (Too late, little bird!)",
    "¡Tiempo! A descansar. (Time! To rest.)",
    "¡Miau! El reloj ganó. (Meow! The clock won.)",
    "Lo siento, perdiste el turno. (Sorry, you lost the turn.)"
  ],
  HIGH_SCORE: [
    "¡Eres el rey de la selva! (You are the king of the jungle!)",
    "¡Felicidades, maestro! (Congratulations, master!)",
    "¡Increíble puntuación! (Incredible score!)",
    "¡Eres una máquina! (You're a machine!)",
    "Leo está orgulloso de ti. (Leo is proud of you.)"
  ],
  MEDIUM_SCORE: [
    "¡Nada mal! (Not bad!)",
    "Vas por buen camino. (You are on the right path.)",
    "¡Bien hecho! (Well done!)",
    "Puedes mejorar un poco más. (You can improve a little more.)",
    "No está mal para un humano. (Not bad for a human.)"
  ],
  LOW_SCORE: [
    "¡No te rindas! (Don't give up!)",
    "Mañana será otro día. (Tomorrow is another day.)",
    "Hay que estudiar más. (One must study more.)",
    "Leo te ayudará. (Leo will help you.)",
    "¡Ánimo! A por la revancha. (Cheer up! Go for the rematch.)"
  ],
  WOWED_SCORE: [
    "¡Guau! (Wow!)",
    "¡Eres una leyenda! (You are a legend!)",
    "¡Miau-gnífico!",
    "¡Simplemente perfecto! (Simply perfect!)",
    "¿Eres un profesor secreto? (Are you a secret teacher?)"
  ],
  SAD_SCORE: [
    "¡Qué pena! (What a pity!)",
    "Me pones triste. (You make me sad.)",
    "Vamos a llorar juntos. (Let's cry together.)",
    "Necesitas más práctica. (You need more practice.)"
  ],
  HINT_USED: [
    "Una pequeña ayuda. (A little help.)",
    "¡Tramposo! Pero te ayudo. (Cheater! But I help you.)",
    "Mira bien la pista. (Look closely at the hint.)",
    "Aquí tienes un regalo. (Here is a gift for you.)"
  ],
  WORD_DETECTIVE: [
    "¡A investigar, detective! (Let's investigate, detective!)",
    "Busca las letras ocultas. (Find the hidden letters.)",
    "¿Dónde está la palabra? (Where is the word?)",
    "Usa tu lupa mental. (Use your mental magnifying glass.)"
  ],
  FACTS: [
    "¿Sabías que 'gato' es 'cat'?",
    "Leo significa 'león' en latín.",
    "El español es el segundo idioma más hablado.",
    "La 'Ñ' es la letra más famosa de España.",
    "Me encanta el atún. (I love tuna.)"
  ],
  QUOTE_BUILDER: [
    "Construye la sabiduría. (Build the wisdom.)",
    "Cada palabra cuenta. (Every word counts.)",
    "Paso a paso se llega lejos. (Step by step you get far.)"
  ]
};

export const getRandomComment = (category: keyof typeof mascotComments): string => {
  const comments = mascotComments[category];
  if (!comments || comments.length === 0) {
    return "";
  }
  return comments[Math.floor(Math.random() * comments.length)];
};
