var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate([
    UpperCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Automobile.prototype, "getDetails", null);
Automobile = __decorate([
    LockPrototype,
    __metadata("design:paramtypes", [String, String, Number])
], Automobile);
const car1 = new Automobile("Toyota", "Camry", 2021);
try {
    Automobile.prototype.newProperty = "Test";
}
catch (_a) {
    console.log("Изменение прототипа класса заблокировано.");
}
console.log(car1.getDetails());
car1.newProperty = "Дополнительное свойство";
console.log(car1.newProperty);
