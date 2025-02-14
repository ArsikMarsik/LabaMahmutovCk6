"use strict";
function LockPrototype(target) {
    Object.freeze(target.prototype);
}
function UpperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}
let Automobile = class Automobile {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `Автомобиль: ${this.make} ${this.model}, Год: ${this.year}`;
    }
};
LockPrototype(Automobile);
const car1 = new Automobile("Toyota", "Camry", 2021);
try {
    Automobile.prototype.newProperty = "Test";
}
catch {
    console.log("Изменение прототипа класса заблокировано.");
}
console.log(car1.getDetails());
car1.newProperty = "Дополнительное свойство";
console.log(car1.newProperty);
