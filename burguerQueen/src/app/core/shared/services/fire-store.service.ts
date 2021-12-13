import { Injectable } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Orders } from '../../../interfaces/orders.interface';
import { Options } from '../../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})

export class FireStoreService {

  dataOrders$!: Observable<Orders[]>; 
  // private customer$ = new BehaviorSubject<any>([]);  
  private orders$: Observable<Orders[]>;
  private currentId!: string;
  private orderCollection:  AngularFirestoreCollection<Orders>;
  
  constructor(private afs: AngularFirestore) {
    //OrderBy permite ordenar la colección de manera desc de acuerdo a la entrada de date
    this.orderCollection = afs.collection<Orders>('orders', ref => ref.orderBy('date', 'desc'));
    //valueChanges. Obtiene toda la colección (resumen)
    this.orders$ = this.orderCollection.valueChanges();
    this.getDataOrders();
  }
  // Permite el llamado al componente para obtener el Id actual
  get currentID(): string{
    return this.currentId;
  }

  /* get showCustomer(): Observable<any>{
    return this.customer$.asObservable();
  } */
  
  // metodo que permite crear una nueva orden (id, nombre, mesa)
  addOrder(newOrder: Orders): Promise<void>{
    return new Promise(async(res, reject) => {
      try{
        const id = {id: this.afs.createId()};
        const data = {...id, ...newOrder, date: new Date()};
        const result = this.orderCollection.doc(id.id).set(data);
        // Aqui se guarda el id actual
        this.currentId = id.id;
        res(result)
      }catch(error:any){
        reject(error.message)
      }
    })
  }
  // metodo que permite obtener en el componente la data del cliente actual
  getCustomerData(id: string): Observable<Orders[]>{
    return this.orders$.pipe(map(data => data.filter(el => el.id === id)));
    //this.customer$.next(dataFilter);
  }
  // Metodo que permite insertar el resumen a la data del cliente actual
  insertOrder(id:string, orderData: Options[]): void{
    this.orderCollection.doc(id).update({
      order: orderData, 
      date: new Date(), 
      preparationDate: new Date(),
      doneDate: new Date(),
      deliveredDate: new Date(),
      preparation: false, 
      done: false,
      delivered: false,
    });
  }
  // Metodo que permite obtener toda la data de la collecion orders en tiempo real 
  getDataOrders(): void{
    this.dataOrders$ =  this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as Orders))
    )
  }
  
  //Metodo que permite cambiar el estado de la preparación
  editPreparation(id:string): void{
    this.orderCollection.doc(id).update({preparation:true});
  }
  editDone(id:string): void{
    this.orderCollection.doc(id).update({done:true, doneDate: new Date()});
  }
  editDelivered(id:string): void{
    this.orderCollection.doc(id).update({delivered: true, deliveredDate: new Date()});
  }
  getDoneTrue(): Observable<Orders[]>{
    return this.orders$.pipe(map(data => data.filter(el => el.done === true && el.delivered === false)));
  }
}