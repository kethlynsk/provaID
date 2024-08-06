const prompt = require("prompt-sync")()
const residencias = [
{
bairro: "Centro",
rua: "Rua Jequitiba",
numero: 71,
moradores: ["Pedro", "Matheus"],
},
{
bairro: "Centro",
rua: "Rua 2",
numero: 72,
moradores: ["Maria", "João"],
},
{
bairro: "Uvaranas",
rua: "Rua Tamandaré",
numero: 10,
moradores: ["Ana", "José", "Paulo"],
},
]

const validarIndice = (indice) => indice >= 0 && indice < residencias.length

const modelo = () => {
    const bairro = prompt("Qual bairro você mora? ")
    const rua = prompt("Qual rua você mora? ")
    const numero = +prompt("Qual número da sua casa? ")
    const moradores = []
    const num1 = prompt("Quantos moradores tem na casa? ")

    for(let i = 0; i < num1; i++){
        const nome = prompt("Qual o nome do morador? ")
        moradores.push(nome)
    }

    if(bairro !== "" && isNaN(bairro) && rua !== "" && isNaN(rua) && !isNaN(numero) && moradores !== "" && isNaN(moradores) && !isNaN(num1)){
        return{
            bairro,
            rua,
            numero,
            moradores
        }
    }else{
        console.log("Dados inválidos")
        return undefined
    }
}

const adicionarResidencia = () => {
    const residencia = modelo()
    if(residencia !== undefined){
        residencias.push(residencia)
        console.log("Residencia cadastrada com sucesso!")
    }
}

const listarResidencias = () => {
    if(residencias.length == 0){
        console.log("Nenhuma residencia cadastrada")
        return
    }else{
        residencias.forEach((residencia, indice) => {
        console.log(`
        ${indice + 1}
        Bairro: ${residencia.bairro}
        Rua: ${residencia.rua}
        Número: ${residencia.numero}`)

        residencia.moradores.forEach((morador, indice) => {
            console.log(`Morador ${indice + 1}: ${morador}`);
        })
    })
    }}

const atualizarResidencia = () => {
    listarResidencias()

    const indice = parseInt(prompt("Qual indice deseja remover? "), 10)-1

    if(!validarIndice(indice)){
        console.log("Índice inválido")
        return
    }
    const residencia = modelo(indice)

    if(residencia !== undefined){
        residencias[indice] = residencia
        console.log("Atualizado com sucesso!")
    }
}

const deletarResidencia = () => {
    listarResidencias()

    indice = parseInt(prompt("Qual indice deseja remover? "), 10)-1

    if(!validarIndice(indice)){
        console.log("Índice inválido!")
    }else{
        residencias.splice(indice, 1)
        console.log("Índice removido com sucesso!")
    }
}

module.exports = {
    adicionarResidencia,
    listarResidencias,
    atualizarResidencia,
    deletarResidencia
}