const express = require('express');
const app = express();
const port = 3000;


app.use('/assets', express.static('src/assets'));

app.get('/medicos', (req, res) => {
  res.sendFile(__dirname + '/src/assets/medicos.json');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
