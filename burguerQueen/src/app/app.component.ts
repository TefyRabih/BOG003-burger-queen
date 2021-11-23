import { Component } from '@angular/core';

//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*item$: Observable<Item[]>;
  constructor(firestore: Firestore) {
   const collection1: any = collection(firestore, 'items');
   this.item$ = collectionData(collection1);
 }*/
  title = 'burguerQueen';
}
