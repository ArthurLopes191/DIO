// [ ] Criar um novo tipo de conta a partir da DioAccount

// Esta conta não deve receber novos atributos
// Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)


import { DioAccount } from './DioAccount';

export class InvestmentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositInvestment = (value: number): void => {
    if (this.validateStatus()) {
      const valuePlusTen = value + 10;
      this.deposit(valuePlusTen);
    }
  };
}
