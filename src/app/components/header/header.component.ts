import { Component, OnInit } from '@angular/core';
import { OrderNotificationService } from 'src/app/services/order-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public orderNotification: OrderNotificationService) { }

  ngOnInit(): void {
  }

}
