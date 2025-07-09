import inquirer from 'inquirer';
import { ShowBalance } from './balance.js';
import { WithDraw } from './withdraw.js';
import { Deposit } from './deposit.js';

export function Menu(name, balance) {
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
                ShowBalance(balance)
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
                    const returnValue = WithDraw(balance, props.Value)

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
                    const returnValue = Deposit(balance, props.Value)

                    balance = returnValue
                    console.log(`Seu saldo após o deposito é de ${balance}`)
                })
                break
        }
    })
}