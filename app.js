alert('Bem vindo ao Jogo do Número Secreto!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //vai repassar um número inteiro aleatório.
console.log(numeroSecreto);
let chute;
let tentativa = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break; //sai do laço de repetição
    }else{
        if (numeroSecreto < chute) {
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa'; //operador ternário
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

//if (tentativa <1) {
 //   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas`);
//}else{
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativa`);
