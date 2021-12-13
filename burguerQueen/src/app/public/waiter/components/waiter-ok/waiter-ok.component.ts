import { Component, Input, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-waiter-ok',
  templateUrl: './waiter-ok.component.html',
  styleUrls: ['./waiter-ok.component.css']
})
export class WaiterOkComponent implements OnInit {

  @Input() item!: Orders;

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
  }

  onClick(item: Orders): void{
    this.orderService.editDelivered(item.id)
  }

}
