import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/clases/items';
import { Menu } from 'src/app/clases/menu';
import { MenuService } from 'src/app/public/services/menu.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  menuData!: Menu[];

  constructor(private dataService:MenuService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe(
      response => {
        this.menuData = response;     
      },
      error => console.log(error)
          
    ) 
  }
}
