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
        mensajeError.innerText = '* Error! El nombre debe tener mas de 5 caracteres!!'
        mensajeError.style.color = 'red'
    }
    else{
        swal({
            title: 'Enviaste tu consulta!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
     
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
        mensajeError.style.display = 'none'
    }
}
