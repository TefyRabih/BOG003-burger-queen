import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../../../core/shared/services/summary.service'
// import { Options } from '../../../../interfaces/menu.interface'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  finalOrder$ = this.summarySvc.finalOrder$;
  totalOrder$ = this.summarySvc.totalAction$;

  //item!: Options;

  constructor(private summarySvc: SummaryService) { }

  ngOnInit(): void {
  }

  lessItem(dataID: any): void {
    this.summarySvc.lessProduct(dataID.getAttribute('data-id'))
    //this.summarySvc.lessProduct(event.srcElement.attributes.id.value)
    //console.log(dataID.getAttribute('data-id'));
  }

  deleteItem(dataID: any): void {
    this.summarySvc.deleteProduct(dataID.getAttribute('data-id'))
    //console.log(dataID.getAttribute('data-id'));
  }
//
}
