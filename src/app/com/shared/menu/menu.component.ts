import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pk-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {
    mainMenuItem:Array<any> = [
        {label:"Home", link:"/start"},
        {label:"ContactUs", link:"/start"},
        {label:"Career", link:"/start"},
        {label:"Aboutus", link:"/aboutus"},
    ];

    settingMenuItem:Array<any> =[
        {label:"Login", link:"/login"}
    ]

    constructor() { }

    ngOnInit() { }
}