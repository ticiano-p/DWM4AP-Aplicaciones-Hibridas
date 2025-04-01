import chalk from 'chalk';
import express from 'express';
import ProductManger from"./ProductManager.js";

const admin = new ProductManger();
const port = 5000
const app= express()
let body = "";
app.get('/',(request,response)=>{
console.log('Ruta Raiz');
response.send('Home')
})

app.get('/productos', async (request,response)=>{
    const lista = await admin.getProducts(); // Esperamos los productos
    lista.forEach(e=>{
        body+=`
         <h1>ID: ${e.id}</h1>
         <p>Nombre: ${e.name}</p>
         <p>Precio: $${e.price}</p>
        `
    })
    response.send(body)
    })
    app.get('/productos/:id', async (request,response)=>{
        const id = request.params.id; 
        const productid = await admin.getProductById(id); 
        if (productid && Object.keys(productid).length > 0) {
            let body = `
            <h1>ID: ${productid.id}</h1>
            <p>Nombre: ${productid.name}</p>
            <p>Precio: $${productid.price}</p>
        `;
        response.send(body)
            
        }else{
            return response.status(404).json({ error: "Producto no encontrado" });
        }
        
        
        })
app.post('/productos',(request,response)=>{
    console.log('post');

    response.json({id:2})
        })
app.listen(port,()=>{
 console.log(chalk.green('SERVER 1'));   
})


