import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../../core/shared/services/fire-store.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      customerName: new FormControl ('', { validators: Validators.required }),
      table: new FormControl (null, { validators: Validators.required })
    });
  }

  onSubmit(){
    if (!this.orderGroup.valid) {
      console.log('error');
    } else {
      console.log(this.orderGroup.controls.table.value);
    }
  }

}
