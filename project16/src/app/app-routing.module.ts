import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './category/product/product.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'category', component:CategoryComponent,
  children:[{path:'product/:productid/:productname', component:ProductComponent}]}, 
  {path:'sales', component:SalesComponent},
  {path:'demo', component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
