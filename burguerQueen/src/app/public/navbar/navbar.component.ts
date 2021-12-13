import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  arrayDoneTrue: Orders[] = [];

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
    this.getDoneTrue();
  }
  
  getDoneTrue(): void{
    this.orderService.getDoneTrue()
    .subscribe(
      response => {
        this.arrayDoneTrue = response;
      },
      error => console.error(error)
      
    )
  }
}
