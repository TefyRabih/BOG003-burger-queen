import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PublicRoutingModule } from "./public-routing.module";
import { CommonModule } from '@angular/common';
import { PublicComponent } from "./public.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports:[
        CommonModule,
        PublicRoutingModule
    ],
    declarations:[
    PublicComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent
  ],
    exports:[],
    providers:[]
})

export class PublicModule{
    constructor(){}
}