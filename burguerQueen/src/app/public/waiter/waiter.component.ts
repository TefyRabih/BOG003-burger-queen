import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  arrayData!: Orders[];
  
  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
    this.getDataOrders()    
  }

  getDataOrders(): void{     
    this.orderService.dataOrders$
    .subscribe(
      response => {
       this.arrayData = response;

      },
      error => console.log(error)
    )
  }



}
