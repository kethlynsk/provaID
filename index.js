const prompt = require("prompt-sync")()
const {adicionarResidencia, listarResidencias, atualizarResidencia, deletarResidencia} = require("./modulos.js")

while(true){
    console.log(`
    1. Para adicionar uma residência
    2. Para listar as residências
    3. Para atualizar uma residência
    4. Para deletar uma residência
    5. Para SAIR`)

    const opcao = +prompt("Qual sua opção? ")

    switch (opcao) {
        case 1:
            adicionarResidencia()
            break;
        case 2:
            listarResidencias()
            break;
        case 3:
            atualizarResidencia()
            break;
        case 4:
            deletarResidencia()
            break;
        case 5:
            process.exit()
            break;
        default:
            console.log("OPÇÃO INVÁLIDA")
            break;
    }
}