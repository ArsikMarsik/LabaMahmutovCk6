declare function LockPrototype(target: any): void;
declare function UpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare class Automobile {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    getDetails(): string;
}
declare const car1: Automobile;
