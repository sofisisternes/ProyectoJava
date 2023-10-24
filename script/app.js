import {cardConteiner}from "./components/cardConteiner.js"
import {Productos } from "./data.js";
export const app=()=>{
    let appCatalogo=document.querySelector("#catalogo");
    appCatalogo.append(cardConteiner(Productos));
}