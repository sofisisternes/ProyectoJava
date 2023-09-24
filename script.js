function ingresar() {
    while (true) {
        let pais = prompt("De qué país sos?")
        if (pais === "Uruguay") {
            alert("Bienvenidx a Clevy Indumentaria");

            let elegiopcion = prompt("Elige una opción: \n1- Ver Tienda \n2 - Recibir ofertas \n3 - Contacto");

            switch (elegiopcion) {
                case "1":
                    alert("Disfrute de nuestra tienda");
                    break;
                case "2":
                    let ofertas = parseInt(prompt("Escribe tu mail"));
                    alert("Gracias por suscribirte")
                    break;
                case "3":
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
