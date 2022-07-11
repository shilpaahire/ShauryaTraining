import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebsitedesignComponent } from './websitedesign/websitedesign.component';
import { WebdevlopmentComponent } from './webdevlopment/webdevlopment.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WebsitedesignComponent,
    WebdevlopmentComponent,
    MobileappComponent,
    ContactusComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
