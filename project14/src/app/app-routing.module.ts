import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'employeelist', component:EmployeelistComponent},
  {path:'userlogin', component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
