

// mayor o menor de edad

let edadIngresada = prompt("Ingrese su edad ")

function mayorMenor(edad) {

    for (let i = 1; i <= edad; i++) {
        if(i >= 18){
            console.log("Usted tiene " + i + " años, es mayor de edad");

        }else if(i < 18 && i > 0){
            console.log("Usted tiene " + i + " años, es menor de edad");
        }
}
}



mayorMenor(edadIngresada);

// carrito

const productos = [
    {nombre: "heladera",  precio: 829500},
    {nombre: "bicicleta",  precio: 300000},
    {nombre: "televisor",  precio: 200000},
    {nombre: "cocina",  precio: 300000},
    {nombre: "wafflera",  precio: 40000},
    {nombre: "equipo de audio",  precio: 80000 },
    {nombre: "lavarropas",  precio: 300000},
    {nombre: "computadora",  precio: 500000}

];

let carrito = [];

let seleccion = prompt("Bienvenido, desea comprar algun producto? si o no")

while(seleccion != "si" && seleccion != "no") {
    alert ("Ingrese si o no");
    seleccion = prompt ("Desea comprar algo? si o no");

}

if(seleccion == "si") {
    alert("le mostraremos la lista de productos")
    let totalDeProductos = productos.map( (producto) => producto.nombre + " " + producto.precio + "$");
   alert(totalDeProductos.join(" , "))
} else if (seleccion == "no") {
    alert("Gracias por su visita")

}

while(seleccion != "no") {
    let producto = prompt("agregar producto a tu carrito")
    let precio = 0;

    if (producto == "heladera" || producto == "bicicleta" || producto == "televisor" || producto == "cocina" || producto == "wafflera" || producto == "equipo de audio" || producto == "lavarropas" || producto == "computadora") {
        switch (producto) {
            case "heladera":
            precio = 829500;
            break;
            case "bicicleta":
            precio = 300000;
            break;
            case "televisor":
            precio = 200000;
            break;
            case "cocina":
            precio = 300000;
            break;
            case "wafflera":
            precio = 40000;
            break;
            case "equipo de audio":
            precio = 80000;
            break;
            case "lavarropas":
            precio = 300000;
            break;
            case "computadora":
            precio = 500000;
            break;
            default:
            break;
        } 
        let unidades = parseInt(prompt("cuantas unidades quiere?"));

        carrito.push({producto, unidades, precio})
        console.log(carrito)
        } else {
            alert("no tenemos ese producto");
        }

        seleccion = prompt("Quiere continuar su compra?");

        while(seleccion === "no") {
            alert("Gracias por su compra");
            carrito.forEach((carritoTotal) => {
                console.log(`producto:  ${carritoTotal.producto}, unidades:  ${carritoTotal.unidades}, total a pagar por producto  ${carritoTotal.unidades * carritoTotal.precio}`)
    
            }  )
            break;
        }
    
        }

        const total = carrito.reduce((ecc ,el) => ecc + el.precio * el.unidades, 0);
        console.log(`el total de su compra es: ${total}`);
    

        // color body

        const colorCuerpo = document.body;

        colorCuerpo.style.backgroundColor = "#eee";