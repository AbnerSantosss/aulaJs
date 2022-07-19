const readline = require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

interface.question("Digite o preço da mercadoria: ",(preço)=>
{
    desconto= preço*0.20
    vpagar= preço-desconto
    console.log(" O valor do desconto é:",desconto,"\n","E o preço a pagar é:",vpagar)
    
    interface.close()
})