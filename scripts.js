/*----CREAR INVENTARIO---*/
document.getElementById('tipo-item').addEventListener('change', function() {
    var medicamentoFields = document.getElementById('campos-medicamento');
    var lenteFields = document.getElementById('campos-lente');
    if (this.value === 'medicamento') {
        medicamentoFields.classList.remove('hidden');
        lenteFields.classList.add('hidden');
    } else if (this.value === 'lente') {
        lenteFields.classList.remove('hidden');
        medicamentoFields.classList.add('hidden');
    } else {
        medicamentoFields.classList.add('hidden');
        lenteFields.classList.add('hidden');
    }
});

/*---GENERAR FACTURA----*/
        // Función para actualizar la vista previa de la factura
        function actualizarVistaPrevia() {
            const paciente = document.getElementById('paciente').value;
            const fecha = document.getElementById('fecha').value;
            const servicio = document.getElementById('servicio').value;
            const monto = document.getElementById('monto').value;
            const metodoPago = document.getElementById('metodo-pago').value;
            const notas = document.getElementById('notas').value;

            const previewContent = `
                <h3>Factura</h3>
                <p><strong>Paciente:</strong> ${paciente}</p>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <p><strong>Servicio:</strong> ${servicio}</p>
                <p><strong>Monto:</strong> $${monto}</p>
                <p><strong>Método de Pago:</strong> ${metodoPago}</p>
                <p><strong>Notas:</strong> ${notas}</p>
            `;

            document.getElementById('preview-factura').innerHTML = previewContent;
        }

        // Eventos para actualizar la vista previa
        document.getElementById('paciente').addEventListener('input', actualizarVistaPrevia);
        document.getElementById('fecha').addEventListener('input', actualizarVistaPrevia);
        document.getElementById('servicio').addEventListener('input', actualizarVistaPrevia);
        document.getElementById('monto').addEventListener('input', actualizarVistaPrevia);
        document.getElementById('metodo-pago').addEventListener('change', actualizarVistaPrevia);
        document.getElementById('notas').addEventListener('input', actualizarVistaPrevia);

        // Evento para el botón de generar PDF
        document.getElementById('generar-pdf').addEventListener('click', function() {
            alert('Generando PDF de la factura...');
            // Aquí iría la lógica para generar el PDF
        });

        // Evento para el botón de generar enlace de pago
        document.getElementById('generar-enlace').addEventListener('click', function() {
            alert('Generando enlace de pago...');
            // Aquí iría la lógica para generar el enlace de pago
        });