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

//let nombre= (prompt("ingrese su nombre"));
//let apellido= (prompt("ingrese su apellido"));
//let apellido= ("Garcia");
//alert("Bienvenido a nuestra paguina" + nombre)


//aplicando correccion propuesta por el tutor juna
//let ingreso = -1;


//}


//function multiplicar(numero1,numero2) {
    //let result= numero1*numero2
    //return result
//}

//let result= multiplicar(precio,0.05)

//alert("El valor de la escrituracion es de $" + result)

//let resultado = sumar(result,precio);

//alert("El valor total de la propiedad con escritura es de $" + resultado)

const inmueble = []
function propiedad(nombre, precio){
        this.nombre= nombre
        this.precio= precio
}


const propiedad1= new propiedad("campo","30000");
const propiedad2= new propiedad("casa","150000");
const propiedad3= new propiedad("departamento","10000");
const propiedad4= new propiedad("quinta","90000");
const propiedad5= new propiedad("local","50000");
const propiedad6= new propiedad("galpon","450000");

inmueble.push(propiedad1)
inmueble.push(propiedad2)
inmueble.push(propiedad3)
inmueble.push(propiedad4)
inmueble.push(propiedad5)
inmueble.push(propiedad6)

let inmuebles = []

for(let i=0; i < inmueble.length; i++){
    console.log(typeof(inmueble[i]))
    if(typeof(inmueble[i]) == 'object' ){
        inmuebles.push(inmueble[i])
    }
}

console.log(inmuebles)

for(inmueble of inmuebles){
    console.log(`quiero ${inmueble.nombre} y su precio es ${inmueble.precio}`)
}
