import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu, Options } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/public/services/menu.service';
import { SummaryService } from 'src/app/core/shared/services/summary.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  
  menuData!: Menu[];
  orderOptions!: Options[];

  @Output() createOrderClick = new EventEmitter<Options[]>();

  constructor(
    private dataService: MenuService,
    private summarySvc: SummaryService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getOrderOptions();
  }

  getData() {
    this.dataService.getData().subscribe(
      response => {
        this.menuData = response;
      },
      error => console.log(error)
    )
  }

  getOrderOptions(){
    this.summarySvc.finalOrder$.subscribe(
      res =>{
        this.orderOptions = res;
      },
      error => console.log(error)
    )
  }

  onClickDeleteAll(): void {
    this.summarySvc.deleteAll();
  }

  send(): void {
    this.createOrderClick.emit(this.orderOptions)
  }

}