import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/public/services/menu.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  menuData: any;
  lunchData: any;
  breakfastData: any;
  sideDishData: any; 

  constructor(private dataService:MenuService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe(
      response => {
        this.menuData = response;
        this.lunchData = this.menuData[0];
        this.breakfastData = this.menuData[1];
        this.sideDishData = this.menuData[2];
        console.log(this.lunchData);
        console.log(this.breakfastData);
        console.log(this.sideDishData);     
      },
      error => console.log(error)
          
    )
    
  }
}
