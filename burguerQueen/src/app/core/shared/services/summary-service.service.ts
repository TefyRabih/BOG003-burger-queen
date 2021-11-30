import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Options } from 'src/app/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})

export class SummaryService {
  summary: Options[] = [];

  private orderSubject = new BehaviorSubject<Options[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);

  get finalOrder$(): Observable<Options[]>{
    return this.orderSubject.asObservable();
  }

  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }

  updateSummary(option: Options): void{
    this.addToSummary(option);
    this.calcTotal();
  }

  private addToSummary(option: Options): void{
    const existingPrduct = this.summary.find(({id}) => id === option.id);
    if(existingPrduct){
      existingPrduct.qty += 1;
    }else{
      this.summary.push({...option, qty: 1})
    }
    this.orderSubject.next(this.summary)
  }

  private calcTotal(): void {
    const total = this.summary.reduce((acc, el) => acc += (el.price * el.qty), 0);
    this.totalSubject.next(total);
  }

  deleteAll(): void {
    this.orderSubject.next([]);
    this.totalSubject.next(0);
    this.summary = [];
  }

  lessProduct(id: string): void {
    this.summary.forEach(el => {
      if(el.id === id){
        el.qty -= 1;
      }
    })

    this.orderSubject.next(this.summary)
    this.calcTotal();

    this.summary.forEach(el => {
      if(el.qty === 0){
        this.deleteProduct(id);
      }
    })
  }

  deleteProduct (id: string): void {
    const newSummary = this.summary.filter(el => id !== el.id);
    this.orderSubject.next(newSummary);
    this.summary = newSummary;
    this.calcTotal();
  }

  constructor() {}
}
