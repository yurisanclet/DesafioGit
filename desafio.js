let pessoas = [
  {nome: "Marcus", idade: 21},
  {nome: "Renato", idade: 22},
  {nome: "Antonio", idade: 22},
  {nome: "Yuri", idade: 20},
  {nome: "Yvolanda", idade: 500},
  {nome: "Bianca", idade: 19},
  {nome: "Bernardo", idade: 10},
  {nome: "Matheus", idade: 26},
  {nome: "João", idade: 19},
  {nome: "Jonas", idade: 13},
  {nome: "Gabriel", idade: 20},
  {nome: "Gabriela", idade: 24},
  {nome: "Isabele", idade: 19},
  {nome: "Isaac", idade: 22}
]

let nomesComY = pessoas.filter( pessoa => pessoa.nome[0] === "Y")

let apenasNome = nomesComY.map(pessoa => ({ nome: pessoa.nome }))
console.log("Nomes com a inicial Y: ", apenasNome);

let soma = 0
let media = 0;

for (let i = 0; i < nomesComY.length; i++) {
    soma += nomesComY[i].idade
    media = soma/nomesComY.length;
}
console.log("Média das idades: " + media)




