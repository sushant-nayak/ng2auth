import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Express } from 'express';
//import { Path } from 'path';
import { BodyParser } from 'body-parser';
import { Cors } from 'cors';
import { Passport } from 'passport';
import { Mongoose } from 'mongoose';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
