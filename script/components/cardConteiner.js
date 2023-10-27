import { Card } from "./card.js"

export const cardConteiner = (productos) => {

    let section=document.createElement("section")
    section.setAttribute("id","catalogo")

    productos.forEach(element => {
        const card = Card(element);

        section.append(card);
    }); 

    return section;
}