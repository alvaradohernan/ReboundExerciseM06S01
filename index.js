const http = require('http');
http.createServer(function (req, res) {
    res.write('Bienvenidos'); // Escribe una respuesta al cliente.
    res.end(); // Final de la respuesta.
  }).listen(8080); // El objeto del servidor "escucha" del puerto 8080.

