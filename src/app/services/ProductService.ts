import { Product } from "../models/Product";

export class ProductService{
    
    private static productList: Product[] = [{
        id: 55,
        nome: 'Chainsaw Man',
        descricao: 'é um mangá japonês escrito e ilustrado por Tatsuki Fujimoto',
        preco: 60
    }];


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