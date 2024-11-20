// Preguntas y respuestas correctas
let preguntas = [
    // Matemáticas
    { pregunta: "¿Cuál es el resultado de 5 + 7?\n1) 10\n2) 12\n3) 14\n4) 16", correcta: 2 },
    { pregunta: "¿Cuánto es 9 x 3?\n1) 27\n2) 21\n3) 36\n4) 18", correcta: 1 },
    { pregunta: "¿Cuál es el resultado de 15 - 8?\n1) 5\n2) 7\n3) 8\n4) 6", correcta: 2 },
    { pregunta: "¿Cuánto es 36 ÷ 6?\n1) 5\n2) 8\n3) 6\n4) 9", correcta: 3 },
    { pregunta: "¿Cuál es el resultado de 4^2 (4 elevado al cuadrado)?\n1) 12\n2) 14\n3) 16\n4) 18", correcta: 3 },
    { pregunta: "¿Qué es la raíz cuadrada de 64?\n1) 6\n2) 8\n3) 10\n4) 12", correcta: 2 },
    { pregunta: "¿Cuál es el valor de π (pi)?\n1) 3.14\n2) 3.12\n3) 3.16\n4) 3.18", correcta: 1 },
    { pregunta: "¿Cuánto es 7 x 9?\n1) 63\n2) 72\n3) 54\n4) 49", correcta: 1 },
    { pregunta: "¿Qué es 10 % de 200?\n1) 20\n2) 10\n3) 30\n4) 40", correcta: 1 },
    { pregunta: "¿Cuál es el resultado de 12 ÷ 4?\n1) 4\n2) 2\n3) 3\n4) 5", correcta: 3 },

    // Física
    { pregunta: "¿Cuál es la fórmula de la fuerza?\n1) F = m * a\n2) F = m / a\n3) F = m + a\n4) F = m - a", correcta: 1 },
    { pregunta: "¿Qué es la velocidad?\n1) Distancia / tiempo\n2) Tiempo / distancia\n3) Distancia x tiempo\n4) Tiempo x distancia", correcta: 1 },
    { pregunta: "¿Cuál es la unidad de fuerza en el SI?\n1) Joules\n2) Newtons\n3) Watts\n4) Pascals", correcta: 2 },
    { pregunta: "¿Qué representa la energía cinética?\n1) 1/2 mv²\n2) mv\n3) mgh\n4) m/a", correcta: 1 },
    { pregunta: "¿Qué es el trabajo en física?\n1) Fuerza x distancia\n2) Fuerza / distancia\n3) Fuerza + distancia\n4) Fuerza - distancia", correcta: 1 },
    { pregunta: "¿Cuál es la fórmula de la energía potencial?\n1) mgh\n2) mv²\n3) Fd\n4) W/t", correcta: 1 },
    { pregunta: "¿Cuál es la unidad de medida de la energía?\n1) Joules\n2) Newtons\n3) Watts\n4) Volts", correcta: 1 },
    { pregunta: "¿Qué es la ley de la conservación de la energía?\n1) La energía se crea\n2) La energía se destruye\n3) La energía se transforma\n4) La energía aumenta", correcta: 3 },
    { pregunta: "¿Cuál es la fórmula de la aceleración?\n1) a = (v - u) / t\n2) a = vt\n3) a = u / v\n4) a = m / F", correcta: 1 },
    { pregunta: "¿Qué es un péndulo simple?\n1) Un objeto en movimiento\n2) Un objeto en reposo\n3) Un objeto que oscila\n4) Un objeto que gira", correcta: 3 },

    // Química
    { pregunta: "¿Cuál es la fórmula del agua?\n1) H2O\n2) O2\n3) CO2\n4) NaCl", correcta: 1 },
    { pregunta: "¿Qué es un ácido?\n1) Donador de electrones\n2) Aceptor de electrones\n3) Donador de protones\n4) Aceptor de protones", correcta: 3 },
    { pregunta: "¿Cuál es la fórmula del dióxido de carbono?\n1) CO\n2) CO2\n3) O2\n4) H2O", correcta: 2 },
    { pregunta: "¿Qué es un enlace covalente?\n1) Transferencia de electrones\n2) Compartición de electrones\n3) Atracción entre iones\n4) Repulsión entre átomos", correcta: 2 },
    { pregunta: "¿Cuál es la unidad de medida de la concentración?\n1) Molaridad (M)\n2) Gramos (g)\n3) Litros (L)\n4) Miligramos (mg)", correcta: 1 },
    { pregunta: "¿Qué es un compuesto?\n1) Mezcla de elementos\n2) Sólido puro\n3) Sustancia formada por dos o más elementos\n4) Elemento en estado natural", correcta: 3 },
    { pregunta: "¿Cuál es el pH del agua pura?\n1) 7\n2) 1\n3) 14\n4) 0", correcta: 1 },
    { pregunta: "¿Qué tipo de reacción es la fotosíntesis?\n1) Reacción de oxidación\n2) Reacción de reducción\n3) Reacción química\n4) Reacción biológica", correcta: 4 },
    { pregunta: "¿Cuál es la masa molar del oxígeno?\n1) 16 g/mol\n2) 32 g/mol\n3) 28 g/mol\n4) 44 g/mol", correcta: 2 },
    { pregunta: "¿Qué tipo de enlace existe en el cloruro de sodio?\n1) Covalente\n2) Iónico\n3) Metálico\n4) Doble", correcta: 2 },

    // Historia
    { pregunta: "¿Quién fue el primer presidente de los Estados Unidos?\n1) George Washington\n2) Abraham Lincoln\n3) Thomas Jefferson\n4) John Adams", correcta: 1 },
    { pregunta: "¿En qué año comenzó la Primera Guerra Mundial?\n1) 1914\n2) 1918\n3) 1939\n4) 1945", correcta: 1 },
    { pregunta: "¿Qué civilización construyó las pirámides de Egipto?\n1) Griega\n2) Romana\n3) Egipcia\n4) Maya", correcta: 3 },
    { pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial?\n1) Tratado de Versalles\n2) Tratado de París\n3) Tratado de Tordesillas\n4) Tratado de Utrecht", correcta: 1 },
    { pregunta: "¿Quién fue el líder de la Revolución Rusa?\n1) Lenin\n2) Stalin\n3) Trotsky\n4) Kerensky", correcta: 1 },
    { pregunta: "¿Qué evento comenzó la Segunda Guerra Mundial?\n1) La invasión de Polonia\n2) El ataque a Pearl Harbor\n3) La caída de Berlín\n4) La batalla de Stalingrado", correcta: 1 },
    { pregunta: "¿Quién descubrió América?\n1) Cristóbal Colón\n2) Fernando de Magallanes\n3) Vasco da Gama\n4) Hernán Cortés", correcta: 1 },
    { pregunta: "¿En qué año se firmó la Declaración de Independencia de EE. UU.?\n1) 1776\n2) 1789\n3) 1812\n4) 1865", correcta: 1 },
    { pregunta: "¿Qué imperio fue conocido como el imperio otomano?\n1) Bizantino\n2) Persa\n3) Turco\n4) Romano", correcta: 3 },
    { pregunta: "¿Quién fue el primer emperador de Roma?\n1) Julio César\n2) Augusto\n3) Nerón\n4) Trajano", correcta: 2 },

    // Geografía
    { pregunta: "¿Cuál es la capital de Francia?\n1) Londres\n2) París\n3) Berlín\n4) Roma", correcta: 2 },
    { pregunta: "¿Qué océano es el más grande del mundo?\n1) Atlántico\n2) Índico\n3) Pacífico\n4) Ártico", correcta: 3 },
    { pregunta: "¿Cuál es la montaña más alta del mundo?\n1) K2\n2) Mont Blanc\n3) Monte Everest\n4) Aconcagua", correcta: 3 },
    { pregunta: "¿Qué país tiene más población del mundo?\n1) Estados Unidos\n2) India\n3) China\n4) Brasil", correcta: 3 },
    { pregunta: "¿Cuál es el río más largo del mundo?\n1) Amazonas\n2) Nilo\n3) Yangtsé\n4) Misisipi", correcta: 2 },
    { pregunta: "¿Cuál es el continente más pequeño?\n1) Oceanía\n2) Europa\n3) Asia\n4) África", correcta: 1 },
    { pregunta: "¿En qué país se encuentra la Gran Muralla?\n1) Japón\n2) Corea del Sur\n3) China\n4) Mongolia", correcta: 3 },
    { pregunta: "¿Qué desierto es el más grande del mundo?\n1) Desierto de Gobi\n2) Desierto del Sahara\n3) Desierto de Atacama\n4) Desierto de Kalahari", correcta: 2 },
    { pregunta: "¿Cuál es la capital de Brasil?\n1) Buenos Aires\n2) Brasília\n3) Santiago\n4) Lima", correcta: 2 },
    { pregunta: "¿En qué continente se encuentra Egipto?\n1) Asia\n2) Europa\n3) África\n4) América", correcta: 3 },

    // Biología
    { pregunta: "¿Cuál es la unidad básica de la vida?\n1) Órgano\n2) Célula\n3) Tejido\n4) Sistema", correcta: 2 },
    { pregunta: "¿Qué tipo de célula carece de núcleo?\n1) Célula eucariota\n2) Célula procariota\n3) Célula animal\n4) Célula vegetal", correcta: 2 },
    { pregunta: "¿Qué proceso convierte la luz solar en energía química?\n1) Respiración\n2) Fotosíntesis\n3) Fermentación\n4) Excreción", correcta: 2 },
    { pregunta: "¿Cuál es el componente principal de la membrana celular?\n1) Proteínas\n2) Carbohidratos\n3) Lípidos\n4) Ácidos nucleicos", correcta: 3 },
    { pregunta: "¿Qué órgano es responsable de bombear sangre en el cuerpo humano?\n1) Hígado\n2) Riñones\n3) Corazón\n4) Pulmones", correcta: 3 },

    // Literatura
    { pregunta: "¿Quién escribió 'Cien años de soledad'?\n1) Gabriel García Márquez\n2) Julio Cortázar\n3) Jorge Luis Borges\n4) Mario Vargas Llosa", correcta: 1 },
    { pregunta: "¿Qué es un soneto?\n1) Un tipo de novela\n2) Un poema de 14 versos\n3) Un cuento corto\n4) Un ensayo", correcta: 2 },
    { pregunta: "¿Quién es el autor de 'Don Quijote de la Mancha'?\n1) Miguel de Cervantes\n2) Lope de Vega\n3) Francisco de Quevedo\n4) Gustavo Adolfo Bécquer", correcta: 1 },
    { pregunta: "¿Cuál es el género literario de 'Hamlet'?\n1) Novela\n2) Poesía\n3) Drama\n4) Ensayo", correcta: 3 },
    { pregunta: "¿Qué obra escribió Jorge Luis Borges?\n1) El Aleph\n2) La casa de los espíritus\n3) Rayuela\n4) El túnel", correcta: 1 },

    // Tecnología
    { pregunta: "¿Cuál es el lenguaje de programación más utilizado para el desarrollo web?\n1) Python\n2) Java\n3) JavaScript\n4) C++", correcta: 3 },
    { pregunta: "¿Qué significa HTML?\n1) Hyper Text Markup Language\n2) Hyperlink and Text Markup Language\n3) High Text Markup Language\n4) Hyper Text Markup List", correcta: 1 },
    { pregunta: "¿Qué es un sistema operativo?\n1) Un programa de diseño\n2) Un software que gestiona hardware y software\n3) Un tipo de aplicación\n4) Un lenguaje de programación", correcta: 2 },
    { pregunta: "¿Cuál es el principal componente de una computadora?\n1) Teclado\n2) Monitor\n3) Procesador\n4) Ratón", correcta: 3 },
    { pregunta: "¿Qué es la inteligencia artificial?\n1) Un tipo de software\n2) Un sistema que simula inteligencia humana\n3) Un tipo de hardware\n4) Un lenguaje de programación", correcta: 2 },

    // Filosofía
    { pregunta: "¿Quién es considerado el padre de la filosofía occidental?\n1) Platón\n2) Aristóteles\n3) Sócrates\n4) Descartes", correcta: 3 },
    { pregunta: "¿Qué es el empirismo?\n1) Teoría que se basa en la razón\n2) Teoría que se basa en la experiencia\n3) Teoría que se basa en la intuición\n4) Teoría que se basa en la lógica", correcta: 2 },
    { pregunta: "¿Qué filósofo escribió 'El contrato social'?\n1) Rousseau\n2) Locke\n3) Kant\n4) Hegel", correcta: 1 },
    { pregunta: "¿Qué es el existencialismo?\n1) Teoría sobre la existencia y el significado de la vida\n2) Teoría sobre la moral\n3) Teoría sobre el conocimiento\n4) Teoría sobre la lógica", correcta: 1 },
    { pregunta: "¿Qué filósofo es conocido por la frase 'Pienso, luego existo'?\n1) Platón\n2) Descartes\n3) Kant\n4) Hume", correcta: 2 },

    // Arte
    { pregunta: "¿Quién pintó 'La última cena'?\n1) Miguel Ángel\n2) Leonardo da Vinci\n3) Pablo Picasso\n4) Vincent van Gogh", correcta: 2 },
    { pregunta: "¿Qué movimiento artístico es conocido por el uso de colores brillantes y formas abstractas?\n1) Impresionismo\n2) Cubismo\n3) Surrealismo\n4) Expresionismo", correcta: 2 },
    { pregunta: "¿Quién es el autor de 'La Mona Lisa'?\n1) Rembrandt\n2) Leonardo da Vinci\n3) Claude Monet\n4) Salvador Dalí", correcta: 2 },
    { pregunta: "¿Qué técnica se utiliza en la escultura para crear formas tridimensionales?\n1) Pintura\n2) Grabado\n3) Modelado\n4) Dibujo", correcta: 3 },
    { pregunta: "¿Qué es el arte abstracto?\n1) Representación realista de la realidad\n2) Representación no figurativa\n3) Representación simbólica\n4) Representación histórica", correcta: 2 },
];

// Variables de conteo de respuestas
let correctas = 0;
let incorrectas = 0;

// Función principal para hacer el quiz
function quiz() {
    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = prompt(preguntas[i].pregunta);
        if (respuesta === null) {
            alert("El quiz ha sido cancelado.");
            return; // Cancela el quiz
        }

        if (parseInt(respuesta) === preguntas[i].correcta) {
            correctas++;
        } else {
            incorrectas++;
        }
    }

    // Muestra resultados finales
    alert(`Resultados finales:\nCorrectas: ${correctas}\nIncorrectas: ${incorrectas}`);
}

// Inicia el quiz
quiz();