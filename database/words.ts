
// @/database/words.ts
import { Word } from '../types';

export const words: Word[] = [
    // ==============================================================================
    // --- NUMBERS (1-10 & Basics) ---
    // ==============================================================================
    { term: 'Uno', definition: 'The number one (1).', synonyms: [], antonyms: [], example: 'Tengo un gato. (I have one cat.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Dos', definition: 'The number two (2).', synonyms: [], antonyms: [], example: 'Tengo dos ojos. (I have two eyes.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Tres', definition: 'The number three (3).', synonyms: [], antonyms: [], example: 'Tres perros. (Three dogs.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Cuatro', definition: 'The number four (4).', synonyms: [], antonyms: [], example: 'El coche tiene cuatro ruedas. (The car has four wheels.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Cinco', definition: 'The number five (5).', synonyms: [], antonyms: [], example: 'Dame cinco. (Give me five.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Seis', definition: 'The number six (6).', synonyms: [], antonyms: [], example: 'Tengo seis años. (I am six years old.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Siete', definition: 'The number seven (7).', synonyms: [], antonyms: [], example: 'Siete días a la semana. (Seven days a week.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Ocho', definition: 'The number eight (8).', synonyms: [], antonyms: [], example: 'Ocho horas de sueño. (Eight hours of sleep.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Nueve', definition: 'The number nine (9).', synonyms: [], antonyms: [], example: 'El número nueve. (Number nine.)', difficulty: 'Easy', category: 'Numbers' },
    { term: 'Diez', definition: 'The number ten (10).', synonyms: [], antonyms: [], example: 'Diez dedos. (Ten fingers.)', difficulty: 'Easy', category: 'Numbers' },
    
    // ==============================================================================
    // --- COLORS ---
    // ==============================================================================
    { term: 'Rojo', definition: 'The color red.', synonyms: [], antonyms: [], example: 'La manzana es roja. (The apple is red.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Azul', definition: 'The color blue.', synonyms: [], antonyms: [], example: 'El cielo es azul. (The sky is blue.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Verde', definition: 'The color green.', synonyms: [], antonyms: [], example: 'El pasto es verde. (The grass is green.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Amarillo', definition: 'The color yellow.', synonyms: [], antonyms: [], example: 'El sol es amarillo. (The sun is yellow.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Negro', definition: 'The color black.', synonyms: [], antonyms: ['Blanco'], example: 'El gato es negro. (The cat is black.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Blanco', definition: 'The color white.', synonyms: [], antonyms: ['Negro'], example: 'La nieve es blanca. (The snow is white.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Naranja', definition: 'The color orange.', synonyms: [], antonyms: [], example: 'La naranja es naranja. (The orange is orange.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Rosa', definition: 'The color pink.', synonyms: [], antonyms: [], example: 'La flor es rosa. (The flower is pink.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Morado', definition: 'The color purple.', synonyms: ['Violeta'], antonyms: [], example: 'Me gusta el color morado. (I like purple.)', difficulty: 'Easy', category: 'Colors' },
    { term: 'Gris', definition: 'The color gray.', synonyms: [], antonyms: [], example: 'El cielo está gris. (The sky is gray.)', difficulty: 'Easy', category: 'Colors' },

    // ==============================================================================
    // --- SCHOOL ---
    // ==============================================================================
    { term: 'Escuela', definition: 'Place where you learn (School).', synonyms: ['Colegio'], antonyms: [], example: 'Voy a la escuela.', difficulty: 'Easy', category: 'School' },
    { term: 'Maestro', definition: 'Person who teaches (Teacher - male).', synonyms: ['Profesor'], antonyms: ['Estudiante'], example: 'El maestro enseña matemáticas.', difficulty: 'Easy', category: 'School' },
    { term: 'Estudiante', definition: 'Person who learns (Student).', synonyms: ['Alumno'], antonyms: ['Maestro'], example: 'Soy un buen estudiante.', difficulty: 'Easy', category: 'School' },
    { term: 'Libro', definition: 'Pages with words to read (Book).', synonyms: [], antonyms: [], example: 'Leo un libro interesante.', difficulty: 'Easy', category: 'School' },
    { term: 'Lápiz', definition: 'Tool for writing or drawing (Pencil).', synonyms: [], antonyms: [], example: 'Escribo con mi lápiz.', difficulty: 'Easy', category: 'School' },
    { term: 'Papel', definition: 'Material to write on (Paper).', synonyms: [], antonyms: [], example: 'Necesito una hoja de papel.', difficulty: 'Easy', category: 'School' },
    { term: 'Clase', definition: 'A group of students learning (Class).', synonyms: ['Aula'], antonyms: [], example: 'La clase empieza a las ocho.', difficulty: 'Easy', category: 'School' },
    { term: 'Mesa', definition: 'Furniture to work on (Table/Desk).', synonyms: ['Escritorio'], antonyms: [], example: 'El libro está en la mesa.', difficulty: 'Easy', category: 'School' },
    { term: 'Silla', definition: 'Furniture to sit on (Chair).', synonyms: [], antonyms: [], example: 'Siéntate en la silla.', difficulty: 'Easy', category: 'School' },
    { term: 'Pizarra', definition: 'Board for writing in class (Blackboard/Whiteboard).', synonyms: ['Tablero'], antonyms: [], example: 'Mira la pizarra.', difficulty: 'Easy', category: 'School' },

    // ==============================================================================
    // --- HOUSE ---
    // ==============================================================================
    { term: 'Casa', definition: 'Place where you live (House).', synonyms: ['Hogar'], antonyms: [], example: 'Mi casa es bonita.', difficulty: 'Easy', category: 'House' },
    { term: 'Cocina', definition: 'Room for cooking (Kitchen).', synonyms: [], antonyms: [], example: 'Mamá está en la cocina.', difficulty: 'Easy', category: 'House' },
    { term: 'Baño', definition: 'Room for washing (Bathroom).', synonyms: [], antonyms: [], example: 'El baño está limpio.', difficulty: 'Easy', category: 'House' },
    { term: 'Dormitorio', definition: 'Room for sleeping (Bedroom).', synonyms: ['Habitación'], antonyms: [], example: 'Mi dormitorio es grande.', difficulty: 'Easy', category: 'House' },
    { term: 'Sala', definition: 'Room for relaxing (Living room).', synonyms: ['Salón'], antonyms: [], example: 'Vemos la tele en la sala.', difficulty: 'Easy', category: 'House' },
    { term: 'Puerta', definition: 'Opening to enter a room (Door).', synonyms: [], antonyms: [], example: 'Cierra la puerta, por favor.', difficulty: 'Easy', category: 'House' },
    { term: 'Ventana', definition: 'Opening to see outside (Window).', synonyms: [], antonyms: [], example: 'Abre la ventana.', difficulty: 'Easy', category: 'House' },
    { term: 'Cama', definition: 'Furniture for sleeping (Bed).', synonyms: [], antonyms: [], example: 'Voy a mi cama.', difficulty: 'Easy', category: 'House' },
    { term: 'Jardín', definition: 'Area with plants outside (Garden).', synonyms: [], antonyms: [], example: 'El perro juega en el jardín.', difficulty: 'Easy', category: 'House' },
    { term: 'Pared', definition: 'Vertical side of a room (Wall).', synonyms: ['Muro'], antonyms: [], example: 'La pared es blanca.', difficulty: 'Easy', category: 'House' },

    // ==============================================================================
    // --- NATURE ---
    // ==============================================================================
    { term: 'Árbol', definition: 'Tall plant with wood trunk (Tree).', synonyms: [], antonyms: [], example: 'El árbol es alto.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Flor', definition: 'Colorful part of a plant (Flower).', synonyms: [], antonyms: [], example: 'La flor huele bien.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Río', definition: 'Flowing water (River).', synonyms: [], antonyms: [], example: 'El río es largo.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Montaña', definition: 'Very high land (Mountain).', synonyms: [], antonyms: ['Valle'], example: 'Subimos la montaña.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Mar', definition: 'Large body of salt water (Sea).', synonyms: ['Océano'], antonyms: ['Tierra'], example: 'Me gusta nadar en el mar.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Cielo', definition: 'Space above the earth (Sky).', synonyms: [], antonyms: ['Suelo'], example: 'El cielo es azul.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Estrella', definition: 'Light in the night sky (Star).', synonyms: [], antonyms: [], example: 'Mira esa estrella brillante.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Lluvia', definition: 'Water falling from clouds (Rain).', synonyms: [], antonyms: ['Sol'], example: 'La lluvia moja el suelo.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Nieve', definition: 'Frozen white rain (Snow).', synonyms: [], antonyms: [], example: 'La nieve es fría.', difficulty: 'Easy', category: 'Nature' },
    { term: 'Viento', definition: 'Moving air (Wind).', synonyms: ['Aire'], antonyms: [], example: 'El viento sopla fuerte.', difficulty: 'Easy', category: 'Nature' },

    // ==============================================================================
    // --- VEGETABLES ---
    // ==============================================================================
    { term: 'Zanahoria', definition: 'An orange root vegetable (Carrot).', synonyms: [], antonyms: [], example: 'El conejo come una zanahoria.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Lechuga', definition: 'Green leaves used in salads (Lettuce).', synonyms: [], antonyms: [], example: 'La ensalada tiene lechuga.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Tomate', definition: 'A red fruit often used as a vegetable (Tomato).', synonyms: [], antonyms: [], example: 'El tomate es rojo.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Papa', definition: 'A starchy tuber (Potato).', synonyms: ['Patata'], antonyms: [], example: 'Me gustan las papas fritas.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Cebolla', definition: 'A vegetable that makes you cry (Onion).', synonyms: [], antonyms: [], example: 'La cebolla pica.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Maíz', definition: 'Yellow grains (Corn).', synonyms: ['Elote'], antonyms: [], example: 'El maíz es dulce.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Pepino', definition: 'A long green vegetable (Cucumber).', synonyms: [], antonyms: [], example: 'El pepino es fresco.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Ajo', definition: 'A strong-smelling bulb (Garlic).', synonyms: [], antonyms: [], example: 'El ajo da sabor.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Pimiento', definition: 'A colorful vegetable (Pepper/Capsicum).', synonyms: [], antonyms: [], example: 'El pimiento es verde.', difficulty: 'Easy', category: 'Vegetables' },
    { term: 'Brócoli', definition: 'A green vegetable that looks like a tree (Broccoli).', synonyms: [], antonyms: [], example: 'El brócoli es saludable.', difficulty: 'Easy', category: 'Vegetables' },

    // ==============================================================================
    // --- FRUITS ---
    // ==============================================================================
    { term: 'Manzana', definition: 'A red or green crunchy fruit (Apple).', synonyms: [], antonyms: [], example: 'Una manzana al día.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Plátano', definition: 'A long yellow fruit (Banana).', synonyms: ['Banana'], antonyms: [], example: 'El mono come plátano.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Naranja', definition: 'A round orange citrus fruit (Orange).', synonyms: [], antonyms: [], example: 'Jugo de naranja.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Uva', definition: 'Small round fruit used for wine (Grape).', synonyms: [], antonyms: [], example: 'Las uvas son dulces.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Fresa', definition: 'A small red berry (Strawberry).', synonyms: ['Frutilla'], antonyms: [], example: 'Me gusta el helado de fresa.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Piña', definition: 'A tropical fruit with spiky skin (Pineapple).', synonyms: ['Ananá'], antonyms: [], example: 'La piña es tropical.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Sandía', definition: 'A large green fruit with red inside (Watermelon).', synonyms: [], antonyms: [], example: 'La sandía tiene agua.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Limón', definition: 'A sour yellow fruit (Lemon).', synonyms: [], antonyms: [], example: 'El limón es ácido.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Melón', definition: 'A sweet round fruit (Melon).', synonyms: [], antonyms: [], example: 'El melón es dulce.', difficulty: 'Easy', category: 'Fruits' },
    { term: 'Pera', definition: 'A green or yellow fruit (Pear).', synonyms: [], antonyms: [], example: 'La pera es jugosa.', difficulty: 'Easy', category: 'Fruits' },

    // ==============================================================================
    // --- BODY PARTS ---
    // ==============================================================================
    { term: 'Cabeza', definition: 'The top part of your body (Head).', synonyms: [], antonyms: [], example: 'Me duele la cabeza.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Mano', definition: 'The part with fingers (Hand).', synonyms: [], antonyms: ['Pie'], example: 'Dame la mano.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Pie', definition: 'The part you walk on (Foot).', synonyms: [], antonyms: ['Mano'], example: 'Me duele el pie.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Ojo', definition: 'What you see with (Eye).', synonyms: [], antonyms: [], example: 'Tengo dos ojos.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Boca', definition: 'What you eat with (Mouth).', synonyms: [], antonyms: [], example: 'Abre la boca.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Nariz', definition: 'What you smell with (Nose).', synonyms: [], antonyms: [], example: 'Toca tu nariz.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Oreja', definition: 'What you hear with (Ear).', synonyms: ['Oído'], antonyms: [], example: 'El conejo tiene orejas largas.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Pelo', definition: 'What grows on your head (Hair).', synonyms: ['Cabello'], antonyms: [], example: 'Tiene el pelo largo.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Brazo', definition: 'The limb connected to your shoulder (Arm).', synonyms: [], antonyms: ['Pierna'], example: 'Levanta el brazo.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Pierna', definition: 'The limb you walk with (Leg).', synonyms: [], antonyms: ['Brazo'], example: 'Corre con las piernas.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Dedo', definition: 'Digit on your hand (Finger).', synonyms: [], antonyms: [], example: 'Tengo cinco dedos.', difficulty: 'Easy', category: 'Body Parts' },
    { term: 'Diente', definition: 'White part in mouth for chewing (Tooth).', synonyms: [], antonyms: [], example: 'Cepilla tus dientes.', difficulty: 'Easy', category: 'Body Parts' },

    // ==============================================================================
    // --- ANIMALS ---
    // ==============================================================================
    { term: 'Gato', definition: 'A small pet that meows (Cat).', synonyms: ['Minino'], antonyms: ['Perro'], example: 'El gato duerme.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Perro', definition: 'A loyal pet that barks (Dog).', synonyms: [], antonyms: ['Gato'], example: 'El perro juega.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Pájaro', definition: 'An animal that flies (Bird).', synonyms: ['Ave'], antonyms: [], example: 'El pájaro canta.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Pez', definition: 'An animal that swims in water (Fish).', synonyms: ['Pescado'], antonyms: [], example: 'El pez nada.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Caballo', definition: 'A large animal you can ride (Horse).', synonyms: [], antonyms: [], example: 'El caballo corre rápido.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Vaca', definition: 'An animal that gives milk (Cow).', synonyms: [], antonyms: [], example: 'La vaca dice mu.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Pollo', definition: 'A farm bird (Chicken).', synonyms: ['Gallina'], antonyms: [], example: 'El pollo come maíz.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Cerdo', definition: 'A pink farm animal (Pig).', synonyms: ['Puerco'], antonyms: [], example: 'El cerdo es rosado.', difficulty: 'Easy', category: 'Animals' },
    { term: 'León', definition: 'King of the jungle (Lion).', synonyms: [], antonyms: [], example: 'El león ruge.', difficulty: 'Easy', category: 'Animals' },
    { term: 'Elefante', definition: 'A very large animal with a trunk (Elephant).', synonyms: [], antonyms: [], example: 'El elefante es grande.', difficulty: 'Easy', category: 'Animals' },

    // ==============================================================================
    // --- FAMILY ---
    // ==============================================================================
    { term: 'Madre', definition: 'Female parent (Mother).', synonyms: ['Mamá'], antonyms: ['Padre'], example: 'Mi madre es amable.', difficulty: 'Easy', category: 'Family' },
    { term: 'Padre', definition: 'Male parent (Father).', synonyms: ['Papá'], antonyms: ['Madre'], example: 'Mi padre trabaja.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hermano', definition: 'Male sibling (Brother).', synonyms: [], antonyms: ['Hermana'], example: 'Juego con mi hermano.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hermana', definition: 'Female sibling (Sister).', synonyms: [], antonyms: ['Hermano'], example: 'Mi hermana es mayor.', difficulty: 'Easy', category: 'Family' },
    { term: 'Abuelo', definition: 'Father of your parent (Grandfather).', synonyms: [], antonyms: ['Abuela'], example: 'Mi abuelo cuenta historias.', difficulty: 'Easy', category: 'Family' },
    { term: 'Abuela', definition: 'Mother of your parent (Grandmother).', synonyms: [], antonyms: ['Abuelo'], example: 'Mi abuela cocina bien.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hijo', definition: 'Male child (Son).', synonyms: [], antonyms: ['Hija'], example: 'Es mi hijo.', difficulty: 'Easy', category: 'Family' },
    { term: 'Hija', definition: 'Female child (Daughter).', synonyms: [], antonyms: ['Hijo'], example: 'Es mi hija.', difficulty: 'Easy', category: 'Family' },
    { term: 'Tío', definition: 'Brother of your parent (Uncle).', synonyms: [], antonyms: ['Tía'], example: 'Mi tío es divertido.', difficulty: 'Easy', category: 'Family' },
    { term: 'Tía', definition: 'Sister of your parent (Aunt).', synonyms: [], antonyms: ['Tío'], example: 'Mi tía vive lejos.', difficulty: 'Easy', category: 'Family' },

    // ==============================================================================
    // --- CLOTHING ---
    // ==============================================================================
    { term: 'Camisa', definition: 'Upper body garment with buttons (Shirt).', synonyms: [], antonyms: [], example: 'Una camisa blanca.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Pantalones', definition: 'Lower body garment (Pants/Trousers).', synonyms: [], antonyms: [], example: 'Pantalones azules.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Zapatos', definition: 'Footwear (Shoes).', synonyms: [], antonyms: [], example: 'Zapatos nuevos.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Vestido', definition: 'A one-piece garment for women/girls (Dress).', synonyms: [], antonyms: [], example: 'Un vestido bonito.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Sombrero', definition: 'Headwear (Hat).', synonyms: ['Gorra'], antonyms: [], example: 'Ponte el sombrero.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Calcetines', definition: 'Clothing for feet (Socks).', synonyms: ['Medias'], antonyms: [], example: 'Calcetines calientes.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Abrigo', definition: 'Warm outer garment (Coat).', synonyms: ['Chaqueta'], antonyms: [], example: 'Hace frío, usa abrigo.', difficulty: 'Easy', category: 'Clothing' },
    { term: 'Falda', definition: 'Lower body garment without legs (Skirt).', synonyms: [], antonyms: [], example: 'Una falda larga.', difficulty: 'Easy', category: 'Clothing' },

    // ==============================================================================
    // --- BASIC VOCABULARY (General) ---
    // ==============================================================================
    { term: 'Casa', definition: 'Where you live (House/Home).', synonyms: [], antonyms: [], example: 'Mi casa es grande. (My house is big.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Hola', definition: 'A greeting (Hello/Hi).', synonyms: ['Buenos días'], antonyms: ['Adiós'], example: '¡Hola amigo! (Hello friend!)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Adiós', definition: 'What you say when leaving (Goodbye).', synonyms: ['Chau'], antonyms: ['Hola'], example: 'Adiós mamá. (Goodbye mom.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Sí', definition: 'Affirmative response (Yes).', synonyms: ['Claro'], antonyms: ['No'], example: 'Sí, por favor. (Yes, please.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'No', definition: 'Negative response (No).', synonyms: [], antonyms: ['Sí'], example: 'No, gracias. (No, thank you.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Agua', definition: 'Clear liquid you drink (Water).', synonyms: [], antonyms: [], example: 'Bebo agua. (I drink water.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Sol', definition: 'The hot star in the sky (Sun).', synonyms: [], antonyms: ['Luna'], example: 'El sol es amarillo. (The sun is yellow.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Luna', definition: 'The white orb in the night sky (Moon).', synonyms: [], antonyms: ['Sol'], example: 'La luna es blanca. (The moon is white.)', difficulty: 'Easy', category: 'Vocabulary' },
    { term: 'Caminar', definition: 'To move on your feet (To walk).', synonyms: ['Andar', 'Pasear'], antonyms: ['Correr'], example: 'Me gusta caminar. (I like to walk.)', difficulty: 'Medium', etymology: 'From Latin "camminus".', category: 'Vocabulary' },
    { term: 'Hermoso', definition: 'Very pretty (Beautiful).', synonyms: ['Bonito', 'Lindo'], antonyms: ['Feo'], example: 'El día es hermoso. (The day is beautiful.)', difficulty: 'Medium', etymology: 'From Latin "formosus".', category: 'Vocabulary' },
    { term: 'Ciudad', definition: 'A large town with many buildings (City).', synonyms: ['Metrópoli'], antonyms: ['Campo'], example: 'Vivo en una ciudad. (I live in a city.)', difficulty: 'Medium', etymology: 'From Latin "civitas".', category: 'Vocabulary' },
    { term: 'Desayuno', definition: 'Morning meal (Breakfast).', synonyms: [], antonyms: ['Cena'], example: 'Como huevos para el desayuno.', difficulty: 'Medium', etymology: 'Des- (undo) + ayuno (fasting).', category: 'Vocabulary' },
    { term: 'Trabajar', definition: 'To do a job (To work).', synonyms: ['Laborar'], antonyms: ['Descansar'], example: 'Tengo que trabajar. (I have to work.)', difficulty: 'Medium', etymology: 'From Latin "tripaliare".', category: 'Vocabulary' },
    { term: 'Escribir', definition: 'To make words with a pen (To write).', synonyms: ['Anotar'], antonyms: ['Borrar'], example: 'Voy a escribir una carta.', difficulty: 'Medium', etymology: 'From Latin "scribere".', category: 'Vocabulary' },
    { term: 'Izquierda', definition: 'Opposite of right (Left).', synonyms: [], antonyms: ['Derecha'], example: 'Gira a la izquierda. (Turn left.)', difficulty: 'Medium', etymology: 'From Basque "ezkerra".', category: 'Vocabulary' },
    { term: 'Derecha', definition: 'Opposite of left (Right).', synonyms: [], antonyms: ['Izquierda'], example: 'Mano derecha. (Right hand.)', difficulty: 'Medium', etymology: 'From Latin "directus".', category: 'Vocabulary' },
    { term: 'Preguntar', definition: 'To ask a question.', synonyms: ['Cuestionar'], antonyms: ['Responder'], example: 'Quiero preguntar algo.', difficulty: 'Medium', etymology: 'From Latin "praecunctari".', category: 'Vocabulary' },
    { term: 'Entender', definition: 'To know what something means (To understand).', synonyms: ['Comprender'], antonyms: ['Ignorar'], example: 'No entiendo. (I don\'t understand.)', difficulty: 'Medium', etymology: 'From Latin "intendere".', category: 'Vocabulary' },
    { term: 'Olvidar', definition: 'To not remember (To forget).', synonyms: [], antonyms: ['Recordar'], example: 'No quiero olvidar. (I don\'t want to forget.)', difficulty: 'Medium', etymology: 'From Latin "oblitare".', category: 'Vocabulary' },
    { term: 'Siempre', definition: 'All the time (Always).', synonyms: ['Constantemente'], antonyms: ['Nunca'], example: 'Siempre llego tarde.', difficulty: 'Medium', etymology: 'From Latin "semper".', category: 'Vocabulary' },
    { term: 'Dinero', definition: 'What you use to buy things (Money).', synonyms: ['Plata', 'Efectivo'], antonyms: [], example: 'Necesito dinero.', difficulty: 'Medium', etymology: 'From Latin "denarius".', category: 'Vocabulary' },
    { term: 'Cuchara', definition: 'Utensil for soup (Spoon).', synonyms: [], antonyms: ['Tenedor'], example: 'Uso una cuchara.', difficulty: 'Medium', etymology: 'From Latin "cochlearium".', category: 'Vocabulary' },
    { term: 'Invierno', definition: 'Cold season (Winter).', synonyms: [], antonyms: ['Verano'], example: 'Hace frío en invierno.', difficulty: 'Medium', etymology: 'From Latin "hibernum".', category: 'Vocabulary' },
    { term: 'Desafortunadamente', definition: 'Sadly / Unluckily (Unfortunately).', synonyms: ['Lamentablemente'], antonyms: ['Afortunadamente'], example: 'Desafortunadamente, perdí el tren.', difficulty: 'Hard', etymology: 'Des- + afortunado + -mente.', category: 'Vocabulary' },
    { term: 'Madrugada', definition: 'Very early morning, before sunrise.', synonyms: ['Amanecer'], antonyms: ['Anochecer'], example: 'Me desperté de madrugada.', difficulty: 'Hard', etymology: 'From "madrugar".', category: 'Vocabulary' },
    { term: 'Rompecabezas', definition: 'A game with many pieces (Puzzle).', synonyms: ['Puzzle'], antonyms: [], example: 'Este rompecabezas es difícil.', difficulty: 'Hard', etymology: 'Rompe (breaks) + cabezas (heads).', category: 'Vocabulary' },
    { term: 'Embarazada', definition: 'Pregnant (False friend: NOT embarrassed).', synonyms: ['Encinta'], antonyms: [], example: 'Ella está embarazada.', difficulty: 'Hard', etymology: 'False friend warning.', category: 'Vocabulary' },
    { term: 'Constipado', definition: 'Having a cold (False friend: NOT constipated).', synonyms: ['Resfriado'], antonyms: ['Sano'], example: 'Estoy constipado.', difficulty: 'Hard', etymology: 'False friend warning.', category: 'Vocabulary' },
    { term: 'Sobremesa', definition: 'Talking at the table after eating.', synonyms: [], antonyms: [], example: 'Disfrutamos la sobremesa.', difficulty: 'Hard', etymology: 'Unique cultural concept.', category: 'Vocabulary' },
    { term: 'Estrenar', definition: 'To use something for the first time.', synonyms: ['Inaugurar'], antonyms: [], example: 'Voy a estrenar zapatos.', difficulty: 'Hard', etymology: 'From Latin "strena".', category: 'Vocabulary' },
    { term: 'Madrugar', definition: 'To wake up early.', synonyms: [], antonyms: ['Trasnochar'], example: 'No me gusta madrugar.', difficulty: 'Hard', etymology: 'Related to "maduro".', category: 'Vocabulary' },
    { term: 'Anteayer', definition: 'The day before yesterday.', synonyms: ['Antier'], antonyms: ['Pasado mañana'], example: 'Fue anteayer.', difficulty: 'Hard', etymology: 'Ante (before) + ayer (yesterday).', category: 'Vocabulary' },
    { term: 'Vergüenza', definition: 'Feeling shy or bad about something (Embarrassment/Shame).', synonyms: ['Pudor'], antonyms: ['Orgullo'], example: 'Tengo vergüenza.', difficulty: 'Hard', etymology: 'From Latin "verecundia".', category: 'Vocabulary' },
    { term: 'Murciélago', definition: 'Animal that flies at night (Bat).', synonyms: [], antonyms: [], example: 'El murciélago vuela.', difficulty: 'Hard', etymology: 'Contains all 5 vowels.', category: 'Vocabulary' },
    { term: 'Ojalá', definition: 'I hope / God willing.', synonyms: ['Espero que'], antonyms: [], example: '¡Ojalá no llueva!', difficulty: 'Hard', etymology: 'From Arabic.', category: 'Vocabulary' },
    { term: 'Trasnochar', definition: 'To stay up very late.', synonyms: ['Velar'], antonyms: ['Madrugar'], example: 'No debes trasnochar.', difficulty: 'Hard', etymology: 'Tras + noche.', category: 'Vocabulary' },
    { term: 'Friolero', definition: 'Someone who gets cold easily.', synonyms: [], antonyms: ['Caluroso'], example: 'Soy muy friolero.', difficulty: 'Hard', etymology: 'From "frío".', category: 'Vocabulary' },
    { term: 'Empalagoso', definition: 'Too sweet (food) or too clingy (person).', synonyms: ['Dulzón'], antonyms: ['Amargo'], example: 'El pastel es empalagoso.', difficulty: 'Hard', etymology: 'Related to "paladar".', category: 'Vocabulary' },
    { term: 'Inefable', definition: 'Cannot be described in words (Ineffable).', synonyms: ['Indescriptible'], antonyms: ['Descriptible'], example: 'Una alegría inefable.', difficulty: 'Exam', etymology: 'From Latin.', category: 'Vocabulary' },
    { term: 'Elocuencia', definition: 'Speaking beautifully (Eloquence).', synonyms: ['Fluidez'], antonyms: ['Tartamudez'], example: 'Habló con elocuencia.', difficulty: 'Exam', etymology: 'From Latin.', category: 'Vocabulary' },
    { term: 'Efímero', definition: 'Lasting a short time (Ephemeral).', synonyms: ['Fugaz'], antonyms: ['Eterno'], example: 'La belleza es efímera.', difficulty: 'Exam', etymology: 'From Greek.', category: 'Vocabulary' },
    { term: 'Resiliencia', definition: 'Recovering quickly (Resilience).', synonyms: ['Fortaleza'], antonyms: ['Debilidad'], example: 'Tener resiliencia.', difficulty: 'Exam', etymology: 'From Latin.', category: 'Vocabulary' },
    { term: 'Paradigma', definition: 'A model or example (Paradigm).', synonyms: ['Modelo'], antonyms: [], example: 'Nuevo paradigma.', difficulty: 'Exam', etymology: 'From Greek.', category: 'Vocabulary' },
    { term: 'Yuxtaposición', definition: 'Placing things together for contrast (Juxtaposition).', synonyms: ['Contraste'], antonyms: [], example: 'Yuxtaposición de colores.', difficulty: 'Exam', etymology: 'Latin.', category: 'Vocabulary' },
    { term: 'Idiosincrasia', definition: 'Unique behavior or habit (Idiosyncrasy).', synonyms: ['Peculiaridad'], antonyms: [], example: 'Idiosincrasia cultural.', difficulty: 'Exam', etymology: 'From Greek.', category: 'Vocabulary' },
    { term: 'Melancolía', definition: 'Deep sadness (Melancholy).', synonyms: ['Tristeza'], antonyms: ['Euforia'], example: 'Siento melancolía.', difficulty: 'Exam', etymology: 'From Greek.', category: 'Vocabulary' },
    { term: 'Ubicuidad', definition: 'Being everywhere (Ubiquity).', synonyms: ['Omnipresencia'], antonyms: [], example: 'La ubicuidad de internet.', difficulty: 'Exam', etymology: 'From Latin.', category: 'Vocabulary' },
    { term: 'Serendipia', definition: 'Happy accident (Serendipity).', synonyms: ['Chiripa'], antonyms: ['Desgracia'], example: 'Fue una serendipia.', difficulty: 'Exam', etymology: 'From Persian fairy tale.', category: 'Vocabulary' }
];
