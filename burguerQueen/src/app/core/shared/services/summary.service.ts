import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Options } from '../../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summary: Options[] = [];
  // variable que aloja el array de objetos del resumen
  private orderSubject = new BehaviorSubject<Options[]>([]);
  // variable que aloja el precio total del resumen
  private totalSubject = new BehaviorSubject<number>(0);

  // Metodo que permite obtener la data del resumen
  get finalOrder$(): Observable<Options[]>{
    return this.orderSubject.asObservable();
  }
  
  //Metodo que Permite obtener el valor total del resumen
  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }

  // Metodo que permite hacer el llamado de las funciones que lo contienen en un componente 
  updateSummary(option: Options): void{
    this.addToSummary(option);
    this.calcTotal();
  }

  // Metodo que permite adicionar producto segun su id
  private addToSummary(option: Options): void{
    const existingPrduct = this.summary.find(({id}) => id === option.id);
    if(existingPrduct){
      existingPrduct.qty += 1;
    }else{
      this.summary.push({...option, qty: 1})
    }
    this.orderSubject.next(this.summary)
  }

  // Metodo que permite calcular el precio total del resumen
  private calcTotal(): void {
    const total = this.summary.reduce((acc, el) => acc += (el.price * el.qty), 0);
    this.totalSubject.next(total);
  }

  //Metodo que permite eliminar y reiniciar la data del resumen
  deleteAll(): void {
    this.orderSubject.next([]);
    this.totalSubject.next(0);
    this.summary = [];
  }

  // Metodo que permite restar -1 el valor a la cantidad
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
  
  // Metodo que permite eliminar un producto especifico por su Id
  deleteProduct (id: string): void {
    const newSummary = this.summary.filter(el => id !== el.id);
    this.orderSubject.next(newSummary);
    this.summary = newSummary;
    this.calcTotal();
  }

}

