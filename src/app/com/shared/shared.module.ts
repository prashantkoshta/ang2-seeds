import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StarComponent }   from './common/star.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        MenuComponent
    ],
    declarations: [StarComponent,MenuComponent],
    providers: [],
})
export class SharedModule { }
