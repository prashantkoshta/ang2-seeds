import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './com/common/homepage/start.component';
import { AboutUsComponent } from './com/common/homepage/aboutus.component';
import { SharedModule } from './com/shared/shared.module';
import {routing} from "./app.route";


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
