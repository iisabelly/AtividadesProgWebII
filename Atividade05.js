    lista = document.createElement('ul');
    lista.id = "lcidades";
    document.body.append(lista);
    document.querySelector('#ddd').addEventListener("change", buscardados);

    function buscardados(ev) {
        fetch(`https://brasilapi.com.br/api/ddd/v1/${ev.target.value}`)
        .then(resposta => resposta.json())
        .then(cidades => {
            completalista(cidades.cities);
        });
    };

    function completalista(valor){
        limpalista();
        tamanhodados = valor.length;
        for (let i = 0; i < tamanhodados; i++){
            topico = document.createElement('li');
            topico.textContent = valor[i];
            document.querySelector("#lcidades").append(topico);
        };
    };

    function limpalista(){
        topicos = document.querySelectorAll('li');
        for(let topico of topicos){
            topico.remove();
        };
    };
