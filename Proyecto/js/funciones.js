let userArray = [];

function userStorage(){
    const strge = JSON.stringify(userArray);
    localStorage.setItem("UserData",strge);
    console.log("Creado");
}

function userRegister(){
    var rname = document.getElementById("inptname").value;
    var rlname = document.getElementById("inptlname").value;
    var remail = document.getElementById("inptemail").value;
    var rpass = document.getElementById("inptpassw").value;
    let regArray = JSON.parse(localStorage.getItem("UserData")) || [];
    
    if (regArray.some(user => user.email === remail)) {
        alert("El Email ya esta registrado.");
        return;
    }
    regArray.push({name: rname, lastname: rlname, email: remail, password: rpass});
    localStorage.setItem("UserData", JSON.stringify(regArray));
    console.log(regArray);
}

$("#loginform").submit(function (e) {
    e.preventDefault();

    let usuario = document.getElementById("inptemail").value;
    let passw = document.getElementById("inptpassw").value;
    let logininfo = JSON.parse(localStorage.getItem("UserData"));
    
    if(logininfo.some(user => user.email === usuario) && logininfo.some(pass => pass.password == passw)){
        alert("Bienvenido");
        window.location.href = "loggedver/idxadmver.html";
    
    }else if(usuario == "" || passw == ""){
        alert("Porfavor ingrese los datos solicitados");
    }else{
        alert("Usuario no Encontrado");
    }    
    
});

function mostrarDatos(){
    
}

function llamarFuncion(){
    mostrarDatos();
}

function paginaLog(){
    window.location.replace("loggedver/idxadmver.html");
    console.log("Error");
}

var backg = document.getElementById("bgnlgn");

const nswitch = document.getElementById("nSwitch");
            function cambiarTema(img){
                if(img.target.checked){
                    $("#navbar").removeClass("bg-body-tertiary");
                    $("#navbar").addClass("bg-dark");
                    $("#navbar").addClass("navbar-dark");
                    $("#catoffcanv").attr("data-bs-theme", "dark");
                    $("#title").attr("style", "color: white; font-family:fuente1;");
                    $("#h4hora").addClass("darkclass");
                    backg.src = "img/bgnindexn.jpg";
                } else {
                    $("#navbar").removeClass("bg-dark");
                    $("#navbar").removeClass("navbar-dark");
                    $("#navbar").attr("style", "background-color: #e0f2ff;");
                    $("#catoffcanv").attr("data-bs-theme", "#");
                    $("#h4hora").removeClass("darkclass");
                    $("#title").attr("style", "color: #212529; font-family:fuente1;");
                    backg.src = "img/bgnindex.jpg";
                }
            }
            nswitch.addEventListener('change', cambiarTema);


            var backgl = document.getElementById("bgnlgnl");
            const nlswitch = document.getElementById("nlSwitch");
                        function cambiarlTema(imge){
                            if(imge.target.checked){
                                $("#lnavbar").removeClass("bg-body-tertiary");
                                $("#lnavbar").addClass("bg-dark");
                                $("#lnavbar").addClass("navbar-dark");
                                $("#catoffcanv").attr("data-bs-theme", "dark");
                                $("#title").attr("style", "color: white; font-family:fuente1;");
                                backgl.src = "../img/bgnindexn.jpg";
                            } else {
                                $("#lnavbar").removeClass("bg-dark");
                                $("#lnavbar").removeClass("navbar-dark");
                                $("#lnavbar").attr("style", "background-color: #e0f2ff;");
                                $("#catoffcanv").attr("data-bs-theme", "#");
                                $("#title").attr("style", "color: #212529; font-family:fuente1;");
                                backgl.src = "../img/bgnindex.jpg";
                            }
                        }
                        nlswitch.addEventListener('change', cambiarlTema);



function Apireloj(){
    fetch('http://worldtimeapi.org/api/timezone/America/Santiago')
        .then(response => response.json())
        .then(data =>{
            let h4hora = document.getElementById("h4hora");
            
            var hora = data.datetime.substring(11, 19);

            h4hora.innerHTML = "Hora: " + hora;
        })
}
function actualizaReloj(){
    Apireloj();
    setInterval(Apireloj, 1000);
}
