import inquirer from 'inquirer';
import BankFunctions from '../functions/bankFunctions.js';

// REGISTRO

let name
let password
export let accounts = []

const services = new BankFunctions()

export function Register() {
    const userName = inquirer.prompt([
        {
            message: 'Qual seu nome?',
            name: 'userName'
        }
    ]);

    userName.then((props) => {
        console.log(`Olá ${props.userName}, complete este outro campo para continuar:`)
        name = props.userName

        const passWord = inquirer.prompt([
            {
                message: 'Digite uma senha para criar uma conta',
                name: 'passWord',
            }
        ]);

        passWord.then((passWordProps) => {
            console.log(`Pronto ${name} sua conta foi criada com sucesso!`)
            password = passWordProps.passWord

            addToList(name, password)
        })
    })

    const addToList = (name, password) => {
        const Balance = (Math.random() * (1000 - 100) + 100).toString().slice(0, 6)
        accounts.push({ userName: name, passWord: password, balance: Balance, extract: [] })

        services.menu(name, Balance, accounts)
    }
}

