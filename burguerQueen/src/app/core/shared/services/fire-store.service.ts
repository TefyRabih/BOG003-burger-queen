import { Injectable } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Orders } from '../../../interfaces/orders.interface';
import { Options } from '../../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})

export class FireStoreService {

  customer$!: Observable<Orders[]>;
  dataOrders$!: Observable<Orders[]>;  
  private orders$: Observable<Orders[]>;
  private currentId!: string;
  private orderCollection:  AngularFirestoreCollection<Orders>;
  
  constructor(private afs: AngularFirestore) {
    //OrderBy permite ordenar la colección de manera desc de acuerdo a la entrada de date
    this.orderCollection = afs.collection<Orders>('orders');
    // ref => ref.orderBy('date', 'desc')
    //valueChanges. Obtiene toda la colección (resumen)
    this.orders$ = this.orderCollection.valueChanges();
    this.getDataOrders();
  }
  // Permite el llamado al componente para obtener el Id actual
  get currentID(): string{
    return this.currentId;
  }
  
  // metodo que permite crear una nueva orden (id, nombre, mesa)
  addOrder(newOrder: Orders): Promise<void>{
    return new Promise(async(res, reject) => {
      try{
        const id = {id: this.afs.createId()};
        const data = {...id, ...newOrder};
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
  getCustomerData(id: string): void{
    this.customer$ = this.orders$.pipe(map(data => data.filter(el => el.id === id)));
  }
  // Metodo que permite insertar el resumen a la data del cliente actual
  insertOrder(id:string, orderData: Options[]): void{
    this.orderCollection.doc(id).update({order: orderData});
    this.orderCollection.doc(id).update({date: new Date()});
    this.orderCollection.doc(id).update({preparation: false});
  }
  // Metodo que permite obtener toda la data de la collecion orders en tiempo real 
  getDataOrders(): void{
    this.dataOrders$ =  this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as Orders))
    )
  }

}