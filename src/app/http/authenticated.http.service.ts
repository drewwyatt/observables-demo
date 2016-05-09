import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs';

import {AdditionalHeaders} from './http.additionalheaders';
import {HttpService} from './http.service';

export class AuthenticatedHttpService extends HttpService {
    constructor(http: Http) {
        super(http);
    }
    
    protected _get(url: string, data?: any, additionalHeaders?: AdditionalHeaders): Observable<any> {
        return super._get(url, data, this._getAdditionalHeaders(additionalHeaders))
            .catch(response => this._handle401(response));
    }
    
    private get _authorizationToken(): string {
        return '1234567abcdefg__=';
    }
    
    private _getAdditionalHeaders(additionalHeaders?: AdditionalHeaders): AdditionalHeaders {
        additionalHeaders = additionalHeaders || {};
        additionalHeaders["Authorization"] = this._authorizationToken;
        
        return additionalHeaders;
    }
    
    private _handle401(response: Response): Observable<any> {
        if(response.status === 401) {
            // Destory the session
            // Redirect to login page
            // etc
        }
        
        return Observable.throw(response);  
    }
}