import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { FormsModule } from '@angular/forms';
import { Assignment3detComponent } from './assignment3det/assignment3det.component';
@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    Assignment3detComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
