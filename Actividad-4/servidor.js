const http = require("http");
const port = 3000;
const { ProductManger } = require("./ProductManager.js");
const admin = new ProductManger();
let ID = "883511b8-6f67-4666-b9eb-f577d4b4664f";
const server = http.createServer(async (request, response) => {
  const url = request.url;
  let body = "";
  let status = 0;
  if (url == "/") {
    body = "<h1>Bienvenido </h1>";
    status = 200;
  } else if (url == "/products") {
    body = "<h1> Lista de Productos: </h1><ul>"; // Comenzamos una lista HTML
    try {
      const list = await admin.getProducts(); // Esperamos los productos
      list.forEach((e) => {
        body += `<li>
                         <strong>ID:</strong> ${e.id}</li> 
                         <br>
                         <strong>Nombre:</strong> ${e.name} 
                         <br> 
                         <strong>Precio:</strong> $${e.price} 
                         <br><hr>`;
      });
      body += "</ul>";

      const listId = await admin.getProductById(ID); // Esperamos los productos
      if (listId && Object.keys(listId).length > 0) {
        body += `<h2> Producto con ID: ${listId.id}</h2>
                 <ul>
                    <li><strong>ID:</strong> ${listId.id}</li>
                    <li><strong>Nombre:</strong> ${listId.name}</li>
                    <li><strong>Precio:</strong> $${listId.price}</li>
                 </ul>`;
      } else {
        body += `<h2> El ID: ${ID} es inexistente</h2>`;
      }
      console.log(listId);
      
      // Cerramos la lista HTML
      status = 200;
    } catch (error) {
      body = "<h1>Error al obtener productos</h1>";
      status = 500;
      console.error(error);
    }
  } else if (url == "/login") {
    body = "<h1> Login </h1>";
    status = 200;
  } else {
    status = 404;
    body = "<h1> Página no encontrada</h1>";
  }

  response.writeHead(status, { "Content-Type": "text/html" });
  response.end(body);
});

server.listen(port, () => {
  console.log(`Servidor web corriendo en el puerto ${port}`);
});
