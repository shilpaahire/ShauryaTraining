import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'templatedrivenform',component:TemplateDrivenFormComponent},
  {path:'productlist', component:ProductlistComponent},
  {path:'userlist', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
