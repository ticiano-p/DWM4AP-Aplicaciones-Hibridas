const fs = require('fs')
const path = './packages.json';


class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    //{ name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
    addProduct(product){
        // debería validar los campos
        //  lee el JSON
        fs.readFile(path, 'utf-8',(err, data)=>{
            let products= []
            if (!err && data) {
                    products = JSON.parse(data);
            }
            // Agregar el nuevo producto a la lista
        products.push(product);
        
        const datas = JSON.stringify(products, null, 2); 
        fs.writeFile(path, datas, (err)=>{
            if (err) {
                console.log("Error al escribir el archivo:", err);
            } else {
                console.log("Producto agregado y datos actualizados");
                
            }
            })
            this.products.push(product)
        });
            }

     getProducts() {
        try {
            const data =  fs.readFileSync(path, 'utf-8');
            this.products = JSON.parse(data);
            
        } catch (error) {
            console.log (error) // Si hay error (archivo no existe), inicializamos con un array vacío
        }
        return this.products;

    }

    getProductById(id){
        const product = this.products.find(  item => item.id == id  );
        return product ? product : {};
    }
}

module.exports = { ProductManger }