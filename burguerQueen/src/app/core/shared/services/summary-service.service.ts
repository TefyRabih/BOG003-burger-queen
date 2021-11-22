import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Options } from 'src/app/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  summary: Options[] = [];

  private summarySubject = new BehaviorSubject<Options[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);

  get summaryAction$(): Observable<Options[]> {
    return this.summarySubject.asObservable();
  }

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  private addToSummary(option: Options): void {
    const existingProduct = this.summary.find(({id}) => id === option.id);
    if (existingProduct){
      existingProduct.qty += 1;
    }else{
      this.summary.push({ ...option, qty: 1})
    }
    this.summarySubject.next(this.summary);
  }

  private calcTotal():void {
    const total= this.summary.reduce((acc, el)=> acc += (el.price * el.qty), 0);
    this.totalSubject.next(total);
  }

  updateSummary(option:Options):void{
    this.addToSummary(option);
    this.calcTotal();
  }

  reset():void{
    this.totalSubject.next(0);
    this.summarySubject.next([]);
    this.summary = [];
  }

  deleteProduct(id:string): void{
    const newSummary = this.summary.filter(e => e.id !== id)
    this.summarySubject.next(newSummary);
    this.summary = newSummary;
    this.calcTotal();
  }

  lessProduct(id:string): void{
    this.summary.forEach( e =>{
      if( e.id === id){
        e.qty -= 1
      }
    })
    this.calcTotal();
  }

  constructor() {}
}
