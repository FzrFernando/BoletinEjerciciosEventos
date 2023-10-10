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
    enlaceColor.style.backgroundColor  = "red"
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
// 2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con 
// el nombre de la tecla pulsada y su código.
