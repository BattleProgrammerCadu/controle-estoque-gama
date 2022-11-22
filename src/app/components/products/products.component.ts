import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { OrderNotificationService } from 'src/app/services/order-notification.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor( public orderNotification: OrderNotificationService ) { }

  ngOnInit(): void {
    this.products = ProductService.list();
  }

  purchase(product :Product){
      OrderService.addProduct(product);
      this.orderNotification.updateOrderItens();
  }
}
