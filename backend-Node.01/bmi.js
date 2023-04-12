function calculateBmi(w, h) {
  const promise = new Promise ((resolve, reject) => {
    if(h == 0) reject(new Error("Não pode se calcular com zero"))
    const result = w / (h * h)
    resolve(result)
  })

  return promise
}

calculateBmi(88, 1.71)
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`))