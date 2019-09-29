
function alterarNivel() {
    limparListaImagens();
    var nivel = document.querySelector("#nivel").value;
    var listaImagens = BuscarImagens(nivel);
    CriarPares(listaImagens);


}
function limparListaImagens() {
    var div = document.querySelector(".back");
    div.innerHTML = "";
}

function CriarPares(listaImagens) {
    var cloneListaImagens = [...listaImagens];
  
    //Montar Cards Lista de Imagens
    for (var i = 0; i < listaImagens.length; i++) {
        var img = document.createElement("img");
        var p = document.createElement("p");        
        img.src = 'images/' + listaImagens[i].id + '.jpg';
        p.textContent = listaImagens[i].titulo;        
        document.querySelector(".back").appendChild(img);
        document.querySelector(".back").appendChild(p);
         
    }
     //Montar Cards clineListaImagens
    for (var i = 0; i < cloneListaImagens.length; i++) {
        var img = document.createElement("img");
        var p = document.createElement("p");
        img.src = 'images/' + cloneListaImagens[i].id + '.jpg';
        p.textContent = cloneListaImagens[i].titulo;
        document.querySelector(".back").appendChild(img);
        document.querySelector(".back").appendChild(p);
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
        valor: 'motocross',
        titulo: 'motocross',
    },
    {
        id: 5,
        valor: 'nadador',
        titulo: 'nadador',
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


var card = document.querySelector('.card');
card.addEventListener('click', function () {
   card.classList.toggle('is-flipped');
});


