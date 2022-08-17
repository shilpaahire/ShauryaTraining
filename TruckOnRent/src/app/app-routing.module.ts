import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableVehicleComponent } from './available-vehicle/available-vehicle.component';

const routes: Routes = [
  {path:'availablevehicle', component:AvailableVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

