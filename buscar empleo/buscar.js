// Detectar la carga del documento y mostrar el nombre del archivo en la interfaz
document.getElementById('archivoCv').addEventListener('change', function(e) {
    const ayudaTexto = document.querySelector('.ayuda-archivo');
    
    if (this.files && this.files.length > 0) {
        const nombreArchivo = this.files[0].name;
        ayudaTexto.innerHTML = `✅ <strong>Archivo seleccionado:</strong> ${nombreArchivo}`;
        ayudaTexto.style.color = '#28a745'; // Cambia el texto a verde indicando éxito
    } else {
        ayudaTexto.innerHTML = '📁 Hacé clic para seleccionar tu archivo PDF (Tamaño máximo recomendado: 5MB)';
        ayudaTexto.style.color = '#0057b8';
    }
});

// Procesar el envío de todos los datos recopilados en el formulario
document.getElementById('formBuscarEmpleo').addEventListener('submit', function(e) {
    e.preventDefault(); // Detiene la recarga de página por defecto

    const nombre = document.getElementById('nombreCompleto').value;
    const barrio = document.getElementById('barrio').value;
    const inputCv = document.getElementById('archivoCv');
    
    // Validamos si adjuntó o no el PDF para personalizar la respuesta
    let mensajeCv = "Tu perfil fue registrado sin CV adjunto.";
    if (inputCv.files && inputCv.files.length > 0) {
        mensajeCv = `Tu CV (${inputCv.files[0].name}) ha sido adjuntado correctamente.`;
    }

    // Alerta integrada de confirmación
    alert(`¡Excelente, ${nombre}!\n\n${mensajeCv}\nTu perfil se guardó con éxito en la zona de ${barrio}.\n\nPróximamente te enviaremos las ofertas laborales cercanas que mejor se adapten a tus necesidades.`);
    
    // Reseteamos el formulario y restauramos el texto original del cargador de archivos
    document.getElementById('formBuscarEmpleo').reset();
    const ayudaTexto = document.querySelector('.ayuda-archivo');
    ayudaTexto.innerHTML = '📁 Hacé clic para seleccionar tu archivo PDF (Tamaño máximo recomendado: 5MB)';
    ayudaTexto.style.color = '#0057b8';
});