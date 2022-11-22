import { Cliente } from "./Cliente";
import { Product } from "./Product";

export class Order{
    public id: Number;
    public idCliente : Cliente;
    public itens:Product[] = [] ;
    public orderDate: Date; 

    constructor(clientId: Cliente){
        this.id = 1;
        this.idCliente = clientId;
        this.orderDate = new Date();
        this.itens = [];
    }

    public total(): number{
        let sum = 0;
        this.itens.map(product => {
            sum += product.preco;
        });
        return sum;
    }

    
}

