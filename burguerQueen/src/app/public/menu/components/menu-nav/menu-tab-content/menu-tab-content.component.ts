import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/clases/menu';
import { Options } from 'src/app/clases/items';


@Component({
  selector: 'app-menu-tab-content',
  templateUrl: './menu-tab-content.component.html',
  styleUrls: ['./menu-tab-content.component.css']
})
export class MenuTabContentComponent implements OnInit {
@Input() e!:Menu;
  constructor() { }

  ngOnInit(): void {
  }
  addToSummary(option:Options): void {
    console.log('padre: ', option);
    
  }
}
