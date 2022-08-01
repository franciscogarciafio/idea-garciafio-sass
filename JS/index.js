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

//juan, no se porque no me funciona el prompt del appellido, por ende no me concatena el nombre completo.
//let nombre="fran"
//let apellido="garcia"
//
//
//nombre= (prompt("ingrese su nombre"));
//
//apellido=(prompt("ingresa tu apellido"));
//
//let nombrecompleto= "completo"
//nombrecompleto= nombre+apellido
//alert("Bienvenido a nuestra paguina "+ nombrecompleto);
//
//console.log(nombrecompleto);

//aplicando correccion propuesta por el tutor juna

//let ingreso = -1;
//
//
//
//function multiplicar(numero1,numero2) {
//    let result= numero1*numero2
//    return result
//}
//
//let result= multiplicar(precio,0.05)
//
//alert("El valor de la escrituracion es de $" + result)
//
//let resultado = sumar(result,precio);
//
//alert("El valor total de la propiedad con escritura es de $" + resultado)


//const inmueble = []
//function propiedad(nombre, precio){
//        this.nombre= nombre
//        this.precio= precio
//}
//
//
//const propiedad1= new propiedad("campo","30000");
//const propiedad2= new propiedad("casa","150000");
//const propiedad3= new propiedad("departamento","10000");
//const propiedad4= new propiedad("quinta","90000");
//const propiedad5= new propiedad("local","50000");
//const propiedad6= new propiedad("galpon","450000");
//
//inmueble.push(propiedad1)
//inmueble.push(propiedad2)
//inmueble.push(propiedad3)
//inmueble.push(propiedad4)
//inmueble.push(propiedad5)
//inmueble.push(propiedad6)
//
//let inmuebles = []
//
//for(let i=0; i < inmueble.length; i++){
//    console.log(typeof(inmueble[i]))
//    if(typeof(inmueble[i]) == 'object' ){
//        inmuebles.push(inmueble[i])
//    }
//}
//
//console.log(inmuebles)
//
//for(itemInmueble of inmuebles){
//    console.log(`quiero ${inmueble.nombre} y su precio es ${inmueble.precio}`)
//}

let formularios = document.querySelector
('#formularios')
let mensajeError = document.querySelector('.errorFormulario')
//console.log(formularios);
formularios.addEventListener('submit', validar)


function validar(e){
    e.preventDefault()
    console.log(e)
    let formArray = e.target
    console.log(e)

    let nombre = formArray[1]
    let email = formArray[2]
    let telefono = formArray[3]
    let mensaje = formArray[4]

    if(nombre.value.length < 5){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! El usuario debe tener mas de 5 caracteres!!'
        mensajeError.style.color = 'red'
    }else{
        mensajeError.style.display = 'none'
    }
     
    if(!email.value){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! el email no puede estar vacia'
        mensajeError.style.color = 'red'
    }
    if(!telefono.value){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! el telefono no puede estar vacia'
        mensajeError.style.color = 'red'
    }
    if(!mensaje.value){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! Por favor complete su mensaje'
        mensajeError.style.color = 'red'
    }
      
}


