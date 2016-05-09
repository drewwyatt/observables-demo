import{Observable, Observer, Subscriber, Subject} from 'rxjs';
export class WS {
    static fromAddress(address: string): Observable<MessageEvent> {
        const ws = new WebSocket(address);
        const observable = Observable.create((obs: Observer<any>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            
            return ws.close.bind(ws);
        });
        
        const observer = Subscriber.create((data) => {
            if (ws.readyState === WebSocket.OPEN) { ws.send(data); }
        });
        
        return Subject.create(observer, observable);
    }
}