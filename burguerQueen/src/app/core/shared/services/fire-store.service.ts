import { Injectable } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

import { Orders } from '../../../interfaces/orders.interface';


@Injectable({
  providedIn: 'root'
})

export class FireStoreService {
  order$: Observable<Orders[]>;
  private orderCollection:  AngularFirestoreCollection<Orders>;
  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection<Orders>('orders');
    this.order$ = this.orderCollection.valueChanges();
  }


  addOrder(order: Orders): void{
    this.orderCollection.add(order);
  }
}
