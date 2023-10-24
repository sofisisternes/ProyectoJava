const Productos = [
    {
        id: 0,
        nombre: "Campera puffer",
        color: "Negro",
        talle: "M,L",
        precio: 3000,
    },
    {
        id: 1,
        nombre: "Cargo beige",
        color: "Beige",
        talle: "S,M,L",
        precio: 1300,
    },
    {
        id: 2,
        nombre: "Cargo verde",
        color: "Verde",
        talle: "S,M,L",
        precio: 1300,
    },
    {
        id: 3,
        nombre: "Remera Los Angeles",
        color: "Beige",
        talle: "UNICO",
        precio: 1000,
    },
    {
        id: 4,
        nombre: "Remera oversize",
        color: "Gris",
        talle: "UNICO",
        precio: 1100,
    },
    {
        id: 5,
        nombre: "Remera mariposas",
        color: "Beige",
        talle: "UNICO",
        precio: 1300,
    }
];
const sale = [
    {
        id: 8,
        nombre: "Pollera cuero",
        color: "Rojo",
        talle: "UNICO",
        precio: 1000,
    },
    {
        id: 9,
        nombre: "Remera smile",
        color: "Negro",
        talle: "UNICO",
        precio: 1200,
    },
    {
        id: 10,
        nombre: "Remera top",
        color: "Blanco",
        talle: "UNICO",
        precio: 900,
    }
];
function ingresar() {
    while (true) {
        let pais = prompt("De qué país sos?").toUpperCase();

        if (pais === "URUGUAY") {
            alert("Bienvenidx a Clevy Indumentaria");

            let elegiopcion = prompt("Elige una opción: \n1- Ver Tienda \n2- Catalogo \n3- SALE \n4- Recibir ofertas \n5- Buscar \n6- Contacto");

            switch (elegiopcion) {
                case "1":
                    alert("Disfrute de nuestra tienda");
                    break;
                case "2":
                    const mostrarProductos = () => {
                        let descripcion = "\n Catalogo \n";
                        Productos.forEach((catalogo) => {
                            descripcion += `\n Nombre: ${catalogo.nombre} \n Precio: $${catalogo.precio} \n Talle: ${catalogo.talle} \n Color: ${catalogo.color}\n`;
                        });
                        alert(descripcion);
                    }
                    mostrarProductos();
                    break;
                case "3":
                    const porcentajeDescuento = 0.2;
                    sale.forEach(producto => {
                        producto.preciosale = Math.round(producto.precio - (producto.precio * porcentajeDescuento))
                    });
                    let descripcion = "\n Productos con descuento \n";
                    sale.forEach((producto) => {
                        descripcion += `\n Nombre: ${producto.nombre} \n Precio original: $${producto.precio} \n SALE: $${producto.preciosale}\n`;
                    });

                    alert(descripcion);
                    porcentajeDescuento();
                    break;
                case "4":
                    let ofertas = prompt("Escribe tu mail");
                    alert("Gracias por suscribirte")
                    break;
                case "5":
                    const todoslosProductos = Productos.concat(sale);
                    while (true) {
                        const busqueda = prompt("Buscar producto");

                        const productosBuscar = todoslosProductos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
                        let descripcionFiltrada = "\n Productos encontrados \n";
                        if (productosBuscar.length > 0) {
                            productosBuscar.forEach((producto) => {
                                descripcionFiltrada += `\n Nombre: ${producto.nombre} \n Precio: $${producto.precio} \n Talle: ${producto.talle}\n`;
                            });
                            alert(descripcionFiltrada);
                            continue;

                        } else {
                            alert("No se encontraron productos con ese nombre");
                            continue;
                        }
                    }
                    break;
                case "6":
                    alert("\nWpp: 099984017 \nIg:Clevy.Indumentaria");
                    break;
                default:
                    alert("Opcion no válida");
                    continue;
            }
            break;
        } else {
            alert("Lo sentimos, no se puede hacer compras fuera de Uruguay");
        }
    }
}
ingresar();

/*productos*/
const contenedor= document.querySelector(".catalogo")
for (const producto of Productos) {
    contenedor.innerHTML += `
    <article id=${producto.id} class="producto1">
    <img src=${producto.thumbnail}>
    <h5>${producto.nombre}</h5>
    <p>${producto.precio}</p>
    <button onclick="AgregarCarrito(id)">Comprar</button>
    </article>`;
}

/*carrito*/
const carrito = []
function AgregarCarrito(id){
const stock = Productos.find((producto)=>producto.id===id);
if (stock && !carrito.some((item)=>item.id===id)){
    carrito.push(stock);
    localStorage.setItem ("carrito", JSON.stringify(carrito));
}
}
/*mostrar carrito*/
const carritoFoto = document.getElementById("carrito-foto");
const carritoDiv = document.querySelector(".carrito");

carritoFoto.addEventListener("click", () => {
    
    if (carritoDiv.style.display === "none") {
        carritoDiv.style.display = "block";
    } else {
        carritoDiv.
        carritoDiv
style.display = "none";
    }
});