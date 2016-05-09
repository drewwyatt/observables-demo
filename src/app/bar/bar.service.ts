import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs';

import {AuthenticatedHttpService} from '../http';
import {Bar} from './bar';

@Injectable()
export class BarService extends AuthenticatedHttpService {
    constructor(http: Http) {
        super(http);
    }
    
    all(): Observable<Bar[]> {
        return this._get('https://some.url/bars')
            .map(response => response.map(r => new Bar(r)))
            .catch(error => this._handleError(error));
    }
    
    find(id: number): Observable<Bar> {
        return this._get(`https://some.url/bars/${id}`)
            .map(response => new Bar(response))
            .catch(error => this._handleError(error));
    }
    
    private _handleError(response: Response) {
        if(response.status === 500) {
            return Observable.of(null)
        } else {
            return Observable.throw(response);
        }
    }
}