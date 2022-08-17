import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MahaminingComponent } from './mahamining/mahamining.component';

const routes: Routes = [
  {path:'loginform',component:LoginFormComponent},
  {path:'mahamining', component:MahaminingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
