import { Component, Input, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // milliseconds!: number;

  @Input() item!: Orders;
  @Input() i!: number;  

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
  }

  onClick(item: Orders): void{
    console.log('que recibe en el click', this.orderService.editPreparation(item.id));  
    this.orderService.editPreparation(item.id);
  }
}
  