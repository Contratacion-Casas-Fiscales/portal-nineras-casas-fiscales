// Lógica del Buscador de Trámite
function consultarTramite() {
    const documento = document.getElementById('documento').value.trim();
    const resultado = document.getElementById('resultado-consulta');

    if (!documento) {
        resultado.innerHTML = `<span style="color:#c53929;">⚠️ Por favor ingresa tu número de documento.</span>`;
        return;
    }

    // Estados predefinidos como acordamos
    const estados = [
        "✅ Recibido",
        "⏳ En evaluación",
        "✔️ Aprobado",
        "📋 En verificación de antecedentes",
        "📌 Citación a entrevista"
    ];

    // Simulación de respuesta (luego puedes conectarlo a tu base de datos)
    const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)];
    
    resultado.innerHTML = `
        <div style="background:#E8F5E9; padding:12px; border-left:4px solid #0B4619;">
            <strong>Número de Documento:</strong> ${documento}<br>
            <strong>Estado actual:</strong> ${estadoAleatorio}<br>
            <em>Última actualización: ${new Date().toLocaleDateString()}</em>
        </div>
    `;
}
