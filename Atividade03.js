let tamanho = 26;
const botoes = document.createElement('div')
const h1 = document.querySelector('h1, h2, h3, h4, h5, h6')
botoes.innerHTML = botoes.innerHTML + "<button type='button' onclick='diminuir()'>-</button>";
botoes.innerHTML = botoes.innerHTML + "<button type='button' onclick='aumentar()'>+</button>";
h1.parentElement.insertBefore(botoes, h1.nextElementSibling);

function diminuir(){
  let h = document.querySelector("h1, h2, h3, h4, h5, h6");
  if (tamanho > 20)
    tamanho--;
    h.style.fontSize=tamanho+"px";
}

function aumentar(){
  let h = document.querySelector("h1, h2, h3, h4, h5, h6");
  if (tamanho < 30)
    tamanho++;
    h.style.fontSize=tamanho+"px";
}
