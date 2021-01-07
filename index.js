calculo();
function decisão() {
var confi =prompt ("gostaria de continuar calculando? [s/n]")
if (confi == "s")  {
    calculo()
}}
function calculo() {
var resposta1 = prompt("escolha o tipo de operação que gostaria de realizar [+],[-],[x],[/]");

if (resposta1 == "+") {
    var n1 = parseInt(prompt("informe o primeiro valor a ser somado: "))
    var n2 = parseInt(prompt("informe o segundo valor a ser somado: "))
    alert(n1 + n2);
    decisão()
    
}
if (resposta1 == "-"){
    var n1 = Number(prompt("informe o primeiro valor a ser subtraido: "))
    var n2 = Number(prompt("informe o segundo valor a ser subtraido: "))
    alert (n1 - n2);
    decisão()
}
if (resposta1 == "x") {
    var n1 = Number(prompt("informe o primeiro valor a ser multiplicado: "))
    var n2 = Number(prompt("informe o segundo valor a ser multiplicado: "))
    alert (n1 * n2);
    decisão()
}
if (resposta1 == "/") {
    var n1 = Number(prompt("informe o primeiro valor a ser dividido: "))
    var n2 = Number(prompt("informe o segundo valor a ser dividido: "))
    alert (n1 / n2);
    decisão()
}}
