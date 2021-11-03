import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PublicComponent } from './public.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [
    {path: '',
    component: PublicComponent,
    children:[
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent },
    {path:'menu', component: MenuComponent },
    {path:'chef', component: ChefComponent},
    {path:'waiter', component: WaiterComponent}
    ]
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }