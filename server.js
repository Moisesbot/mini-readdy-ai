const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🤖 Aromashop AI</h1>
    <p>Hola, soy tu IA creadora de páginas y tiendas online.</p>
    <p>Pronto podré hablar contigo y crear webs automáticamente.</p>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto " + PORT);
});
