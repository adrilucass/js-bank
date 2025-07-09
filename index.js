// fazer um banco onde possui

// usuário, com { nome, saldo, histórico }

// - funções

// depositar
// sacar
// transferir
// extrato

// TALVEZ um login e registro

import { Register } from "./src/auth/register.js"

function Introduction() {
    console.log("Bem vindo ao banco, insira seus dados abaixo para criar uma conta")

    Register()
}

Introduction()