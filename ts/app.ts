let formulario:any=document.getElementById("formulario");
let nombre:any=document.getElementById("nombre");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let correo:any=document.getElementById("email");
let telefono:any=document.getElementById("telefono");
let mensaje:any=document.getElementById("mensaje");
let slider:any = document.getElementById("conocimiento");
let radio:any=document.getElementsByClassName("rad");
let texto:any=document.getElementById("descripcion");
let checks:any=document.getElementsByClassName("check");

var output:any = document.getElementById("sliderNum");
output.innerHTML = slider.value; 


formulario.addEventListener("submit",function(evento){
    console.log(nombre.value + apellidos.value + rut.value + correo. value + telefono. value);

    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
    
    evento.preventDefault();
});


/* muestra el valor del range input*/

slider.oninput = function() {
    output.innerHTML = this.value;
}


/* funcion utilizada para limpiar los input */
function limpiarDatos(){
    

    nombre.value="";
    apellidos.value="";
    rut.value="";
    correo.value="";
    telefono.value="";
    slider.value="50";
    output.innerHTML="50";

    for(let index = 0; index <6; index++) {
       checks[index].checked=false;
    }
    for(let index = 0; index <5; index++) {
        radio[index].checked=false;
    }
    texto.value="";

    document.documentElement.scrollTop = 0;
}

/* se cerciora de si todos los requisitos son cumplidos*/

function requisitos(){       
    
    if (formatoRut()==true && phone()==true && checklist()==true) {
        return true;
    }else{
        return false;
    }
}

/*se cerciora de si se eligio al menos un lenguaje de programacion*/ //tiene codigo innecesario

function checklist(){
    let checked:boolean=false;
    for(let index = 0; index <6; index++) {
        if (checks[index].checked==true) {
            checked=true;          
        }
    }
        if (checked==false) {
            alert("Debe seleccionar uno o mas lenguajes de programacion");
        }
        return checked;
}

/* se cerciora de si ingreso un numero de telefono valid*/

function phone(){
    let i:any=telefono.value;
    
    if (i.length != 9) {
        alert("El numero telefonico debe contener 9 digitos");
        return false;
    }else{
        return true;    
    }
}

/* se cerciora de si se ingreso un rut en el formato valido */
function formatoRut(){
    let i:any=rut.value.length;

    // revisa que solo ingresen numeros antes del guion
    for (let index = 0; index <= i-3; index++) {
        switch(rut.value[index]){   
            case "0":
                break;
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            case "8":
                break;
            case "9":
                break; 
            default:
                alert("El RUT no debe tener puntos y debe contener digito verificador Ej: 0000000-0")
                return false;
                break;       
        }
    }

    //revisa si se ingreso un guion
    if (rut.value[i-2]!="-") {
        alert("El RUT no debe tener puntos y debe contener digito verificador Ej: 0000000-0")
       return false; 
    }

    //revisa si se ingreso un numero o una K como digito verificador
    switch(rut.value[i-1]){
        case "0":
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break; 
        case "k":
            break;
        default:
            alert("El RUT no debe tener puntos y debe contener digito verificador Ej: 0000000-0")
            return false;
            break;        
    }
        return true;    //retorna true si se cumplieron las indicaciones
    }