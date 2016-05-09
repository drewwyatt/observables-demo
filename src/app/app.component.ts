import {Component} from 'angular2/core';
import {WS} from './ws';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})
export class AppComponent {
    responses: any[] = [];
    private _ws: WS;
    
    ngOnInit() {
        WS.fromAddress('ws://djw.dev.bottlerocketservices.com:1337')
            .subscribe(
                response => this._handleResponse(response),
                   error => this._handleError(error));
    }
    
    private _handleResponse(response: MessageEvent): void {
        this.responses.push(response.data);
    }
    
    private _handleError(error: any): void {
        console.error(error);
    }
}