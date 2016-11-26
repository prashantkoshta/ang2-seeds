import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pk-star',
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']

})
export class StarComponent implements OnChanges {
    @Input() rating:number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    
    constructor() { }

    ngOnChanges() { }

    ngClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }
}