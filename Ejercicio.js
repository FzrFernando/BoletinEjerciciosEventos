// Ejercicio 1: Eventos Básicos
// 1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando se haga clic en el botón, 
// se muestre un mensaje en la consola del navegador.
let botonConsola = document.getElementById("consola");

botonConsola.addEventListener('click', function () {
    console.log("Hola, hiciste click en el botón");
})

// 1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un escuchador de eventos para que cuando 
// se pase el mouse sobre el elemento, el color de fondo cambie.
let enlaceColor = document.getElementById("color");

enlaceColor.addEventListener('mousemove', function () {
    enlaceColor.style.backgroundColor  = "green"
})

// 1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la 
// ventana del navegador, muestre en algún elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador 
// y respecto a la página.
let documentoEntero = document.body;
let parrafoPosicion = document.getElementById("posicion");

documentoEntero.addEventListener('mousemove', function (event){
    let x = event.clientX;
    let y = event.clientY;
    parrafoPosicion.innerHTML = "X coords:" + x + ", Y coords: " + y;
})


// Ejercicio 2: Escuchar eventos de teclado
// 2.1. Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con 
// el nombre de la tecla pulsada y su código.
documentoEntero.addEventListener('keydown', function(event) {
    alert(event.key)
})

// 2.2. Prueba el escuchador de eventos con diferentes teclas para verificar que muestra correctamente el nombre y el código de la tecla pulsada.
// Junto al 2.1.


// Ejercicio 3: Captura y Propagación
// 3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. Agrega un escuchador de eventos al elemento <ul> para que 
// cuando se haga clic en cualquier elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento clickeado.
let listaDesordenada = document.querySelector("ul");

listaDesordenada.addEventListener('click', function(event) {
    console.log("Acabas de hacer click en " + event.target.innerText);
})

// 3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado. 
// Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".
// Por hacer
let listaDesordenada2 = document.getElementById('lista');
lista.addEventListener('click', function(event) {
    // Verificamos si el elemento clickeado es un <li>
    if (event.target.tagName === 'LI') {
      var nivel = 1;
      var elementoPadre = event.target.parentElement;

      // Contamos la cantidad de niveles ascendentes hasta el elemento <ul>
      while (elementoPadre.tagName !== 'UL') {
        nivel++;
        elementoPadre = elementoPadre.parentElement;
    }

      // Mostramos el nivel en la consola
      console.log('Clickeaste en un elemento de nivel', nivel);
    }
});

// Ejercicio 4: Eventos de formulario
// 4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario. 
// Cuando se haga clic en el botón, valida que los campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página 
// en función de la validación.
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensajeElemento = document.getElementById('mensaje');

    if (nombre === '' || email === '') {
      mensajeElemento.textContent = 'Error: Por favor, completa todos los campos.';
      mensajeElemento.style.color = 'red';
    } else {
      mensajeElemento.textContent = 'Éxito: Formulario enviado correctamente.';
      mensajeElemento.style.color = 'green';
    }

    var eventoEnviado = new Event('formularioEnviado');
    document.dispatchEvent(eventoEnviado);
}

// 4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito. 
// Escucha este evento y muestra un mensaje personalizado en la consola cuando se dispare.
document.addEventListener('formularioEnviado', function() {
    console.log('¡El formulario ha sido enviado con éxito!');
});

// Ejercicio 5: Eventos personalizados
// 5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().
var miEvento = new CustomEvent('miEvento', {
    detail: {
      mensaje: 'Este es mi evento personalizado'
    },
    bubbles: true,
    cancelable: true
});

  // Disparar el evento en un elemento específico o en el documento
  // Ejemplo de disparo en el documento:
document.dispatchEvent(miEvento);

  // Escuchar el evento personalizado
document.addEventListener('miEvento', function(event) {
    console.log('Evento personalizado disparado:', event.detail.mensaje);
});

// 5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar un mensaje de alerta cuando ocurra.
var miBoton = document.getElementById('miBoton');
miBoton.addEventListener('click', function() {
  document.dispatchEvent(miEvento);
});

// 5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta.
document.dispatchEvent(miEvento);