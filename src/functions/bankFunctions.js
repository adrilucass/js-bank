import inquirer from 'inquirer';

class BankFunctions {
    showBalance(balance) {
        console.log(`Seu saldo é de ${balance}`)
    }

    deposit(balance, value) {
        if (value > 0) return Number(balance) + value
    }

    withDraw(balance, value) {
        if (value > 0) return balance - value
    }

    menu(name, balance) {
        const Menu = inquirer.prompt([
            {
                message: `Olá ${name} selecione uma opção para continuar`,
                name: 'choise',
                type: 'list',
                choices: ["Ver saldo", "Retirar", "Depositar"]
            }
        ]);

        Menu.then((props) => {
            switch (props.choise) {
                case "Ver saldo":
                    this.showBalance(balance)
                    break
                case "Retirar":
                    const Retirar = inquirer.prompt([
                        {
                            message: "Digite o valor que quer retirar",
                            name: "Value",
                            type: "number"
                        }
                    ])

                    Retirar.then((props) => {
                        const returnValue = this.withDraw(balance, props.Value)

                        balance = returnValue
                        console.log(`Seu saldo após o saque é de ${balance}`)
                    })
                    break
                case "Depositar":
                    const Depositar = inquirer.prompt([
                        {
                            message: "Digite o valor que quer depositar",
                            name: "Value",
                            type: "number"
                        }
                    ])

                    Depositar.then((props) => {
                        const returnValue = this.deposit(balance, props.Value)

                        balance = returnValue
                        console.log(`Seu saldo após o deposito é de ${balance}`)
                    })
                    break
            }
        })
    }
}

export default BankFunctions