import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../../../core/shared/services/fire-store.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor(private orderService: FireStoreService) { }

  ngOnInit(): void {
  }

}
