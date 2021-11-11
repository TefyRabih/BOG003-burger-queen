import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PublicComponent } from "./public.component";
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './home/main/main.component';
import { ChefComponent } from './chef/chef.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './chef/components/header/header.component';
import { OrderComponent } from './chef/components/order/order.component';
import { PreparationsComponent } from './chef/components/preparations/preparations.component';
import { MenuHeaderComponent } from './menu/components/menu-header/menu-header.component';
import { SummaryComponent } from './menu/components/summary/summary.component';
import { MenuNavComponent } from './menu/components/menu-nav/menu-nav.component';
import { WaiterHeaderComponent } from './waiter/components/waiter-header/waiter-header.component';
import { WaiterOkComponent } from './waiter/components/waiter-ok/waiter-ok.component';
import { WaiterDoneComponent } from './waiter/components/waiter-done/waiter-done.component';

import { MenuService } from "./services/menu.service";


@NgModule({
    imports:[
        CommonModule,
        PublicRoutingModule,
        SharedModule
    ],
    declarations:[
    PublicComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    MainComponent,
    ChefComponent,
    WaiterComponent,
    HeaderComponent,
    OrderComponent,
    PreparationsComponent,
    MenuHeaderComponent,
    SummaryComponent,
    MenuNavComponent,
    WaiterHeaderComponent,
    WaiterOkComponent,
    WaiterDoneComponent
  ],
    exports:[],
    providers:[
        MenuService
    ]
})

export class PublicModule{
    constructor(){}
}
