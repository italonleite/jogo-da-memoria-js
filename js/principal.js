
function alterarNivel() {
    var ul = document.querySelector("#imagem");
    ul.innerHTML = "";
    var nivel = document.querySelector("#nivel").value;
    var listaImagens = BuscarImagens(nivel);
    CriarPares(listaImagens);


}

function CriarPares(listaImagens) {
    var cloneListaImagens = [...listaImagens];
    var ul = document.querySelector("#imagem");
    for (var i = 0; i < listaImagens.length; i++) {
        var li = document.createElement("li");
        li.textContent = listaImagens[i].titulo;
        ul.appendChild(li);
    }

    for (var i = 0; i < cloneListaImagens.length; i++) {
        var li = document.createElement("li");
        li.textContent = listaImagens[i].titulo;
        ul.appendChild(li);
    }

}

function BuscarImagens(nivel) {
    var listaImagens = [];
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
        listaImagens.push(imagensDiretorio[i]);
    }

    return listaImagens;
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


