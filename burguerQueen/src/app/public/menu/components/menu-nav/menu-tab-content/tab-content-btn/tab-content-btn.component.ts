import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from 'src/app/intefaces/menu.interface';

@Component({
  selector: 'app-tab-content-btn',
  templateUrl: './tab-content-btn.component.html',
  styleUrls: ['./tab-content-btn.component.css']
})
export class TabContentBtnComponent implements OnInit {
  @Input() op!: Options;
  @Output() addToSummaryClick = new EventEmitter<Options>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
  this.addToSummaryClick.emit(this.op);
  
  }

}
