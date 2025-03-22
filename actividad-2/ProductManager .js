class ProductManger {
    products = [{ id: 3030, name: 'Notebook Lenovo i5', category: 'Computadoras', price: "$750.000" },
                { id: 4044, name: 'Auriculares Sony WH-1000XM5', category: 'Audio', price: "$420.000" },
                { id: 5055, name: 'Consola PlayStation 5', category: 'Consolas', price: "$890.000" },
                { id: 6066, name: 'Monitor Dell 27"', category: 'Monitores', price: "$365.000" }
               ]
    addProduct(product) {
        if (!product.id || !product.name || !product.price || !product.category) {
            return `Todos los campos son obligatorios.`;
        }
        if (this.products.some(p =>p.id=== product.id)) {
            return `Error: El producto con ID ${product.id} ya existe.`;
        }
     this.products.push(product)
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        const product=this.products.find(p =>p.id === id)
        return product ? product : '❌ Not found';
        
    }
}
module.exports = { ProductManger }