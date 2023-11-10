// Esta funcion se encargar de crear un elemento HTML con los datos que le pasemos por parametro
// Recordar que props es un objeto que contiene todos los datos que le pasamos por parametro a la funcion
export const Card = (props) => {
    // Creando el elemento article
    let article = document.createElement("article")
    
    // Inyectando HTML en el elemento article
    article.innerHTML =
        `
        <img src= ${props.thumbnail} alt="producto ropa ${props.nombre}">
        <h5>${props.nombre}</h5>
        <p>$${props.precio}</p>
        <p>${props.talle}</p>
        <button onclick="agregarAlcarrito('${props.id}')" id="agregar-${props.id}" class="comprarButton">COMPRAR</button>
    `
    return article;
}
