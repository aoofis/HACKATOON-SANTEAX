
document.addEventListener("DOMContentLoaded", function () {
    
    const btnOfrecer = document.getElementById('ofrecerBtn');

 
    if (btnOfrecer) {
        btnOfrecer.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert("¡Próximamente podrás publicar tus ofertas de empleo!");
        });
    } else {
        console.log("No se encontró el botón con el ID 'ofrecerBtn'");
    }
    
});