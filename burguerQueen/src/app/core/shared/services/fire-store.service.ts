import { Injectable } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Orders } from '../../../interfaces/orders.interface';


@Injectable({
  providedIn: 'root'
})

export class FireStoreService {

 // order$: Observable<Orders[]>;
  private orderCollection:  AngularFirestoreCollection<Orders>;

  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection<Orders>('orders');

  }


  addOrder(newOrder: Orders, orderId: string): Promise<void>{
    return new Promise(async(res, reject) => {
      try{
        const OrId = orderId || this.afs.createId();
        const data = {OrId, ...newOrder};
        const result = this.orderCollection.doc(OrId).set(data);
        res(result)
      }catch(error){
        reject(error.message)
      }
    })
  }
}
