import { Component, Input, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() el!: Orders;
  constructor() { }

  ngOnInit(): void {
  }

}
