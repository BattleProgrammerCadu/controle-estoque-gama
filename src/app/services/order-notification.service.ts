import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ClienteService } from './ClienteService';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderNotificationService {
  
  constructor(
    public clienteService: ClienteService
  ) { 
      this.updateOrderItens();
  }

  public orderItens:Number = 0

  teste: Cliente = {id: 15, nome: 'Teste'}

  public updateOrderItens(){
    if(OrderService.getOrder()){
      console.log(OrderService.getOrder());
    }else{
      OrderService.createOrder(this.teste);
    }
    this.orderItens = OrderService.getOrder().itens.length
    console.log(OrderService.getOrder(), this.teste)
    }
  }
