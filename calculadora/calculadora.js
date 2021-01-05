var valor;
var resultado;
function borda(Num){
    valor = document.calc.visor.value += Num;
}
function reseta(){
    document.calc.visor.value = '';
}
function calcula(){
    resultado = eval (valor);
    document.calc.visor.value = resultado;
}