import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'src/app/interfaces/menu.interface';
import { FireStoreService } from '../../core/shared/services/fire-store.service';
import { Orders } from '../../interfaces/orders.interface'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  costumerData!: Orders[];

  constructor( private orderService: FireStoreService, private router: Router ) { }

  ngOnInit(): void {
    this.orderService.getCustomerData(this.orderService.currentID);
    this.getCustomerData();
  }

    /*getCurrentId(): void{
      console.log(this.orderService.currentID)
    }*/

    getCustomerData(): void{

      
      this.orderService.customer$
      .subscribe(
        response => {
          this.costumerData = response;
        },
        error => console.log(error)
      )
    }

    createOrder(order: Options[]):void{
      this.orderService.insertOrder(this.orderService.currentID, order)
      this.router.navigate(['home'])
    }
}
