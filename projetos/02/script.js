// Descrição: arquivo de script para o projeto 02
// Autor: Prof. Jucimar Jr  
/*let botao = document.querySelector('#botao');
let estaQuebrado = false;

botao.style.background = "green";
botao.style.color = "white";

botao.addEventListener('mouseover',e => {
    if(!estaQuebrado)
    botao.style.background = "blue";
});

botao.addEventListener('mouseout',e => {
    if(!estaQuebrado)
        botao.style.background = "green";
});

botao.addEventListener('click',e => {
    if(!estaQuebrado){
        botao.style.background = "red";
        botao.innerHTML = "Quebrei!";
        estaQuebrado = true;
        return;
    } else {
        botao.style.background = "green";
        botao.innerHTML = "Me clique!!";
        estaQuebrado = false;
    }
});*/


// Calculadora
const campo1 = document.querySelector('#campo1');
const campo2 = document.querySelector('#campo2');
const seletor = document.querySelector('#operacao');
const botaoResult = document.querySelector('#resultado');
let resposta = document.querySelector('#resposta');

botaoResult.addEventListener('click', calcular);

function calcular() {
    if(campo1.value === '' || campo2.value === '') {
        resposta.classList.add('problema');
        resposta.innerHTML = 'Preencha os campos!';
        setTimeout(()=> {
            resposta.classList.remove('problema');
            resposta.innerHTML = '';
        },3000)
    }
    else {
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        switch(operacao)
        {
            case operacao === "Somar":
                resposta.innerHTML = valor1 + valor2;
            case operacao === "Subtrair":
                resposta.innerHTML = valor1 - valor2;
            case operacao === "Dividir":
                resposta.innerHTML = valor1 / valor2;
            case operacao === "Multiplicar":
                resposta.innerHTML = valor1 * valor2;
        }
    }
}