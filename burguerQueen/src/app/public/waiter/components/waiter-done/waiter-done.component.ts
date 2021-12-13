import { Component, Input, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-waiter-done',
  templateUrl: './waiter-done.component.html',
  styleUrls: ['./waiter-done.component.css']
})
export class WaiterDoneComponent implements OnInit {

  @Input() item!: Orders;

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
  }

}
