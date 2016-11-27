import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { LoginComponent }   from './login.component';
import { LogoutComponent } from './logout.component';
import {LoginLogoutComponent} from "./loginlogout.component"
import { routing } from './loginlogout.route';


@NgModule({
    imports: [
        routing,
        FormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [LoginComponent,LogoutComponent,LoginLogoutComponent],
    providers: []
})

export class LoginLogoutModule { }
