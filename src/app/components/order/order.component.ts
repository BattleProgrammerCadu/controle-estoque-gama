import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ClienteService } from 'src/app/services/ClienteService';
import { OrderNotificationService } from 'src/app/services/order-notification.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public orderNotification: OrderNotificationService,
    
  ) { }

  ngOnInit(): void {
   
  }

  public productList: Product[] = OrderService.getOrder().itens;
  public clientOrder = OrderService.getOrder().idCliente;
  public total = OrderService.getOrder().total();
  
}
