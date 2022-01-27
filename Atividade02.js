const tamanhoCelula = 40;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {

        let linha = document.createElement('tr');
        tabela.append(linha);
        linha.setAttribute('id', i+1);

        for (let j = 0; j < tamanho; j++) {

            let celula = document.createElement('td');
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;

            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
                celula.onclick = function(){
                    moverpeca(this, celula.querySelector('id'));
            }

            if (i * 8 + j <= 24) {
                celula.append(criapeca('black'));
            } else if (i * 8 + j >= 40) {
                celula.append(criapeca('red'));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
            celula.setAttribute('id', j);
        }
    }
    return tabela;
};

function criapeca(cor) {
    let peca = document.createElement('img');
    peca.setAttribute('src', `${cor}.png`);
    peca.setAttribute('width', `${tamanhoCelula-4}px`);
    peca.setAttribute('height', `${tamanhoCelula-4}px`);
    peca.setAttribute('class', 'img');
    peca.setAttribute('id', cor);
    return peca;
};

var selecionado = false 
var pecaatual;
var celulaatual;

function moverpeca(that) {
    if (selecionado == false){ 
        if (that.querySelector('.img') == null){
            alert('Não é possível movimentar nenhuma peça! Escolha uma peça.');
        } else {
            selecionado = true; 
            pecaatual = that.innerHTML; 
            celulaatual = that; 
        } 
    } else { 
        if (that.querySelector('#red') == null) {
            if (celulaatual.id == that.id + 1 || celulaatual.id == that.id - 1 || celulaatual.id == that.id){
                if (that.querySelector('.img') == null){
                    that.innerHTML = pecaatual;
                    celulaatual.innerHTML = "";
                    selecionado = false;
                } else {
                    alert('Não é possível colocar uma peça aqui! Tente em outra casa.');
                }
            } else {
                alert('Não é possível colocar uma peça aqui! Tente em outra casa.');
            }
        } else {
            if (that.id == celulaatual.id + 1 || that.id == celulaatual.id - 1 || that.id == celulaatual.id){
                if (that.querySelector('.img') == null){
                    that.innerHTML = pecaatual;
                    celulaatual.innerHTML = "";
                    selecionado = false;
                } else {
                    alert('Não é possível colocar uma peça aqui! Tente em outra casa.');
                }
            } else {
                alert('Não é possível colocar uma peça aqui! Tente em outra casa.');
            }
        }
    }
};
