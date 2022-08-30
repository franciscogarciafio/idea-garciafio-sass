//const productos = [
//    {
//    id: 1,
//    nombre: "casa en alquiler",
//    precio: " $35.000",
//    ubicacion: "Jesus Maria",
//    stock: 1,
//    img:'https://i.ibb.co/xDKrXct/camp2.png'
//    },
//    {
//    id: 2,
//    nombre: "campo en alquiler",
//    precio: "$120.000",
//    ubicacion: "Villa del Totoral",
//    stock: 1,
//    img: 'https://i.ibb.co/DRjdCqJ/camp3.png'
//    },
//    {
//    id: 3,
//    nombre: "Departamento en alquiler",
//    precio: "55.000",
//    ubicacion: "Colonia caroya",
//    stock: 1,
//    img: 'https://i.ibb.co/5FY1hdR/ext3.png'
//    },
//    {
//    id: 4,
//    nombre: "casa en alquiler",
//    ubicacion: "Villa del totoral",
//    precio: "$40.000",
//    stock: 1,
//    img: 'https://i.ibb.co/QbFC6rZ/exterior1.png'
//    },
//    {
//    id: 5,
//    nombre: "chalet en elaquiler",
//    precio: "$150.000",
//    ubicacion: "Villa del totoral",
//    stock: 1,
//    img: 'https://i.ibb.co/z7vxnTB/ext2.png'
//    },
//    {
//    id: 6,
//    nombre: "terreno en alquiler",
//    precio: "$10.000",
//    ubicacion: "Villa del totoral",
//    stock: 1,
//    img: 'https://i.ibb.co/RyWL5NX/ext4.png'
//    }
//]

const mainAlquiler = document.querySelector('.main')

let url = 'https://github.com/franciscogarciafio/idea-garciafio-sass/db.json' 
//url es el ENDPOINT ! 
console.log(url);
fetch(url)
    .then((response) => {
        console.log(response.json()) // esto es una promesa por eso necesito OTRO .then para obtener la informacion que estoy buscando
        return response.json()
    })
    .then((productos) => {
        console.log(productos)
        //let personajes = json.results
        let propiedades = productos.productos

        propiedades.forEach(propiedad => {
            const {id, nombre, precio, ubicacion, stock, img} = propiedad
            mainAlquiler.innerHTML +=  `<article class="seccion_ventas">
            <div class="descripcion">
                <h3 class="ventas_propiedad1">${nombre}</h3>
                <h4 class="ventas_propiedad3">${ubicacion}</h4>
                <h4 class="ventas_propiedad2">${precio}</h4>
                <div class="imagen">
                <img class="img-js" src="${img}" alt="${nombre}">
                 </div>
                <div class="boton">Reservar la Propiedad</div>
                <input type='hidden' class='info-id' value="${id}"/>
            </div>
        </article>`

        let botonProd = document.querySelector(`.boton-${id}`)
})
})
//For para insertar productos al main segun mi array de objetos

//for(producto of productos){
//    //Uso desestructuracion para no repetir producto.propiedad
//    const {id, nombre, precio, ubicacion, stock, img} = producto
//
//    mainAlquiler.innerHTML +=  `<article class="seccion_ventas">
//                                <div class="descripcion">
//                                    <h3 class="ventas_propiedad1">${nombre}</h3>
//                                    <h4 class="ventas_propiedad3">${ubicacion}</h4>
//                                    <h4 class="ventas_propiedad2">${precio}</h4>
//                                    <div class="imagen">
//                                    <img class="img-js" src="${img}" alt="${nombre}">
//                                     </div>
//                                    <div class="boton">Reservar la Propiedad</div>
//                                    <input type='hidden' class='info-id' value="${id}"/>
//                                </div>
//                            </article>`
//
//    let botonProd = document.querySelector(`.boton-${id}`)
//}

const botonesVerDetalle = document.querySelectorAll('.boton')
const popup = document.querySelector('.popupDetalle')



//Como tengo un array donde todos los btoones tienen la misma clase, uso el querySelectorAll y recorro ese array dandoles un evento de onclick
for(verDetalle of botonesVerDetalle){
    verDetalle.onclick = (e) => {
        popup.classList.remove('d-none')
        let id = e.target.nextElementSibling.value
        imprimirDetalle(id, popup)
    }

}

let storage = []

function imprimirDetalle(id, insertBox){
    let producto = productos[id-1]
    const {nombre, precio, stock, img} = producto

    insertBox.innerHTML = `<div>
                                <div class="closePopup">Salir</div>
                                <section class="product-detail">
                                    <div class="imagen">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="descripcion-detail">
                                        <h3>${nombre}</h3>
                                        <p><strong>$ ${precio}</strong></p>
                                        <div class="click">
                                            <span class="less">-</span>
                                            <span class="resultado">0</span>
                                            <span class="more">+</span>
                                        </div>
                                    <div class="botonCarrito">AGREGAR</div>

                                    </div>
                                </section>
                            </div>`

    const closePopup = document.querySelector('.closePopup')
    const more = document.querySelector('.more')
    const less = document.querySelector('.less')
    const resultado = document.querySelector('.resultado')
    const agragarCarrito = document.querySelector('.botonCarrito')
    let contador = 0

    more.onclick = () => {
        contador++
        contador = contador > stock ? stock : contador
        resultado.innerText = contador
    }

    less.onclick = () => {
        contador--
        contador = contador < 0 ? 0 : contador
        resultado.innerText = contador
    }

    closePopup.onclick = () => {
        popup.classList.add('d-none')
    }
        
    agragarCarrito.onclick = () => {
        if(contador != 0){
            //agrego al carrito
            producto.agregadoAlCarrito = contador
            storage.push(producto)
            sessionStorage.setItem('carrito', JSON.stringify(storage))

            swal({
                title: `Agregaste ${producto.agregadoAlCarrito} ${nombre} a tu carrito!`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
           
        }else{
            //no agregues al carrito - mensaje error
            swal({
                title: 'Error!',
                text: 'No podemos agregar 0 productos al carrito',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
}


