let ingreseUsuario= ""


for(let i = 0; i < 10; i ++){
    ingreseUsuario=prompt("ingrese un numero")

    if(ingreseUsuario == 1){
        alert("campos")
    }
    else if(ingreseUsuario==2){
        alert("casas")
    }
    else if(ingreseUsuario==3){
        alert("alquiler")
    }
    else if(ingreseUsuario==4){
        alert("compra")
    }
    else if(ingreseUsuario==5){
        alert("ventas")
    }
    else if(ingreseUsuario==6){
        alert("tasacion")
    }

    if (ingreseUsuario == "ESC"){
        break
    } 
}

let nombre
let edad
let mensaje
mensaje=("usted tiene")
nombre = prompt("ingrece su nombre")
edad = prompt("ingrese su edad")

console.log(nombre+mensaje+edad);