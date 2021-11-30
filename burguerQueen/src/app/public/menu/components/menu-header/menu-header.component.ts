import { Component, Input, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';
import { FireStoreService } from '../../../../core/shared/services/fire-store.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() el!: Orders;
  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
  }

}
