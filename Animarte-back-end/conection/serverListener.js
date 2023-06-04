const express = require('express');
const mysqlConnection = require('./connectionServer');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors())

// Ruta de consulta
app.get('/', (req, res) => {
  const query = 'SELECT * FROM productosDePrueba LIMIT 10;'; // Reemplaza con tu consulta SQL real
  mysqlConnection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error al realizar la consulta' });
    } else {
      res.json(results);
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
