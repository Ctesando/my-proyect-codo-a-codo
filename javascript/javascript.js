const nombre = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(lastname.value.length <3){
        warnings += `El apellido no es válido <br>` 
        entrar = true
    }
    if(address.value.length <5){
        warnings += `La dirección no es válida <br>` 
        entrar = true
    }
    
    if(city.value.length <5){
        warnings += `La ciudad no es válida <br>` 
        entrar = true
    }
    if (nombre.value == "" || lastname.value == "" || email.value == "" || address.value == "" ||city.value == "" || phone.value == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (isNaN(phone.value)){
        alert("El campo teléfono debe ser numérico");
        return false;
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
 
})
