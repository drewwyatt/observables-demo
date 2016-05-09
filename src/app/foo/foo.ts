export class Foo {
    bar: string;
    baz: number;
    
    constructor(obj?: any) {
        obj = obj || {};
        
        this.bar = obj.bar;
        this.baz = obj.baz;
    }
}