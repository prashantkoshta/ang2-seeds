import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { LoginComponent }   from './login.component';
import { LogoutComponent } from './logout.component';
import {LoginLogoutComponent} from "./loginlogout.component"

const routes = [
    {
        path: "",
        component: LoginLogoutComponent,
        children: [
           { path: '', component: LoginComponent},
           { path: 'logout', component: LogoutComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);