import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs';

import {HttpService} from '../http';
import {Foo} from './foo';

@Injectable()
export class FooService extends HttpService {
    constructor(http: Http) {
        super(http);
    }
    
    all(): Observable<Foo[]> {
        return this._get('https://some.url/foos')
            .map(response => response.map(r => new Foo(r)));
    }
}