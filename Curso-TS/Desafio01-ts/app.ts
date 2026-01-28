import { CompanyAccount } from './class/CompanyAccount'
import { InvestmentAccount } from './class/InvestmentAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(5)
console.log("Saldo da conta pessoal após o deposito:" + peopleAccount.getBalance())
peopleAccount.withdraw(3)
console.log("Saldo da conta pessoal após o saque:" + peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(3)
console.log("Saldo da conta da empresa após o deposito:" + companyAccount.getBalance())
companyAccount.withdraw(2)
console.log("Saldo da conta da empresa após o saque:" + companyAccount.getBalance())

const investmentAccount: InvestmentAccount = new InvestmentAccount('Investimento', 23)
investmentAccount.depositInvestment(100);
console.log("Saldo da conta de investimento após o deposito:" + investmentAccount.getBalance());
