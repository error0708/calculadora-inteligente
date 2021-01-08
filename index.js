main()
function main() {
//main statement block
var choice = prompt("escolha a operação a ser realizada: [1] [2] [3] [4] [exit]");
switch (choice) {
    
    case '1':
    soma();
    break;
    
    case '2':
    subtração();
    break;
    
    case '3':
    multi();
    break;
   
    case '4':
    div();
    break;

    case 'exit':
    repeat();
    break;
}}
    repeat();
//list of functions
function soma() {
    const n1 = Number(prompt("informe o primeiro valor: "))
    const n2 = Number(prompt("informe o segundo valor: "))
    alert (n1 + n2);
}

function subtração() {
    const n1 = Number(prompt("informe o primeiro valor: "))
    const n2 = Number(prompt("informe o segundo valor: "))
    alert (n1 - n2);
}

function multi() {
    const n1 = Number(prompt("informe o primeiro valor: "))
    const n2 = Number(prompt("informe o segundo valor: "))
    alert (n1 * n2);
}

function div() {
    const n1 = Number(prompt("informe o primeiro valor: "))
    const n2 = Number(prompt("informe o segundo valor: "))
    alert (n1 / n2)
}

function repeat() {
var check = prompt("gostaria de continuar? [y]/[n]")
if (check == "y") {
    main()
}}