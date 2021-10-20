    const topicosh2 = document.querySelectorAll('h2');
    const topicos = new Array();

    topicosh2.forEach(elementos =>{
        topicos.push(elementos.textContent);

        const topo = document.createElement('a');
        topo.setAttribute('name', elementos.textContent);
        elementos.append(topo);

        const voltar = document.createElement('a');
        voltar.setAttribute('href', '#');
        voltar.textContent = "Voltar ao topo";
        
        elementos.parentElement.insertBefore(voltar, elementos.nextElementSibling);
    });

    const lista = document.querySelector("ol");
    topicos.forEach(topico =>{
        const topicolista = document.createElement('li');
        lista.append(topicolista);

        const topicoslink = document.createElement('a');
        topicoslink.setAttribute('href', `#${topico}`);
        topicoslink.textContent = topico;
        topicolista.append(topicoslink);
    });
