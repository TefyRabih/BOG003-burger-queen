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

  // carga inicial
  ngOnInit(): void {
    this.getData();
    this.getOrderOptions();    
  }

  // Obtiene data de json
  getData() {
    this.dataService.getData().subscribe(
      response => {
        this.menuData = response;
      },
      error => console.log(error)
    )
    
  }
  // obtiene data de resumen
  getOrderOptions(){
    this.summarySvc.finalOrder$.subscribe(
      res =>{
        this.orderOptions = res
      },
      error => console.log(error)
    )
  }
  // elimina data local del resumen
  onClickDeleteAll(): void {
    this.summarySvc.deleteAll();
  }
  // Envia data de resumen al padre menu-component 
  send(): void {
    this.createOrderClick.emit(this.orderOptions)
    this.summarySvc.deleteAll();
  }

}