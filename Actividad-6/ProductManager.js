import fs from 'fs/promises' ;
const path = './products.json';

class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    } 
    randomID(){
        return crypto.randomUUID();
    }
    async addProduct(product){
        await this.getProducts();
        product.id = this.randomID();
        this.products.push( product);
        
        const data = JSON.stringify( this.products, null, 2);
        try {
            await fs.writeFile( path, data );
            return product.id;
        } catch (error) {
            console.error(error);
        }
    }
    async getProducts(){
        try {
            const data = await fs.readFile(path);
            this.products = JSON.parse( data);
            return this.products;
        } catch (error) {
            console.error(error);
        }
    }

    async getProductById(id){
        const products = await this.getProducts();
        const product = products.find(  item => item.id == id  );
        return product ? product : {};
    }

    async deletProductBid(id){
       await this.getProducts();
       const posision = this.products.findIndex(u=> u.id == id)
       if (posision === -1) {
        return null; 
    }
       this.products.splice(posision, 1)

       const data = JSON.stringify( this.products, null, 2);
        try {
            await fs.writeFile( path, data );
            return id;
        } catch (error) {
            console.error(error);
        }

    }

    async updateProductByid(id, product){
       await this.getProducts();
       const posision = this.products.findIndex(u=> u.id == id)
       if (posision === -1) {
        return null; 
    }
       this.products[posision].name= product.name
       this.products[posision].email= product.email
       const data = JSON.stringify( this.products, null, 2);
       try {
            await fs.writeFile( path, data );
            return id;
           } catch (error) {
            console.error(error);
           }
    }
}


export default ProductManger;


