
// @/database/words.ts
import { Word } from '../types';

export const words: Word[] = [
    // --- GREETINGS & BASICS ---
    { term: 'Gracias', definition: 'Thank you.', synonyms: [], antonyms: ['De nada'], example: 'Muchas gracias por la comida.', exampleTranslation: 'Thank you very much for the food.', difficulty: 'Easy', category: 'Vocabulary', learningTip: 'Use "Muchas gracias" for "Many thanks".' },
    { term: 'Hola', definition: 'Hello / Hi.', synonyms: ['Saludos'], antonyms: ['Adiós'], example: 'Hola, ¿cómo estás?', exampleTranslation: 'Hello, how are you?', difficulty: 'Easy', category: 'Vocabulary', learningTip: 'The "H" is silent.' },
    { term: 'Por favor', definition: 'Please.', synonyms: [], antonyms: [], example: 'Un café, por favor.', exampleTranslation: 'A coffee, please.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Lo siento', definition: 'I am sorry.', synonyms: ['Perdón'], antonyms: [], example: 'Lo siento, no entiendo.', exampleTranslation: 'I am sorry, I do not understand.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Buenos días', definition: 'Good morning.', synonyms: [], antonyms: ['Buenas noches'], example: '¡Buenos días a todos!', exampleTranslation: 'Good morning everyone!', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Adiós', definition: 'Goodbye.', synonyms: ['Chao'], antonyms: ['Hola'], example: 'Adiós, nos vemos mañana.', exampleTranslation: 'Goodbye, see you tomorrow.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Buenas noches', definition: 'Good night.', synonyms: [], antonyms: ['Buenos días'], example: 'Buenas noches, que descanses.', exampleTranslation: 'Good night, rest well.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'De nada', definition: 'You are welcome.', synonyms: [], antonyms: [], example: '—Gracias. —De nada.', exampleTranslation: '—Thank you. —You are welcome.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Mucho gusto', definition: 'Nice to meet you.', synonyms: ['Encantado'], antonyms: [], example: 'Soy Juan, mucho gusto.', exampleTranslation: 'I am Juan, nice to meet you.', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Perdón', definition: 'Excuse me.', synonyms: ['Disculpe'], antonyms: [], example: 'Perdón, ¿dónde está el baño?', exampleTranslation: 'Excuse me, where is the bathroom?', difficulty: 'Easy', category: 'Vocabulary' },

    // --- NUMBERS ---
    { term: 'Uno', definition: 'One (1).', synonyms: [], antonyms: [], example: 'Tengo un gato.', exampleTranslation: 'I have one cat.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Dos', definition: 'Two (2).', synonyms: [], antonyms: [], example: 'Dos cafés, por favor.', exampleTranslation: 'Two coffees, please.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Tres', definition: 'Three (3).', synonyms: [], antonyms: [], example: 'Tres hermanos.', exampleTranslation: 'Three siblings.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Cuatro', definition: 'Four (4).', synonyms: [], antonyms: [], example: 'Cuatro patas.', exampleTranslation: 'Four legs.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Cinco', definition: 'Five (5).', synonyms: [], antonyms: [], example: 'Cinco dedos.', exampleTranslation: 'Five fingers.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Diez', definition: 'Ten (10).', synonyms: [], antonyms: [], example: 'Tengo diez dedos.', exampleTranslation: 'I have ten fingers.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Veinte', definition: 'Twenty (20).', synonyms: [], antonyms: [], example: 'Tengo veinte años.', exampleTranslation: 'I am twenty years old.', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Cincuenta', definition: 'Fifty (50).', synonyms: [], antonyms: [], example: 'Cincuenta euros.', exampleTranslation: 'Fifty euros.', difficulty: 'Medium', category: 'Numbers' },
    { term: 'Cien', definition: 'One hundred (100).', synonyms: [], antonyms: [], example: 'Cien euros.', exampleTranslation: 'One hundred euros.', difficulty: 'Medium', category: 'Numbers' },
    { term: 'Mil', definition: 'One thousand (1000).', synonyms: [], antonyms: [], example: 'Mil gracias.', exampleTranslation: 'A thousand thanks.', difficulty: 'Medium', category: 'Numbers' },

    // --- COLORS ---
    { term: 'Rojo', definition: 'Red.', synonyms: [], antonyms: [], example: 'La manzana es roja.', exampleTranslation: 'The apple is red.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Azul', definition: 'Blue.', synonyms: [], antonyms: [], example: 'El mar es azul.', exampleTranslation: 'The sea is blue.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Verde', definition: 'Green.', synonyms: [], antonyms: [], example: 'La ensalada es verde.', exampleTranslation: 'The salad is green.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Amarillo', definition: 'Yellow.', synonyms: [], antonyms: [], example: 'El sol es amarillo.', exampleTranslation: 'The sun is yellow.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Blanco', definition: 'White.', synonyms: [], antonyms: ['Negro'], example: 'La nieve es blanca.', exampleTranslation: 'The snow is white.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Negro', definition: 'Black.', synonyms: [], antonyms: ['Blanco'], example: 'El gato negro.', exampleTranslation: 'The black cat.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Rosa', definition: 'Pink.', synonyms: [], antonyms: [], example: 'Una flor rosa.', exampleTranslation: 'A pink flower.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Naranja', definition: 'Orange.', synonyms: [], antonyms: [], example: 'La fruta naranja.', exampleTranslation: 'The orange fruit.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Marrón', definition: 'Brown.', synonyms: [], antonyms: [], example: 'Zapatos marrones.', exampleTranslation: 'Brown shoes.', difficulty: 'Easy', category: 'Colors' },
    { term: 'Gris', definition: 'Grey.', synonyms: [], antonyms: [], example: 'El cielo gris.', exampleTranslation: 'The grey sky.', difficulty: 'Easy', category: 'Colors' },

    // --- VEGETABLES ---
    { term: 'Zanahoria', definition: 'Carrot.', synonyms: [], antonyms: [], example: 'La zanahoria es naranja.', exampleTranslation: 'The carrot is orange.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Tomate', definition: 'Tomato.', synonyms: [], antonyms: [], example: 'Un tomate rojo.', exampleTranslation: 'A red tomato.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Cebolla', definition: 'Onion.', synonyms: [], antonyms: [], example: 'La cebolla pica.', exampleTranslation: 'The onion is spicy/stings.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Lechuga', definition: 'Lettuce.', synonyms: [], antonyms: [], example: 'Ensalada de lechuga.', exampleTranslation: 'Lettuce salad.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Patata', definition: 'Potato.', synonyms: ['Papa'], antonyms: [], example: 'Patatas fritas.', exampleTranslation: 'French fries.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Ajo', definition: 'Garlic.', synonyms: [], antonyms: [], example: 'El ajo huele fuerte.', exampleTranslation: 'Garlic smells strong.', difficulty: 'Medium', category: 'Vegetables' },
    { term: 'Pepino', definition: 'Cucumber.', synonyms: [], antonyms: [], example: 'Un pepino fresco.', exampleTranslation: 'A fresh cucumber.', difficulty: 'Medium', category: 'Vegetables' },

    // --- FRUITS ---
    { term: 'Manzana', definition: 'Apple.', synonyms: [], antonyms: [], example: 'Me gusta la manzana.', exampleTranslation: 'I like the apple.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Plátano', definition: 'Banana.', synonyms: ['Banana'], antonyms: [], example: 'El mono come un plátano.', exampleTranslation: 'The monkey eats a banana.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Naranja', definition: 'Orange (fruit).', synonyms: [], antonyms: [], example: 'Jugo de naranja.', exampleTranslation: 'Orange juice.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Fresa', definition: 'Strawberry.', synonyms: [], antonyms: [], example: 'Fresa con crema.', exampleTranslation: 'Strawberry with cream.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Uva', definition: 'Grape.', synonyms: [], antonyms: [], example: 'Uvas verdes.', exampleTranslation: 'Green grapes.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Piña', definition: 'Pineapple.', synonyms: [], antonyms: [], example: 'Piña colada.', exampleTranslation: 'Pineapple strained (cocktail).', difficulty: 'Medium', category: 'Fruits' },
    { term: 'Limón', definition: 'Lemon.', synonyms: [], antonyms: [], example: 'Té con limón.', exampleTranslation: 'Tea with lemon.', difficulty: 'Easy', category: 'Fruits' },

    // --- BODY PARTS ---
    { term: 'Cabeza', definition: 'Head.', synonyms: [], antonyms: [], example: 'Me duele la cabeza.', exampleTranslation: 'My head hurts.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Mano', definition: 'Hand.', synonyms: [], antonyms: [], example: 'Lava tus manos.', exampleTranslation: 'Wash your hands.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Pie', definition: 'Foot.', synonyms: [], antonyms: [], example: 'Tengo pies grandes.', exampleTranslation: 'I have big feet.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Ojo', definition: 'Eye.', synonyms: [], antonyms: [], example: 'Ojos azules.', exampleTranslation: 'Blue eyes.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Boca', definition: 'Mouth.', synonyms: [], antonyms: [], example: 'Cierra la boca.', exampleTranslation: 'Close your mouth.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Brazo', definition: 'Arm.', synonyms: [], antonyms: [], example: 'Brazo fuerte.', exampleTranslation: 'Strong arm.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Pierna', definition: 'Leg.', synonyms: [], antonyms: [], example: 'Piernas largas.', exampleTranslation: 'Long legs.', difficulty: 'Easy', category: 'Body Parts' },

    // --- ANIMALS ---
    { term: 'Gato', definition: 'Cat.', synonyms: [], antonyms: [], example: 'Mi gato duerme.', exampleTranslation: 'My cat sleeps.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Perro', definition: 'Dog.', synonyms: [], antonyms: [], example: 'El perro ladra.', exampleTranslation: 'The dog barks.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Pájaro', definition: 'Bird.', synonyms: [], antonyms: [], example: 'El pájaro canta.', exampleTranslation: 'The bird sings.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Caballo', definition: 'Horse.', synonyms: [], antonyms: [], example: 'El caballo corre.', exampleTranslation: 'The horse runs.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Vaca', definition: 'Cow.', synonyms: [], antonyms: [], example: 'La vaca da leche.', exampleTranslation: 'The cow gives milk.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Cerdo', definition: 'Pig.', synonyms: [], antonyms: [], example: 'El cerdo es rosa.', exampleTranslation: 'The pig is pink.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Oveja', definition: 'Sheep.', synonyms: [], antonyms: [], example: 'La oveja es blanca.', exampleTranslation: 'The sheep is white.', difficulty: 'Easy', category: 'Animals' },

    // --- FAMILY ---
    { term: 'Madre', definition: 'Mother.', synonyms: ['Mamá'], antonyms: [], example: 'Amo a mi madre.', exampleTranslation: 'I love my mother.', difficulty: 'Easy', category: 'Family' },
    { term: 'Padre', definition: 'Father.', synonyms: ['Papá'], antonyms: [], example: 'Mi padre trabaja.', exampleTranslation: 'My father works.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hijo', definition: 'Son.', synonyms: [], antonyms: [], example: 'Mi hijo es joven.', exampleTranslation: 'My son is young.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hermana', definition: 'Sister.', synonyms: [], antonyms: [], example: 'Mi hermana baila.', exampleTranslation: 'My sister dances.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hermano', definition: 'Brother.', synonyms: [], antonyms: [], example: 'Mi hermano estudia.', exampleTranslation: 'My brother studies.', difficulty: 'Easy', category: 'Family' },
    { term: 'Abuelo', definition: 'Grandfather.', synonyms: [], antonyms: [], example: 'Mi abuelo es sabio.', exampleTranslation: 'My grandfather is wise.', difficulty: 'Easy', category: 'Family' },
    { term: 'Tío', definition: 'Uncle.', synonyms: [], antonyms: [], example: 'Mi tío es alto.', exampleTranslation: 'My uncle is tall.', difficulty: 'Easy', category: 'Family' },

    // --- CLOTHING ---
    { term: 'Camisa', definition: 'Shirt.', synonyms: [], antonyms: [], example: 'Una camisa blanca.', exampleTranslation: 'A white shirt.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Pantalones', definition: 'Pants.', synonyms: [], antonyms: [], example: 'Pantalones azules.', exampleTranslation: 'Blue pants.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Vestido', definition: 'Dress.', synonyms: [], antonyms: [], example: 'Un vestido rojo.', exampleTranslation: 'A red dress.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Zapatos', definition: 'Shoes.', synonyms: [], antonyms: [], example: 'Zapatos nuevos.', exampleTranslation: 'New shoes.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Sombrero', definition: 'Hat.', synonyms: [], antonyms: [], example: 'Sombrero grande.', exampleTranslation: 'Large hat.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Calcetines', definition: 'Socks.', synonyms: [], antonyms: [], example: 'Calcetines calientes.', exampleTranslation: 'Warm socks.', difficulty: 'Medium', category: 'Clothing' },
    { term: 'Chaqueta', definition: 'Jacket.', synonyms: [], antonyms: [], example: 'Chaqueta de cuero.', exampleTranslation: 'Leather jacket.', difficulty: 'Easy', category: 'Clothing' },

    // --- SCHOOL ---
    { term: 'Libro', definition: 'Book.', synonyms: [], antonyms: [], example: 'Leo un libro.', exampleTranslation: 'I read a book.', difficulty: 'Easy', category: 'School' },
    { term: 'Lápiz', definition: 'Pencil.', synonyms: [], antonyms: [], example: 'Escribe con lápiz.', exampleTranslation: 'Write with a pencil.', difficulty: 'Easy', category: 'School' },
    /* Corrected: Change 'antonym' to 'antonyms' to match the Word interface */
    { term: 'Profesor', definition: 'Teacher.', synonyms: ['Maestro'], antonyms: [], example: 'El profesor enseña.', exampleTranslation: 'The teacher teaches.', difficulty: 'Easy', category: 'School' },
    { term: 'Estudiante', definition: 'Student.', synonyms: ['Alumno'], antonyms: [], example: 'El estudiante aprende.', exampleTranslation: 'The student learns.', difficulty: 'Easy', category: 'School' },
    { term: 'Mochila', definition: 'Backpack.', synonyms: [], antonyms: [], example: 'Mi mochila pesa.', exampleTranslation: 'My backpack is heavy.', difficulty: 'Easy', category: 'School' },
    { term: 'Examen', definition: 'Exam.', synonyms: [], antonyms: [], example: 'Un examen difícil.', exampleTranslation: 'A difficult exam.', difficulty: 'Easy', category: 'School' },
    { term: 'Clase', definition: 'Class.', synonyms: [], antonyms: [], example: 'La clase terminó.', exampleTranslation: 'The class finished.', difficulty: 'Easy', category: 'School' },

    // --- HOUSE ---
    { term: 'Casa', definition: 'House.', synonyms: [], antonyms: [], example: 'Mi casa es grande.', exampleTranslation: 'My house is big.', difficulty: 'Easy', category: 'House' },
    { term: 'Cama', definition: 'Bed.', synonyms: [], antonyms: [], example: 'Duermo en la cama.', exampleTranslation: 'I sleep in the bed.', difficulty: 'Easy', category: 'House' },
    { term: 'Silla', definition: 'Chair.', synonyms: [], antonyms: [], example: 'Siéntate en la silla.', exampleTranslation: 'Sit in the chair.', difficulty: 'Easy', category: 'House' },
    { term: 'Mesa', definition: 'Table.', synonyms: [], antonyms: [], example: 'La comida está en la mesa.', exampleTranslation: 'The food is on the table.', difficulty: 'Easy', category: 'House' },
    { term: 'Puerta', definition: 'Door.', synonyms: [], antonyms: [], example: 'Abre la puerta.', exampleTranslation: 'Open the door.', difficulty: 'Easy', category: 'House' },
    { term: 'Ventana', definition: 'Window.', synonyms: [], antonyms: [], example: 'Mira por la ventana.', exampleTranslation: 'Look through the window.', difficulty: 'Easy', category: 'House' },
    { term: 'Cocina', definition: 'Kitchen.', synonyms: [], antonyms: [], example: 'Cocino en la cocina.', exampleTranslation: 'I cook in the kitchen.', difficulty: 'Easy', category: 'House' },

    // --- NATURE ---
    { term: 'Árbol', definition: 'Tree.', synonyms: [], antonyms: [], example: 'El árbol es alto.', exampleTranslation: 'The tree is tall.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Flor', definition: 'Flower.', synonyms: [], antonyms: [], example: 'La flor es bonita.', exampleTranslation: 'The flower is pretty.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Sol', definition: 'Sun.', synonyms: [], antonyms: [], example: 'El sol brilla.', exampleTranslation: 'The sun shines.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Luna', definition: 'Moon.', synonyms: [], antonyms: [], example: 'La luna es blanca.', exampleTranslation: 'The moon is white.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Agua', definition: 'Water.', synonyms: [], antonyms: [], example: 'Bebo agua.', exampleTranslation: 'I drink water.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Mar', definition: 'Sea.', synonyms: [], antonyms: [], example: 'El mar es grande.', exampleTranslation: 'The sea is large.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Cielo', definition: 'Sky.', synonyms: [], antonyms: [], example: 'El cielo es azul.', exampleTranslation: 'The sky is blue.', difficulty: 'Easy', category: 'Nature' },
];
