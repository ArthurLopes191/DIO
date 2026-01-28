// const soma = (a: number, b: number) => {
//     console.log(a + b);
// }

// soma(1, 2);

// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: string
// }

// const pessoa: Pessoa = {
//     nome: "Nath",
//     idade: 32
// }

// const outraPessoa: Pessoa = {
//     nome: 'Paulo',
//     idade: 23,
//     profissao: 'Desenvolvimento'
// }

// const arrayPessoa: Array<Pessoa> = [
//     pessoa,
//     outraPessoa
// ]

// const arrayNum: number[] = [
//     1, 2, 3
// ]

// const arrayString: Array<string> = [
//     '1', '2', '3'
// ]

// ------------------------------------------------------------------
// const num: number = 13;

// if(num > 15){
//     console.log("É Maior")
// } else if(num === 15){
//     console.log("É igual")
// } else {
//     console.log("É menor")
// }

// const typeUser = {
//     admin: 'Seja bem vindo admin',
//     student: 'Voce é um estudante',
//     viewer: 'Voce pode visualizar'
// }

// function validateUser(user: string){
//     console.log(typeUser[user as keyof typeof typeUser])
// }

// const usuario = 'admin'

// validateUser(usuario)
// validateUser('student')
// validateUser('viewer')

// ------------------------------------------------------------------


// const arrayNum : Array<number> = [1, 2, 3, 4]

// arrayNum.map(num => {
//     if(num > 2){
//         console.log(num);
//     }
// })


// ------------------------------------------------------------------

// class User {
//     name: string = 'Nath'
//     age: number = 32

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }

//     showName = () => {
//         console.log(this.name)
//     }
// }

// const user = new User('Nath', 32)
// user.showName()

// const otherUser = new User('João', 28)
// user.showName()

// -------------------------------------------------------------------
import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit()


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())

peopleAccount.setName('TESTE');

console.log(peopleAccount.getName());


