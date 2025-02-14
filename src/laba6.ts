function LockPrototype(target: any) {
    Object.freeze(target.prototype);
}

function UpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}

@LockPrototype
class Automobile {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    @UpperCase
    getDetails(): string {
        return `Автомобиль: ${this.make} ${this.model}, Год: ${this.year}`;
    }
}

const car1 = new Automobile("Toyota", "Camry", 2021);

try {
    (Automobile.prototype as any).newProperty = "Test";
} catch {
    console.log("Изменение прототипа класса заблокировано.");
}

console.log(car1.getDetails());

car1.newProperty = "Дополнительное свойство";
console.log(car1.newProperty);
