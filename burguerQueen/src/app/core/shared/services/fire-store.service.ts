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
  private orders$: Observable<Orders[]>;
  private currentId!: string;
  private orderCollection:  AngularFirestoreCollection<Orders>;

  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection<Orders>('orders');
    this.orders$ = this.orderCollection.valueChanges()
  }

  get currentID(): string{
    return this.currentId;
  }

  addOrder(newOrder: Orders): Promise<void>{
    return new Promise(async(res, reject) => {
      try{
        const id = {id: this.afs.createId()};
        const data = {...id, ...newOrder};
        const result = this.orderCollection.doc(id.id).set(data);
        this.currentId = id.id;
        res(result)
      }catch(error:any){
        reject(error.message)
      }
    })
  }

  getCustomerData(id: string): void{
    
    this.customer$ = this.orders$.pipe(map(data => data.filter(el => el.id === id)));
    
    /* this.orderCollection.doc('1cWne5y5tivCZxshiRAe').update({ order: [{
      id: '1',
      name: 'stef',
      price: 5,
      qty: 3
     }] 
    }) */
  }
  insertOrder(id:string, orderData: Options[]): void{
    this.orderCollection.doc(id).update({order: orderData});
  }

}

// 1cWne5y5tivCZxshiRAe