import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs';

import {AdditionalHeaders} from './http.additionalheaders';

export class HttpService {
    constructor(private _http: Http) {}
    
    protected _get(url: string, data?: any, additionalHeaders?: AdditionalHeaders): Observable<any> {
        return this._executeHttpGet(url, data, additionalHeaders);
    }
    
    // private
    
    private _getHeaders(additionalHeaders?: any): Headers {
        const headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        
        if(additionalHeaders) {
            Object.keys(additionalHeaders).forEach((key) => {
                headers.append(key, additionalHeaders[key])
            });
        }
        
        return headers;
    }
    
    private _executeHttpGet(url: string, data?: any, additionalHeaders?: AdditionalHeaders): Observable<any> {
        const headers = this._getHeaders(additionalHeaders);
        return this._http.get(url)
            .map(response => response.json());
    }
}