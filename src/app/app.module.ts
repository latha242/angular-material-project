import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
 
import 'hammerjs';

import {MatButtonModule, MatCheckboxModule} from '@angular/material'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule]
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
