// importamos el módulo
const {ProductManger } = require('./ProductManger.js');
const admin = new ProductManger()
const id = crypto.randomUUID();

admin.addProduct({id, name: 'Celu', price:2344});
const json = admin.getProducts();
console.log("📦 Productos almacenados:", JSON.stringify(json, null, 2));

