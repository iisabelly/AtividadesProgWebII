    const topicos = document.querySelectorAll('h2');
    const topicoslista = new Array();
    topicosindividuais = new Object();
    topicosindividuais = document.getElementById('topico01').textContent;
    topicoslista.push(topicosindividuais);
    topicosindividuais = document.getElementById('topico02').textContent;
    topicoslista.push(topicosindividuais);
    topicosindividuais = document.getElementById('topico03').textContent;
    topicoslista.push(topicosindividuais);

    alista = "<ol start='1'><li><a href='#topico01'>"+topicoslista[0]+"</a></li><li><a href='#topico02'>"+topicoslista[1]+"</a></li><li><a href='#topico03'>"+topicoslista[2]+"</a></li></ol>"

    document.getElementById("lista").innerHTML = alista;

    olinklista = "<br><a href='#lista'>voltar</a>"
    document.getElementById("topico01").innerHTML += olinklista;
    document.getElementById("topico02").innerHTML += olinklista;
    document.getElementById("topico03").innerHTML += olinklista;
