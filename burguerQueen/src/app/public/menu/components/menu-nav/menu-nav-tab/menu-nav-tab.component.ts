import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/intefaces/menu.interface';

@Component({
  selector: 'app-menu-nav-tab',
  templateUrl: './menu-nav-tab.component.html',
  styleUrls: ['./menu-nav-tab.component.css']
})
export class MenuNavTabComponent implements OnInit {
  @Input() e!:Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
