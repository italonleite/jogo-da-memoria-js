function alterarNivel() {
    var nivel = document.querySelector("#nivel").value;
    var resultado = BuscarImagens(nivel);
    CriarPares(resultado);

}

function CriarPares(resultado) {
    var cloneResultado = [...resultado];
    var ul = document.querySelector("#imagem");
    for (var i = 0; i < resultado.length; i++) {
        var li = document.createElement("li");
        li.textContent = resultado[i].titulo;
        ul.appendChild(li);

    }

    for (var i = 0; i < cloneResultado.length; i++) {
        var li = document.createElement("li");
        li.textContent = resultado[i].titulo;
        ul.appendChild(li);
    }
}

function BuscarImagens(nivel) {
    var resultado = [];
    var tamanho = 0;
    switch (nivel) {
        case "facil":
            tamanho = 3;
            break;

        case "medio":
            tamanho = 6;
            break;

        case "dificil":
            tamanho = 9;
            break;
    }

    for (var i = 0; i < tamanho; i++) {
        resultado.push(imagensDiretorio[i]);
    }

    return resultado;
}


var imagensDiretorio = [
    {
        id: 1,
        valor: 'basebal',
        titulo: 'basebal',
    },
    {
        id: 2,
        valor: 'surfista',
        titulo: 'surfista',
    },
    {
        id: 3,
        valor: 'ciclista',
        titulo: 'ciclista',
    },
    {
        id: 4,
        valor: 'bola',
        titulo: 'bola',
    },
    {
        id: 5,
        valor: 'papel',
        titulo: 'papel',
    },
    {
        id: 6,
        valor: 'rede',
        titulo: 'rede',
    },
    {
        id: 7,
        valor: 'tesoura',
        titulo: 'tesoura',
    },
    {
        id: 8,
        valor: 'computador',
        titulo: 'computador',
    },
    {
        id: 9,
        valor: 'mouse',
        titulo: 'mouse',
    },
    {
        id: 10,
        valor: 'teclado',
        titulo: 'teclado',
    },

]


/*var card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});*/


