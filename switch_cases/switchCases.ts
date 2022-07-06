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

class Intern extends Employee {
  constructor(amount: number) {
    super(amount);
  }

  calculateCost() {
    const vouchers = 1000;
    return this.amount + vouchers;
  }
}

// const employee = new Pj(2000);
const employee = new Clt(2000);
console.log(employee.calculateCost());
