// let forma = "retangulo"
// let altura = 5
// let comprimento = 7
// let area

const forma = "quadrado"
const altura = 5
const comprimento = 7
let area

if(forma === "triangulo"){
    area = altura * comprimento
}else{
    area = (altura * comprimento)/2
}
console.log(area)

const number = 456
const numberString = '456'
console.log(number + Number(numberString))
const numberNew = 888
console.log(numberString + number.toString())

//log -> registro

const minhaVar = true

console.log(248)
console.log('oi, eu sou um texto')
console.log(minhaVar)
console.error('deu erro')
console.error(new Error('deu erro'))
