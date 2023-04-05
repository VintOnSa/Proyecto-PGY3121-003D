
let user = "123@f";
let pass = "1234";

function mostrarDatos(){
    let usuario = document.getElementById("inptemail").value;
    let password = document.getElementById("inptpassw").value;

    if(usuario == user && password == pass){
        alert("Login Correcto");
        
    }
    
    else{
        alert("Login Incorrecto");
    }
}


function llamarFuncion(){
    mostrarDatos();
}

