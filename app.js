//side menu
var menu_visible= false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if (menu_visible == false){
        menu.style.display ="block";
        menu_visible = true;

    }
    else{
        menu.style.display = "none",
        menu_visible = false
    }
}


//barras de habilidades por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
    }
}

