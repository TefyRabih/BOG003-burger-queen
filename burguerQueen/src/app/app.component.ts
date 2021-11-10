import { Component } from '@angular/core';
import { Menu } from './clases/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burguerQueen';

  menus: Menu[] = [
    {
      id: "m1",
      name: "Almuerzo/Cena",
      items: [
        {
          id: "ac1",
          name: "Hamburguesa",
          options: ["sencilla", "doble"],
          price: [10, 15],
          items: ["res", "pollo", "vegetariana"]
        },
        {
          id: "ac2",
          name: "Acompañamiento",
          options: ["papas fritas", "aros de cebolla"],
          price: [5, 5],
          items: []
        },
        {
          id: "ac3",
          name: "Bebidas",
          options: ["agua 500ml", "agua 700ml", "bebida-gaseosa 500ml", "bebida-gaseosa 700ml"],
          price: [5, 7, 7, 10],
          items: []
        }
      ]
    },
    {
      id: "m2",
      name: "Desayuno",
      items: [
        {
          id: "d1",
          name: "Cafe",
          options: ["americano", "con leche"],
          price: [5, 7],
          items: []
        },
        {
          id: "d2",
          name: "Sandwich",
          options: ["jamon y queso"],
          price: [10],
          items: []
        },
        {
          id: "d3",
          name: "Bebidas",
          options: ["jugo natural"],
          price: [10],
          items: []
        }
      ]
    },
    {
      id: "m3",
      name: "Adicionales",
      items:[
        {
          id: "a1",
          name: "Adicionales",
          options: ["huevo", "queso"],
          price: [1],
          items: []
        }
      ]
    }
  ];
}
