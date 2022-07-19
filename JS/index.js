//let ingreseUsuario= ""


//for(let i = 0; i < 10; i ++){
//ingreseUsuario=prompt("ingrese un numero")
//
//if(ingreseUsuario == 1){
//    alert("campos")
//}
//else if(ingreseUsuario==2){
//    alert("casas")
//}
//else if(ingreseUsuario==3){
//    alert("alquiler")
//}
//else if(ingreseUsuario==4){
//    alert("compra")
//}
//else if(ingreseUsuario==5){
//    alert("ventas")
//}
//else if(ingreseUsuario==6){
//    alert("tasacion")
//}
//
//if (ingreseUsuario == "ESC"){
//    break
//} 
//

//juan, no se porque no me funciona el prompt del appellido, por ende no me concatena el nombre completo.

let nombre= (prompt("ingrese su nombre"));
//let apellido= (prompt("ingrese su apellido"));
let apellido= ("Garcia");
alert("Bienvenido a nuestra paguina" + nombre)


//aplicando correccion propuesta por el tutor juna
let ingreso = -1;


while(ingreso != 0){
    ingreso = parseInt(prompt("Ingrese 1 para ver campos \n Ingrese 2 para ver casas \n Ingrese 3 para ver alquileres \n Ingrese 4 para ver compras \n Ingrese 5 para ver ventas \n Ingrese 6 para ver tasaciones \n"))
    switch(ingreso){
        case 0: alert('Saliste del programa')
            break;
        case 1: alert('campos')
            break;
        case 2: alert('casas')
            break;
        case 3: alert('alquileres')
            break;
        case 4: alert('compras')
            break;
        case 5: alert('ventas')
            break;
        case 6: alert('tasaciones')
            break;
        default:
            ingreso = -1;
            break;
    }
}

//funcion

let precio= 30
precio=prompt('ingrese valor en pesos de la propiedad a comprar')

function sumar (num1,num2) {
    let resultado = num1 + num2
    return resultado
}


function multiplicar(numero1,numero2) {
    let result= numero1*numero2
    return result
}

let result= multiplicar(precio,0.05)

alert("El valor de la escrituracion es de $" + result)

let resultado = sumar(result,precio);

alert("El valor total de la propiedad con escritura es de $" + resultado)


