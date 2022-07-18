import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
// import { Display2Component } from './display2/display2.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { Display3Component } from './display3/display3.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'Display1', component:Display1Component},
  // {path:'Display2', component:Display2Component},
  {path:'EmpDetails', component: EmpDetailsComponent},
  {path:'Display3', component:Display3Component},
  {path:'User', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
