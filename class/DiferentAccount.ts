import { DioAccount } from "./DioAccount"

export class DiferentAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    private deposit_diferent = (depositAmount: number): void => {
        if(this.validateStatus()){
            this.deposit(depositAmount + 10) // Adiciona uma taxa fixa de 10 unidades monetárias ao depósito
            console.log('Voce depositou na DiferentAccount')
        }
    }
}