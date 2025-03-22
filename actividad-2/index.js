const {ProductManger} = require('./ProductManager ');
const ProducManager = new ProductManger()

ProducManager.addProduct({ id: 3031, name: 'Smartphone Samsung A54', category: 'Celulares', price: "$320.000" },

    )
let ProductosMostrar = ProducManager.getProducts();
console.log( ProductosMostrar );
id=6066
let ProductosId = ProducManager.getProductById(id);
console.log(`Producto con el id: ${id}`)

console.log(ProductosId)

 