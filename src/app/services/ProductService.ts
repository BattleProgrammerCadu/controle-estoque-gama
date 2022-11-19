import { Product } from "../interfaces/Product";

export class ProductService{
    
    private static productList: Product[] = [];

    public static list(): Product[]{
        return this.productList;
    }

    public static add(product: Product): void{
        this.productList.push(product);
    }

    public static remove(productId: Number): Product[]{
        const teste = this.productList.filter(product => product.id != productId);
        this.productList = [...teste];
        return this.productList;
    }

    public static update(productId: Number, newProduct: Product): any{
       const elemento = this.productList.findIndex(product => product.id == productId)
       this.productList[elemento] = newProduct;
    }
}