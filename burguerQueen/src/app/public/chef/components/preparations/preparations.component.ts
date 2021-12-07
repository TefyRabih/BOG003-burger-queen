import { Component, Input, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {
  
  @Input() item!: Orders;

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void { 
  }

  onClick(item: Orders): void{
    this.orderService.editDone(item.id)
  }  
}
