import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pk-start',
    templateUrl: 'start.component.html'
})
export class StartComponent implements OnInit {
    title:string = "Welcome Page.!!!!!"
    constructor() { }

    ngOnInit() { }
}