import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailableVehicleComponent } from './available-vehicle/available-vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GridCommanModuleModule } from './grid-comman-module/grid-comman-module.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// import{ MatSnackBarModule} from'@angular/material/snack-bar';
// import{ MatButtonModule} from'@angular/material/button';
 
@NgModule({
  declarations: [
    AppComponent,
    AvailableVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GridCommanModuleModule,
    ToastrModule.forRoot(), // ToastrModule added
    // MatSnackBarModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
