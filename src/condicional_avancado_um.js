/*
 1. Elabore um algoritmo que receba dois números e
  determine qual é o maior entre eles, se os números forem iguais, 
 mostre uma mensagem no console "Os números são iguais"
 */
let rs = require('readline-sync')

let numberOne = parseInt(rs.question('Digite o primeior número'))

let numbertow = parseInt(rs.question('Digite o Segundo número'))

if (numberOne > numbertow) {
  console.log(`O numero ${numberOne} é maior que o número ${numbertow}`)
} else if (numberOne < numbertow) {
  console.log(`o Número ${numbertow} é maior que o ${numberOne}`)
} else if (numberOne === numbertow) {
  console.log('os números são iguais')
}
