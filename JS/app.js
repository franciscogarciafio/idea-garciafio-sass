import { productos } from "./productos.js";
import { carritoIndex } from "./carritoindex.js";


/* MOSTRAR PRODUCTOS*/

const mostrarProductos = (renderProductos) =>{
    const contenedorProductos = document.getElementById("productoContenedor"); 
    contenedorProductos.innerHTML = ``;
    renderProductos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card", "cardPadre")
        div.innerHTML = 
        ` <div class = "card">
             <h5 class="ventas_propiedad1">${producto.nombre}</h5>
            <img src="${producto.img}" class="card-img" alt="imagenProducto">
            <div >
                <h4 class="ventas_propiedad3">Ubicado en ${producto.ubicacion}</h4>
                <p class="card-text">Precio mensual: $${producto.precio}</p>
                <button class="botonCompra" id="${producto.id}">Reservar la Propiedad</button>
            </div>
        </div>`
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`${producto.id}`)

        boton.addEventListener("click", ()=> {
            carritoIndex(producto);
        })
    })
}
export {mostrarProductos}












































