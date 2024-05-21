

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