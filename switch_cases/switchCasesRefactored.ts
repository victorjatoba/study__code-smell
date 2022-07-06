abstract class Employee {
  constructor(public amount: number) {}
  abstract calculateCost();
}

class Pj extends Employee {
  constructor(amount: number) {
    super(amount);
  }
  calculateCost() {
    return this.amount;
  }
}

class PJ2 extends Pj {
  constructor(amount: number) {
    super(amount);
  }
  calculateCost() {
    return this.amount+1;
  }
}

class Intern extends Employee {
  constructor(amount: number) {
    super(amount);
  }
  calculateCost() {
    const vouchers = 1000;
    return this.amount + vouchers;
  }
}

class Clt extends Employee {
  constructor(amount: number) {
    super(amount);
  }
  calculateCost() {
    const inss = this.amount * 0.03;
    const fgts = this.amount / 12;
    const vacations = this.amount / 3 / 12;
    const thirteenFirstSalary = this.amount / 12;
    const vouchers = 1000;
    return (
      this.amount + inss + fgts + vacations + thirteenFirstSalary + vouchers
    );
  }
}

// const employee = new Clt(4000);
// console.log(employee.calculateCost());

interface EmployeeParams {
  category: string;
  amount: number;
}

interface EmployeeFactory {
  makeEmployee(params: EmployeeParams): Employee;
}

enum Category {
  CLT = "CLT",
  PJ = "PJ",
  PJ2 = "PJ2",
  INTERN = "Estagio",
}

class EmployeeFactoryImpl implements EmployeeFactory {
  makeEmployee(params: EmployeeParams): Employee {
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
  }
}

const employee = new EmployeeFactoryImpl().makeEmployee({
  amount: 4000,
  category: "PJ2",
});
console.log(employee.calculateCost());
