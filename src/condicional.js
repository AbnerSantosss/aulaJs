/*
 1. Elabore um algoritmo que receba dois números e
  determine qual é o maior entre eles, se os números forem iguais, 
 mostre uma mensagem no console "Os números são iguais"
 */
const readline = require('readline')
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('digite o primeiro número:', num1 => {
  interface.question('digite o segundo número:', num2 => {
    if (num1 > num2) {
      console.log('O maior número é:', num1)
    } else if (num1 === num2) {
      console.log('Os números são iguais')
    } else {
      console.log('O maior número é:', num2)
    }
    interface.close()
  })
})
