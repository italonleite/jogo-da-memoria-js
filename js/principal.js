function alterarNivel() {
    var nivel = document.querySelector("#nivel").value;
    var resultado = BuscarImagens(nivel);
    console.log(resultado);
}

function BuscarImagens(nivel) {
var resultado = [];
var tamanho = 0;

switch (nivel)
{
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
valor: 'bola',
        titulo: 'bola',      
    },
    {
        id: 6,
valor: 'bola',
        titulo: 'bola',      
    },
    {
        id: 7,
valor: 'bola',
        titulo: 'bola',      
    },
    {
        id: 8,
valor: 'bola',
        titulo: 'bola',      
    },
    {
        id:9,
valor: 'bola',
        titulo: 'bola',      
    },
    {
        id: 10,
valor: 'bola',
        titulo: 'bola',      
    },
   
]

