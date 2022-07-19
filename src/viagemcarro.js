const readline= require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

interface.question("Distancia percorrida em Km:",(distancia)=>
{
    interface.question("Velocidade média em Km/h:",(velocidade)=>
    {
        tempo= distancia/velocidade
        if (tempo<1)
        {
            tempo_m=tempo*60
            console.log("O tempo será de:",tempo_m,"minutos")
        }
        else 
        {
            console.log("O tempo será de:",tempo,"horas")
        }
        interface.close()
    })
})