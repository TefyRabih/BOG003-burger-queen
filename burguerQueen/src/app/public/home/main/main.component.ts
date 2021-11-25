import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../../core/shared/services/fire-store.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orderGroup!: FormGroup;

  constructor(private orderService: FireStoreService) { 
   // this.orderGroup = this.createFormGroup();
  }
 
  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
  this.orderGroup = new FormGroup({
      customerName: new FormControl (''),
      table: new FormControl ('')

    });
  }

  onSubmit(){
    console.log(this.orderGroup.controls.table.value);   
  }

}
