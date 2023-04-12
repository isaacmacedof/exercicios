const readline = require('readline-sync');

function calculateBmi(w, h) {
  const promise = new Promise ((resolve, reject) => {
    if(h == 0) reject(new Error("Não pode se calcular com zero"))
    const result = w / (h * h)
    resolve(result)
  })

  return promise
}

const weight = readline.questionInt("What’s your weight? ")
const height = readline.questionFloat("What’s your height? ")

calculateBmi(88, 1.71)
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`))