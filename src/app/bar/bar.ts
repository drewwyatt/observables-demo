export class Bar {
    something: string;
    somethingElse: number[];
    
    constructor(obj?: any) {
        obj = obj || {};
        
        this.something = obj.something;
        this.somethingElse = obj.somethingElse;
    }
    
    doSomething(n: number): (number) => number {
        return (n) => {
            return n + 1;
        };
    }
}