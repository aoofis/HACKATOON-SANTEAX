document.getElementById("formEmpleo").addEventListener("submit", function(event) {
    // Evita que la página se recargue automáticamente
    event.preventDefault();

    // Capturamos los valores ingresados por el usuario
    const empresa = document.getElementById("empresa").value;
    const puesto = document.getElementById("puesto").value;
    const zona = document.getElementById("zona").value;

    // Mensaje de éxito
    alert(`¡Muchas gracias!\nLa oferta para el puesto de "${puesto}" en "${empresa}" (${zona}) ha sido enviada para revisión y será publicada pronto.`);

    // Redirecciona al inicio tras aceptar el alert
    window.location.href = "inicio.html";
});