import { Component, Input, OnInit } from '@angular/core';

import { SummaryService } from '../../../../../core/shared/services/summary.service'
import { Menu } from 'src/app/interfaces/menu.interface';
import { Options } from 'src/app/interfaces/menu.interface';



@Component({
  selector: 'app-menu-tab-content',
  templateUrl: './menu-tab-content.component.html',
  styleUrls: ['./menu-tab-content.component.css']
})
export class MenuTabContentComponent implements OnInit {
@Input() e!:Menu;

constructor( private summarySvc:SummaryService) {}
  ngOnInit(): void {
  }

  addToSummary(option: Options): void {
    this.summarySvc.updateSummary(option);
  }
}
