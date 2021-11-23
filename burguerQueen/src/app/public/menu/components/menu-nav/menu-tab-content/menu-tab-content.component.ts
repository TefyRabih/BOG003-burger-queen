import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Options, Menu } from 'src/app/interfaces/menu.interface';
import { SummaryService } from 'src/app/core/shared/services/summary-service.service';
=======
import { SummaryService } from '../../../../../core/shared/services/summary.service'
import { Menu } from 'src/app/interfaces/menu.interface';
import { Options } from 'src/app/interfaces/menu.interface';
>>>>>>> pruebas


@Component({
  selector: 'app-menu-tab-content',
  templateUrl: './menu-tab-content.component.html',
  styleUrls: ['./menu-tab-content.component.css']
})
export class MenuTabContentComponent implements OnInit {
@Input() e!:Menu;
<<<<<<< HEAD
=======
  constructor(private summarySvc: SummaryService) { }
>>>>>>> pruebas

constructor( private summarySvc:SummaryService) {}
  ngOnInit(): void {
  }

<<<<<<< HEAD
  addToSummary(option:Options):void{
=======
  addToSummary(option: Options): void {
>>>>>>> pruebas
    this.summarySvc.updateSummary(option);
  }
}
