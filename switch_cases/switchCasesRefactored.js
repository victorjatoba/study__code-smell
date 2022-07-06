var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(amount) {
        this.amount = amount;
    }
    return Employee;
}());
var Pj = /** @class */ (function (_super) {
    __extends(Pj, _super);
    function Pj(amount) {
        return _super.call(this, amount) || this;
    }
    Pj.prototype.calculateCost = function () {
        return this.amount;
    };
    return Pj;
}(Employee));
var PJ2 = /** @class */ (function (_super) {
    __extends(PJ2, _super);
    function PJ2(amount) {
        return _super.call(this, amount) || this;
    }
    PJ2.prototype.calculateCost = function () {
        return this.amount + 1;
    };
    return PJ2;
}(Pj));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(amount) {
        return _super.call(this, amount) || this;
    }
    Intern.prototype.calculateCost = function () {
        var vouchers = 1000;
        return this.amount + vouchers;
    };
    return Intern;
}(Employee));
var Clt = /** @class */ (function (_super) {
    __extends(Clt, _super);
    function Clt(amount) {
        return _super.call(this, amount) || this;
    }
    Clt.prototype.calculateCost = function () {
        var inss = this.amount * 0.03;
        var fgts = this.amount / 12;
        var vacations = this.amount / 3 / 12;
        var thirteenFirstSalary = this.amount / 12;
        var vouchers = 1000;
        return (this.amount + inss + fgts + vacations + thirteenFirstSalary + vouchers);
    };
    return Clt;
}(Employee));
var Category;
(function (Category) {
    Category["CLT"] = "CLT";
    Category["PJ"] = "PJ";
    Category["PJ2"] = "PJ2";
    Category["INTERN"] = "Estagio";
})(Category || (Category = {}));
var EmployeeFactoryImpl = /** @class */ (function () {
    function EmployeeFactoryImpl() {
    }
    EmployeeFactoryImpl.prototype.makeEmployee = function (params) {
        switch (params.category) {
            case Category.CLT:
                return new Clt(params.amount);
            case Category.PJ:
                return new Pj(params.amount);
            case Category.PJ2:
                return new PJ2(params.amount);
            default:
                break;
        }
    };
    return EmployeeFactoryImpl;
}());
var employee = new EmployeeFactoryImpl().makeEmployee({
    amount: 4000,
    category: "PJ2"
});
console.log(employee.calculateCost());
