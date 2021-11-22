import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/core/shared/services/summary-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  finalOrder$ = this.summarySvc.summaryAction$;
  totalOrder$ = this.summarySvc.totalAction$;

  constructor( private summarySvc:SummaryService) {}
  
  ngOnInit(): void {
  }

  onClickDelete(id:any): void{
    this.summarySvc.deleteProduct(id.getAttribute("data-id"));
  }

  onClickLess(id:any): void{
    this.summarySvc.lessProduct(id.getAttribute("data-id"));
  }


}
