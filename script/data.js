export const Productos = [
    {
        id: "producto",
        nombre: "Campera puffer",
        color: "Negro",
        thumbnail: "../img/1.jpg",
        talle: "M,L",
        precio: 3000,
    },
    {
        id: "producto1",
        nombre: "Cargo beige",
        color: "Beige",
        thumbnail: "../img/2.jpg",
        talle: "S,M,L",
        precio: 1300,
    },
    {
        id: "producto2",
        nombre: "Cargo verde",
        color: "Verde",
        thumbnail: "../img/3.jpg",
        talle: "S,M,L",
        precio: 1300,
    },
    {
        id: "producto3",
        nombre: "Remera Los Angeles",
        color: "Beige",
        thumbnail: "../img/4.jpg",
        talle: "UNICO",
        precio: 1000,
    },
    {
        id: "producto4",
        nombre: "Remera oversize",
        color: "Gris",
        thumbnail: "../img/5.jpg",
        talle: "UNICO",
        precio: 1100,
    },
    {
        id: "producto5",
        nombre: "Remera mariposas",
        color: "Beige",
        thumbnail: "../img/6.jpg",
        talle: "UNICO",
        precio: 1300,
    }
];
const sale = [
    {
        id: 8,
        nombre: "Pollera cuero",
        color: "Rojo",
        thumbnail: "../img/7.jpg",
        talle: "UNICO",
        precio: 1000,
    },
    {
        id: 9,
        nombre: "Remera smile",
        color: "Negro",
        thumbnail: "../img/8.jpg",
        talle: "UNICO",
        precio: 1200,
    },
    {
        id: 10,
        nombre: "Remera top",
        color: "Blanco",
        thumbnail: "../img/9.jpg",
        talle: "UNICO",
        precio: 900,
    }
];

const productosJSON = JSON.stringify(Productos);

localStorage.setItem("Productos", productosJSON);