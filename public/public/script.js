function generar() {
  const idea = document.getElementById("idea").value;

  const html = `
  <html>
  <head>
    <style>
      body { margin:0; font-family: Arial; }
      .hero {
        padding: 80px;
        background: linear-gradient(135deg,#020617,#1e293b);
        color: white;
        text-align: center;
      }
      .section {
        padding: 60px;
        text-align: center;
      }
      img {
        width: 300px;
        border-radius: 12px;
      }
    </style>
  </head>
  <body>
    <div class="hero">
      <h1>${idea}</h1>
      <p>Diseño generado automáticamente</p>
    </div>

    <div class="section">
      <h2>Producto destacado</h2>
      <img src="https://images.unsplash.com/photo-1523293836414-f04e712e1c79">
      <p>Contenido generado para ${idea}</p>
    </div>
  </body>
  </html>
  `;

  document.getElementById("preview").srcdoc = html;
}
