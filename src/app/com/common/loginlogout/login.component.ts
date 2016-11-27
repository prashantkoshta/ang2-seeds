import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {AuthService} from "./../../core/services/auth.service";
import {IMember} from "./../../core/services/member";


@Component({
    selector: 'pk-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    userid:string="";
    password:string="";
    boolSaveUidPwd:boolean=true;
    isError:boolean= false;
    member:IMember;

    constructor(private _authService:AuthService,  private _router: Router) { }

    ngOnInit() { }

    onSubmit():void{
         this.isError = false;
        console.log(this.userid,this.password,this.boolSaveUidPwd);
        this._authService.doLogin(this.userid,this.password).subscribe(member => {
             this._router.navigate(['/aboutus']);
             //this.isError = true;
        },
        error =>{
            
        });
    }
}