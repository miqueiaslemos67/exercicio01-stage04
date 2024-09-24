
alert("Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:\nA soma dos dois números;\nA subtração dos dois números; \nA multiplicação dos dois números;\nA divisão dos dois números;\nO resto da divisão dos dois números;")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const subritation = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restDivision = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + subritation)
alert('Multiplicação: ' + multiplication)
alert('Divisão: ' + division)
alert('Resto da divisão: ' + restDivision)
