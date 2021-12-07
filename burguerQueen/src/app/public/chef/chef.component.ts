import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  arrayData!: Orders[];

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
    this.getDataOrders();
  }

  getDataOrders(): void{     
    this.orderService.dataOrders$
    .subscribe(
      response => {
       console.log('data de order',response);
       this.arrayData = response;
      },
      error => console.log(error)
    )
  }
}
