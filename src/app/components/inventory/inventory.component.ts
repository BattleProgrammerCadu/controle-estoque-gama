import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  idCount: number = 1;
  product: Product = {} as Product;
  productSet: Number = 0;

  @Input() products: Product[] = [];
  @Output() productsChange = new EventEmitter();

  

  constructor() {
   }

  ngOnInit(): void {
    this.products = ProductService.list();
  }

  add(): void{
    this.idCount++;
    let newProduct: Product = {
      id: this.idCount,
      nome: this.product.nome,
      descricao: this.product.descricao,
      preco: Number(this.product.preco)
    }
    ProductService.add(newProduct);
  }

  remove(productId: Number): void{
   let result = ProductService.remove(productId);
   this.products = result;
   this.productsChange.emit(this.products)
   
  }

  update(product: any): void{
    ProductService.update(product, {id:product, nome:this.product.nome, descricao: this.product.descricao, preco:this.product.preco});
    this.productSet = 0;
  }

  setProduct(productId: Number): void{
    this.productSet = productId;
    this.products.map(product => {
      if (product.id === productId){
        this.product.nome = product.nome;
        this.product.descricao = product.descricao;
        this.product.preco = product.preco;
      }
    })
  }
}
