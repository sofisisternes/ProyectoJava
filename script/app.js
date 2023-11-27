import { cardConteiner }from "./components/cardConteiner.js"
import { Productos } from "./data.js";

export function app() {
    let appCatalogo=document.querySelector("#catalogo");

    const contendor_tienda = cardConteiner(Productos)

    appCatalogo.append(contendor_tienda);
}