function escucha(){
    var boton = document.getElementById("demo");
    boton.addEventListener("click", function(){
        alert("¡Hola mundo!");
    });
}
escucha();

function cargada(){
    alert("La pagina cargo correctamente");
}

function encima(){
    var encima = document.getElementById("input");
    encima.addEventListener("mouseover", function(){
        alert("Estas sobre mi"); 
    })        
}
encima();

function afuera(){
    var afuera = document.getElementById("input");
    afuera.addEventListener("mouseout", function(){
        alert("No estas sobre mi");
    })
}    
afuera();    
