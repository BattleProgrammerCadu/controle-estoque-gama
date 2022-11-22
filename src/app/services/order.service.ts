import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  
  private static order: Order;

  public static createOrder(clientId: Cliente): void{
    this.order = new Order(clientId);
  }

  public static addProduct(product: Product): void{
    this.order.itens.push(product);
  }
  
  public static getOrder(): Order{
    return this.order;
  }
}
