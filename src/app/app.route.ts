import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


import { AboutUsComponent } from './com/common/homepage/aboutus.component';
import { StartComponent } from './com/common/homepage/start.component';

const appRoutes: Routes  = [
    {path:"start", component:StartComponent},
    {path:"aboutus", component:AboutUsComponent},
    {path:"login", loadChildren:"app/com/common/loginlogout/loginlogout.module#LoginLogoutModule"},
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: '**', redirectTo: 'start', pathMatch: 'full' }
    //{ path: "", redirectTo: "home", pathMatch: "full" },
    //{ path: "product", loadChildren: "app/product/product.module#ProductModule"  }
];

export const routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);