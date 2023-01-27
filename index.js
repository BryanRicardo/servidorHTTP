//Servidor HTTP Server

//Parametros iniciales
const http = require('http')

//Puerto
const PORT = 358

//Iniciar servicio web
const server = http.createServer((req, res) => 
{
    res.statusCode = 200//cODIGO DE RESPUESTA HTML
    res.setHeader('Content-Type', 'text/html')//Fotrmato en la que se dara la respuesta
    res.end('<h1>Hola: Malotru</h1>')//Lo que se mostrara cusndo se mande llamar
})

//Como dejar que se encuentre escuchando
//Puerto escucha, esto es mostrado en la terminal o las herrameintas de desarrollador en el navegador
server.listen(PORT, () =>
{
    console.log(`Servidor al escucha: ${PORT}`)
    //console.log('Servidor al escucha:'+PORT)//Segunda forma
})    

