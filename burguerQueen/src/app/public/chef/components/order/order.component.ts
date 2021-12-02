import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  arrayData!: Orders[];  
  milliseconds!: number;

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
    this.getDataOrders();
  }

  getDataOrders(): void{     
    this.orderService.dataOrders$
    .subscribe(
      response => {
       this.arrayData = response;
       console.log('data de order',response);
       
      },
      error => console.log(error)
    )
  }


}
