import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { FireStoreService } from '../../../core/shared/services/fire-store.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  orderGroup!: FormGroup;

  constructor(private orderService: FireStoreService, private router: Router) {
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

  get customerName() {return this.orderGroup.get('customerName')}
  get table() {return this.orderGroup.get('table')}

  onResetForm(){
    this.orderGroup.reset()
  }

  onSubmit(){
    this.orderService.addOrder(this.orderGroup.value)
    this.onResetForm();
    this.router.navigate(['menu'])
  }

}
