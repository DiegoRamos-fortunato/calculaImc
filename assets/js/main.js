const resposta = document.querySelector('.imc__resposta');
const botao = document.querySelector('#button__form')


function escreveNaTela () {
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const imcCalculado = peso / (altura * altura).toFixed(2);

   if (imcCalculado >=0 && imcCalculado < 18.50) {
        resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está abaixo do peso.</p>`
   }else if (imcCalculado >= 18.50 && imcCalculado <= 24.99 ){
         resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está no peso ideal.</p>`
   }else if (imcCalculado >= 25.00 && imcCalculado <= 29.99) {
        resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está acima do peso.</p>`
   }else if (imcCalculado >= 30.00 && imcCalculado <= 34.99.toFixed(2)) {
        resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está com Obesidade tipo 1.</p>`
   }else if (imcCalculado >= 35.00 && imcCalculado <= 39.99) {
        resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está com Obesidade tipo 2.</p>`
   }else if (imcCalculado >= 40.00) {
       resposta.innerHTML = `<p>Olá seu imc é ${imcCalculado.toFixed(2)}, você está com Obesidade mórbida.</p>`
   } else if (imcCalculado < 0) {
        resposta.innerHTML = `<p>Peso ou Altura invalidaa</p>`
   }
}

botao.addEventListener('click', escreveNaTela)
