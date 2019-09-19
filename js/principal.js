
function alterarNivel() { 
    var nivel = document.querySelector("#nivel").value;
    BuscarImagens(nivel) 
}


var imagensDiretorio = [
    {
        id: 1,
		nome: 'basebal',
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
        id: 7,
		valor: 'bola', 
        titulo: 'bola',       
    },
    
]


function BuscarImagens() { 
    if (nivel.value == "facil") { 
        for (var i = 0; i < 3; i++) { 
            console.log(imagensDiretorio[i]);
            
        }
        
    }
    else if (nivel.value == "medio") { 
        for (var i = 0; i < 6; i++) { 
            console.log(imagensDiretorio[i]);
        }
    }
    
}





