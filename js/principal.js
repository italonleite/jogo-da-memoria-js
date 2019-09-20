
function alterarNivel() { 
    var nivel = document.querySelector("#nivel").value;
    BuscarImagens();
    
    
}


function BuscarImagens() { 
  
    if (nivel.value == "facil") { 
        var resultado = [];
        for (var i = 0; i < 3; i++) { 
           resultado.push(imagensDiretorio[i]);

        }
        console.log(resultado)
        
    }
    else if (nivel.value == "medio") { 
        var resultado = [];
        for (var i = 0; i < 6; i++) { 
            resultado.push(imagensDiretorio[i]);
        }
        console.log(resultado)
    }
    else if (nivel.value == "dificil") { 
        var resultado = [];
        for (var i = 0; i < 9; i++) { 
            resultado.push(imagensDiretorio[i]);
        }
        console.log(resultado)
    }
    
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





