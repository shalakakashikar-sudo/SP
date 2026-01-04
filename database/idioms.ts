
// @/database/idioms.ts
import { Idiom } from '../types';

export const idioms: Idiom[] = [
    // --- EASY ---
    { term: 'Tomar el pelo', definition: 'To pull someone\'s leg / To tease or fool someone.', example: '¿En serio ganaste la lotería o me estás tomando el pelo?', difficulty: 'Easy' },
    { term: 'Ser pan comido', definition: 'To be a piece of cake / Very easy.', example: 'El examen de matemáticas fue pan comido.', difficulty: 'Easy' },
    { term: 'Estar en las nubes', definition: 'To be daydreaming / Head in the clouds.', example: 'Pedro siempre está en las nubes durante la clase.', difficulty: 'Easy' },
    { term: 'Tirar la casa por la ventana', definition: 'To spare no expense / To go all out (spending money).', example: 'Para su boda, tiraron la casa por la ventana.', difficulty: 'Easy' },
    { term: 'Meter la pata', definition: 'To put one\'s foot in it / To make a mistake or say something inappropriate.', example: 'Metí la pata cuando pregunté por su ex-novio.', difficulty: 'Easy' },
    { term: 'No tener pelos en la lengua', definition: 'To not mince words / To speak one\'s mind freely.', example: 'María no tiene pelos en la lengua; siempre dice lo que piensa.', difficulty: 'Easy' },
    { term: 'Costar un ojo de la cara', definition: 'To cost an arm and a leg / To be very expensive.', example: 'Ese coche cuesta un ojo de la cara.', difficulty: 'Easy' },
    { term: 'Estar como una cabra', definition: 'To be crazy / To be a bit nuts.', example: '¡Estás como una cabra si piensas saltar desde ahí!', difficulty: 'Easy' },
    { term: 'Dormir como un tronco', definition: 'To sleep like a log / To sleep very soundly.', example: 'Después del viaje, dormí como un tronco.', difficulty: 'Easy' },
    { term: 'Ser uña y carne', definition: 'To be inseparable / To be like two peas in a pod.', example: 'Juan y su hermano son uña y carne.', difficulty: 'Easy' },

    // --- MEDIUM ---
    { term: 'Hacerse el sueco', definition: 'To play dumb / To pretend not to understand.', example: 'Cuando le pregunté por el dinero, se hizo el sueco.', difficulty: 'Medium' },
    { term: 'Estar hasta las narices', definition: 'To be fed up / To have had enough.', example: 'Estoy hasta las narices de tus excusas.', difficulty: 'Medium' },
    { term: 'Ponerse las pilas', definition: 'To get one\'s act together / To work harder.', example: 'Tienes que ponerte las pilas si quieres aprobar.', difficulty: 'Medium' },
    { term: 'Dar en el clavo', definition: 'To hit the nail on the head / To be exactly right.', example: 'Diste en el clavo con tu análisis.', difficulty: 'Medium' },
    { term: 'Importar un pimiento', definition: 'To not give a damn / To not care at all.', example: 'Me importa un pimiento lo que digan los demás.', difficulty: 'Medium' },
    { term: 'Tener mala leche', definition: 'To have a bad temper / To be in a bad mood.', example: 'Cuidado con el jefe, hoy tiene mala leche.', difficulty: 'Medium' },
    { term: 'Estar hecho polvo', definition: 'To be exhausted / To be worn out.', example: 'Después del maratón, estaba hecho polvo.', difficulty: 'Medium' },
    { term: 'Hablar por los codos', definition: 'To talk a lot / To be a chatterbox.', example: 'Mi vecina habla por los codos, nunca se calla.', difficulty: 'Medium' },
    { term: 'Pedir peras al olmo', definition: 'To ask for the impossible (To ask an elm tree for pears).', example: 'Esperar que él cambie es pedir peras al olmo.', difficulty: 'Medium' },
    { term: 'Empezar la casa por el tejado', definition: 'To put the cart before the horse / To start things in the wrong order.', example: 'No compres muebles antes de tener la casa; no empieces la casa por el tejado.', difficulty: 'Medium' },

    // --- HARD ---
    { term: 'Estar entre la espada y la pared', definition: 'To be between a rock and a hard place.', example: 'No sé qué decidir, estoy entre la espada y la pared.', difficulty: 'Hard' },
    { term: 'A quien madruga, Dios le ayuda', definition: 'The early bird catches the worm.', example: 'Levántate temprano; a quien madruga, Dios le ayuda.', difficulty: 'Hard' },
    { term: 'Más vale tarde que nunca', definition: 'Better late than never.', example: 'Llegaste por fin. Bueno, más vale tarde que nunca.', difficulty: 'Hard' },
    { term: 'No hay mal que por bien no venga', definition: 'Every cloud has a silver lining.', example: 'Perdí mi trabajo pero encontré uno mejor. No hay mal que por bien no venga.', difficulty: 'Hard' },
    { term: 'Camarón que se duerme, se lo lleva la corriente', definition: 'You snooze, you lose.', example: '¡Despierta! Camarón que se duerme, se lo lleva la corriente.', difficulty: 'Hard' },
    { term: 'En boca cerrada no entran moscas', definition: 'Silence is golden / Sometimes it\'s better not to speak.', example: 'No digas nada sobre el secreto. En boca cerrada no entran moscas.', difficulty: 'Hard' },
    { term: 'Matar dos pájaros de un tiro', definition: 'To kill two birds with one stone.', example: 'Voy al banco y al súper, así mato dos pájaros de un tiro.', difficulty: 'Hard' },
    { term: 'Montar un pollo', definition: 'To cause a scene / To make a fuss.', example: 'El cliente montó un pollo porque la sopa estaba fría.', difficulty: 'Hard' },
    { term: 'Irse por los cerros de Úbeda', definition: 'To go off on a tangent / To change the subject illogically.', example: 'Contesta la pregunta y deja de irte por los cerros de Úbeda.', difficulty: 'Hard' },
    { term: 'Dar gato por liebre', definition: 'To rip someone off / To deceive (Give a cat instead of a hare).', example: 'Me vendieron un reloj falso; me dieron gato por liebre.', difficulty: 'Hard' },

    // --- EXAM ---
    { term: 'Echar agua al mar', definition: 'To do something pointless / To carry coals to Newcastle.', example: 'Tratar de convencerlo es como echar agua al mar.', difficulty: 'Exam' },
    { term: 'Salirse con la suya', definition: 'To get one\'s way.', example: 'Es muy manipulador, siempre se sale con la suya.', difficulty: 'Exam' },
    { term: 'Hacer de tripas corazón', definition: 'To pluck up courage / To bite the bullet.', example: 'Tuve que hacer de tripas corazón y decirle la verdad.', difficulty: 'Exam' },
    { term: 'Tener la sartén por el mango', definition: 'To call the shots / To be in control.', example: 'En esta negociación, nosotros tenemos la sartén por el mango.', difficulty: 'Exam' },
    { term: 'Buscar tres pies al gato', definition: 'To look for trouble / To complicate things unnecessarily.', example: 'Es un problema sencillo, no le busques tres pies al gato.', difficulty: 'Exam' },
    { term: 'Ser el perejil de todas las salsas', definition: 'To be involved in everything / To love being the center of attention.', example: 'A ella le encanta opinar, es el perejil de todas las salsas.', difficulty: 'Exam' },
    { term: 'Ahogarse en un vaso de agua', definition: 'To make a mountain out of a molehill.', example: 'Tranquilo, es solo un pequeño error. No te ahogues en un vaso de agua.', difficulty: 'Exam' },
    { term: 'Cría cuervos y te sacarán los ojos', definition: 'Bite the hand that feeds you / Raise ravens and they will peck out your eyes.', example: 'Le di todo y me traicionó. Cría cuervos y te sacarán los ojos.', difficulty: 'Exam' },
    { term: 'A lo hecho, pecho', definition: 'What\'s done is done / Face the consequences.', example: 'Ya enviaste el correo. A lo hecho, pecho.', difficulty: 'Exam' },
    { term: 'Despedirse a la francesa', definition: 'To take French leave / To leave without saying goodbye.', example: 'Se aburrió de la fiesta y se despidió a la francesa.', difficulty: 'Exam' }
];
