$(function(){
    $("#regform").validate({
        rules:{
            name:{
                required: true,
                minlength: 3
            },
            lname:{
                required: true,
                minlength: 3
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required:true,
                minlength: 8
            }
        },
        messages:{
            name:{
                required:"Debe Ingresar su Nombre",
                minlength:"Debe ingresar al menos 3 Caracteres"
            },
            lname:{
                required:"Debe Ingresar su Apellido",
                minlength:"Debe ingresar al menos 3 Caracteres"
            },
            email:{
                required:"El Correo es Obligatorio.",
                email:"Formato correo no valido."
            },
            password:{
                required:"Debe Ingresar una Contraseña",
                minlength:"Debe contener al menos 8 Caracteres"
            }
        }
    })
})

$(function(){
    $("#loginform").validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            password:{
                required:true,
                minlength: 8
            }
        },
        messages:{
            email:{
                required:"El Correo es Obligatorio.",
                email:"Formato correo no valido."
            },
            password:{
                required:"Debe Ingresar una Contraseña",
                minlength:"Debe contener al menos 8 Caracteres"
            }
        }
    })
})