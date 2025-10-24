import { CompanyAccount } from './class/CompanyAccount'
import { DiferentAccount } from './class/DiferentAccount'
import { PeopleAccount } from './class/PeopleAccount'

// Testando a PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(50)
peopleAccount.getBalance()
console.log(peopleAccount)

// Testando a CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getBalance()
companyAccount.deposit(200)
companyAccount.getBalance()
companyAccount.getLoan(500)
companyAccount.getBalance()
companyAccount.withdraw(100)
companyAccount.getBalance()
console.log('-------------------')
console.log(companyAccount)


// Testando a DiferentAccount
const diferentAccount: DiferentAccount = new DiferentAccount('Conta Diferente', 30)
diferentAccount.getBalance()
diferentAccount.deposit(150)
diferentAccount.getBalance()
diferentAccount.withdraw(70)
diferentAccount.getBalance()
console.log(diferentAccount)
