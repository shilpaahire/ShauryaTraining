import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display2Component } from './display2/display2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Display1Component } from './display1/display1.component';

@NgModule({
  declarations: [
    AppComponent,
    Display2Component,
    Display1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
