import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/interfaces/menu.interface';

import { SummaryService } from 'src/app/core/shared/services/summary-service.service';
import { MenuService } from 'src/app/public/services/menu.service';

import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  menuData!: Menu[];
  finalOrder$ = this.summarySvc.summaryAction$;

  constructor(private dataService:MenuService, private summarySvc:SummaryService) { }

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

  onClickCancel(): void{
    this.summarySvc.reset();
  }

  send(): void{
    this.finalOrder$
    .pipe(tap(res => console.log(res)))
    .subscribe();
  }
}
