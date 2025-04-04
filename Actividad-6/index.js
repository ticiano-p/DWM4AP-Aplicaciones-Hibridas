import chalk from 'chalk';
import express from 'express';
import ProductManger from"./ProductManager.js";

const admin = new ProductManger();
const port = 5000
const app= express()
app.use(express.json())

app.get('/',(request,response)=>{
console.log('Ruta Raiz');
response.send('Home')
})

app.get('/productos', async (request,response)=>{
    const lista = await admin.getProducts(); // Esperamos los productos
   
    console.log(lista);
    
    response.send(lista)
    })
    
    app.get('/productos/:id', async (request,response)=>{
        const id = request.params.id; 
        const productid = await admin.getProductById(id); 
        if (productid && Object.keys(productid).length > 0) {
        
        response.send(productid)
        }else{
            return response.status(404).json({ error: "Producto no encontrado" });
        }
        })

    app.post('/productos',async (request,response)=>{
        const produc = request.body;
        console.log(produc);
        const id = await admin.addProduct(produc)
        response.json({id})
        })

    app.delete('/productos/:id', async (request, response) => {
            const id = request.params.id;
            const status = await admin.deletProductBid(id);
            if (status) {
                response.json( {msg: `Producto con el ID:${id} eliminado`} );
            } else {
                response.status(404).json({msg: `No se encontro el Producto con el id: ${id}`});
            }
        })

    app.put('/productos/:id', async (request, response) => {
            const id = request.params.id;
            const produc = request.body;
            const status = await admin.updateProductByid(id, produc );
            
            if ( status !== null) {
                response.json( {msg: `Producto con el ID:${id} modificado`});
            } else {
                response.status(404).json({msg: `No se encontro el Producto con el id: ${id}`});
            }
        }) 


app.listen(port,()=>{
 console.log(chalk.green('SERVER 1'));   
})


