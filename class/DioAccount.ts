export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  private setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  public getName = (): string => {
    return this.name
  }

  public deposit = (depositAmount: number): void => {
    if(this.validateStatus()){
      this.balance += depositAmount
      console.log('Voce depositou ' + depositAmount)
    }
    throw new Error('Conta inválida')
  }

  public withdraw = (withdrawalAmount: number): void => {
    if(this.validateStatus()){
      this.balance -= withdrawalAmount
      console.log('Voce sacou ' + withdrawalAmount)
    }
    throw new Error('Conta inválida')
  }

  public getBalance = (): void => {
    console.log('R$' + this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
