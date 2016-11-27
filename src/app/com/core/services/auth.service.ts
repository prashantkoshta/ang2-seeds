import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, RequestOptions, ResponseContentType  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {IMember} from "./member";

@Injectable()
export class AuthService {
    private _authUrl:string = "http://localhost:3000/auth/login";

    constructor(private _http:Http) { }

    doLogin(userid:string,pwd:string):Observable<IMember> {
        let options:RequestOptions = new RequestOptions({
            method: "post",
            body:{'userid':userid},
            url : this._authUrl,
            responseType:ResponseContentType.Json,
        });
                
        
        return this._http.get(this._authUrl,options)
        .map((response: Response) => <IMember> response.json())
        .do(data => console.log("All"+JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error:Response):Observable<any>{
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}