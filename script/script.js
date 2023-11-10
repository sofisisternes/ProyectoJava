/*
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
];*/

/* INICIO DE SESION */
const abrirFormularioImagen = document.getElementById("abrirFormulario");
const formularioContainer = document.getElementById("formulario-container");

// Función para mostrar y ocultar el formulario
let formularioVisible = false;

function toggleFormulario() {
    if (formularioVisible) {
        formularioContainer.style.display = "none";
    } else {
        formularioContainer.style.display = "block";
    }
    formularioVisible = !formularioVisible;
}

/*Para hacer que aparezca el form*/
abrirFormularioImagen.addEventListener("click", function () {
    toggleFormulario();
});

const formularioElement = document.getElementById("formulario");
formularioElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = formularioElement.querySelector("#email").value;
    /*Local Storage*/
    localStorage.setItem("email", email);
    /* Oculta el formulario */
    toggleFormulario();
});

const formularioUsuario = document.querySelector("form");
formularioUsuario.addEventListener("click", (event) => {
    event.stopPropagation();
});

const emailGuardado = localStorage.getItem("email");
if (emailGuardado) {
   /*  console.log(emailGuardado)
   Swal.fire("Bienvenido, " + emailGuardado + "!");*/
}

/*BUSQUEDA Y USO DE EVENTOS CLICK*/
const productosJSON = localStorage.getItem("Productos");
const Productos = JSON.parse(productosJSON);


const buscarButton = document.getElementById("buscarButton");

buscarButton.addEventListener("click", function () {
    buscarProductos();
});


function buscarProductos() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();

    const productosFiltrados = Productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));

    /* Muestra los productos*/
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach(producto => {
            const productoHTML = `
            <div class="producto">
            <img src= ${producto.thumbnail} alt="producto ropa ${producto.nombre}">
            <p>  ${producto.nombre} </p>
            <p> $${producto.precio}</p>
            <p> ${producto.talle}</p>
            <button onclick="agregarAlcarrito"('${producto.id}') id="agregar-${producto.id}" class="comprarButton">COMPRAR</button>
            </div>`;
            resultados.insertAdjacentHTML("beforeend", productoHTML);
        });
    } else {
        resultados.innerHTML = "<p>No se encontraron productos.</p>";
    }
}

/*carrito*/
const carrito = []
 function agregarAlcarrito (id){
    const catalogo= Productos.find((producto)=>producto.id===id);
    if (catalogo && !carrito.some((item)=>item.id===id)){
        const btnAdd= document.getElementById(`agregar-${id}`)
        btnAdd.innerHTML = 'Producto Agregado'
        btnAdd.disabled = true;
        carrito.push (catalogo);
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
 }
 function mostrarCarrito () {
 const carritoHtml= document.querySelector('.carritoBody')
 carritoHtml.innerHTML = 'Carrito Vacio'
 const carritoLocalStorage = JSON.parse(localStorage.getItem('Productos'));
 carritoLocalStorage.forEach((item)=> {
    carritoHtml.innerHTML += `
    <article class="carritoProductos" id=${item.id}>
    <img src= ${item.thumbnail} alt="producto ropa ${item.nombre}" class="carritoImagen">
    <div class="carritoTexto">
        <p>${item.nombre}</p> 
        <p>$${item.precio}</p>
        <a class="borrarButton" data-id="${item.id}"><span><i class="bi bi-trash3-fill trash"></i></span></a>
    </div>
    </article>
    `;
    
 })
 }
 mostrarCarrito()