const readline = require('readline')
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('digite o um número:', diasSemana => {
  switch (diasSemana) {
    case '1':
      console.log('Domingo')
      break
    case '2':
      console.log('Segunda')
      break
    case '3':
      console.log('Terca')
      break
    case '4':
      console.log('Quarta')
      break
    case '5':
      console.log('Quinta')
      break
    case '6':
      console.log('sexta')
      break
    case '7':
      console.log('sabado')
      break
    default:
      console.log('Digite um número de 1 a 7')
  }

  interface.close()
})
