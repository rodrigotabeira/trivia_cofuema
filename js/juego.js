//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"institucional",
        titulo:"¿En qué fecha se fundó COFUEMA?",
        opcionA:"1 de agosto de 1986",
        opcionB:"18 de diciembre de 1986",
        opcionC:"1 de diciembre de 1986",
        opcionD:"21 de setiembre de 1986",
        correcta:"c"
    },
    {
        id:2,
        categoria:"institucional",
        titulo:"¿Quienes pueden afiliarse a COFUEMA?",
        opcionA:"Puede afiliarse cualquier persona",
        opcionB:"Funcionarios de la Enseñanza",
        opcionC:"Solo empleados públicos",
        opcionD:"Funcionarios de la Enseñanza, en actividad o no y Familiares Directos",
        correcta:"d"
    },
    {
        id:3,
        categoria:"institucional",
        titulo:"COFUEMA es una cooperativa de..",
        opcionA:"Vivienda",
        opcionB:"Ahorro y Crédito",
        opcionC:"Crédito",
        opcionD:"Trabajo",
        correcta:"b"
    },
    {
        id:4,
        categoria:"institucional",
        titulo:"¿Qué significa COFUEMA?",
        opcionA:"Cooperativa de Funcionarios de la Enseñanza",
        opcionB:"Cooperativa de Funcionarios Públicos",
        opcionC:"Cooperativa de Funcionarios de la Enseñanza de Maldonado",
        opcionD:"Cooperativa de Funcionarios Privados de Maldonado",
        correcta:"c"
    },
    {
        id:5,
        categoria:"institucional",
        titulo:"¿Cómo se llama la biblioteca de COFUEMA?",
        opcionA:"José Pedro Varela",
        opcionB:"Horacio Quiroga",
        opcionC:"Juana de Ibarbourou",
        opcionD:"Elsa Díaz",
        correcta:"d"
    },
    {
        id: 6,
        categoria: "cooperativismo",
        titulo: "¿Cuál de estos NO es un principio cooperativo?",
        opcionA: "Adhesión voluntaria y abierta",
        opcionB: "Control democrático de los socios",
        opcionC: "Participación Económica de los Socios",
        opcionD: "Maximización del lucro individual",
        correcta: "d"
    },
    {
        id: 7,
        categoria: "cooperativismo",
        titulo: "El Día Internacional de las Cooperativas se celebra el:",
        opcionA: "Primer sábado de julio",
        opcionB: "1° de mayo",
        opcionC: "8 de marzo",
        opcionD: "Primer sábado de junio",
        correcta: "a"
    },
    {
        id: 8,
        categoria: "cooperativismo",
        titulo: "¿Cuál es el órgano máximo de una cooperativa?",
        opcionA: "Consejo Directivo",
        opcionB: "La Asamblea General",
        opcionC: "CEFIC",
        opcionD: "Comisión Fiscal",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "cooperativismo",
        titulo: "¿Qué significa CEFIC?",
        opcionA: "Centro Educativo Federal de Inclusión Comunitaria",
        opcionB: "Comité de Fomento de la Innovación Cooperativa",
        opcionC: "Comité de Educación, Fomento e Integración Cooperativa",
        opcionD: "Consejo de Educación y Finanzas Comunitarias",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "cooperativismo",
        titulo: "Cuántos socios titulares integran el Consejo Directivo?",
        opcionA: "6",
        opcionB: "5",
        opcionC: "8",
        opcionD: "3",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "interes",
        titulo: "¿Cuál es el río más largo de Uruguay?",
        opcionA: "Río Negro",
        opcionB: "Río Uruguay",
        opcionC: "Río Santa Lucía",
        opcionD: "Río Olimar",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "interes",
        titulo: "Si una cooperativa tiene 120 socios y el 25% participa de una asamblea, ¿cuántos socios asisten?",
        opcionA: "20",
        opcionB: "25",
        opcionC: "30",
        opcionD: "40",
        correcta: "c"
    },
    {
        id: 13,
        categoria: "interes",
        titulo: "¿En qué año se juró la primera Constitución uruguaya?",
        opcionA: "1811",
        opcionB: "1825",
        opcionC: "1830",
        opcionD: "1851",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "interes",
        titulo: "¿En qué centro educativo de Maldonado se encuentra el Molino Velázquez?",
        opcionA: "Escuela Nº 7",
        opcionB: "Escuela Nº 1",
        opcionC: "Liceo Departamental de Maldonado",
        opcionD: "UTU Maldonado",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "interes",
        titulo: "¿Quién es considerado el principal impulsor de la escuela laica, gratuita y obligatoria?",
        opcionA: "José Artigas",
        opcionB: "José Pedro Varela",
        opcionC: "Joaquín Suárez",
        opcionD: "Dámaso Antonio Larrañaga",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "compromiso",
        titulo: "¿Qué significan las siglas ODS?",
        opcionA: "Objetivos de Desarrollo Sostenible",
        opcionB: "Organización para el Desarrollo Social",
        opcionC: "Ordenamiento Democrático Soberano",
        opcionD: "Observatorio de Derechos Sociales",
        correcta: "a"
    },
    {
        id: 17,
        categoria: "compromiso",
        titulo: "¿Qué centros de educativos pueden participar de Compromiso COFUEMA?",
        opcionA: "Centros de Enseñanza Públicos",
        opcionB: "Colegios Privados",
        opcionC: "Centros Educativos de Primera Infancia",
        opcionD: "Todas las respuestas son correctas",
        correcta: "d"
    },
    {
        id: 18,
        categoria: "compromiso",
        titulo: "¿Cuáles son los valores principales de Compromiso COFUEMA?",
        opcionA: "Promover el uso de materiales plásticos en actividades escolares para mayor comodidad",
        opcionB: "Generar conciencia ecológica y colaborar en la recuperación de ecosistemas naturales",
        opcionC: "Enseñar a las escuelas sobre reciclaje de papel y cartón",
        opcionD: "Las respuestas B y C son correctas",
        correcta: "d"
    },
    {
        id: 19,
        categoria: "compromiso",
        titulo: "¿Cuáles son las actividades que desarrolla Compromiso COFUEMA?",
        opcionA: "Talleres, charlas y eventos comunitarios",
        opcionB: "Excursiones nacionales",
        opcionC: "Rifas y sorteos",
        opcionD: "Actividades deportivas",
        correcta: "a"
    },
    {
        id: 20,
        categoria: "compromiso",
        titulo: "¿Qué significa la iniciativa Compromiso COFUEMA?",
        opcionA: "Una campaña solidaria",
        opcionB: "Una forma de difundir convenios",
        opcionC: "Un espacio donde la cooperativa se vincula con la comunidad educativa",
        opcionD: "Generar un espacio para difundir créditos",
        correcta: "c"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 4){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})