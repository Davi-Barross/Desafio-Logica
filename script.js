console.log(
  "Olá seja bem vindo ao portal digital! aqui e possivel visualizar sua nota do enem alem de informar se você PASSOU ou não!"
);
console.log(
  "Preciso de algumas informações para prosseguir e verificar se você é uma pessoa fisica! abaixo coloque suas informações como cpf, nome, numero!"
);
let informacoes = [["Cpf: 123.456.123.56", "Nome: Davi", "Idade: 18"]];
// INFORMAÇÕES! ===============================================================================================================================================================
let = [informacoes[1]];
console.log(informacoes);
console.log(
  "Agradeço pelas informações! ( OBS: A nota para passar, para alguma universidade fora do brasil é de  1000 de nota!,   e caso tire 500 +, Haverá uma analise de disponibilidade de vagas no seu estado para o estudante! ) "
);
console.log("digite sua nota abaixo!");
// INFORMAÇÕES! ===============================================================================================================================================================

let Notaenem = 1556;

if (Notaenem >= 1000) {
  console.log(
    "Você foi aprovado para uma universidade internacional (HARVARD) com a nota de " +
      Notaenem
  );
} else if (Notaenem >= 500) {
  console.log(
    "Você foi aprovado para uma universidade estadual com a nota de " + Notaenem
  );
} else {
  console.log(
    "Infelizmente, sua nota não foi suficiente para a aprovação em uma universidade."
  );
}
