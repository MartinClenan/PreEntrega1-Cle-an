let saldoInicial
let opciones
let extra
let saldo = 0
let retiro
let usuario = prompt("Ingrese su nombre de usuario: ")
do{
    saldoInicial = saldo
    function saludarUsuario(){
        return ("Hola " + usuario + " bienvenido a su cajero virtual su saldo inicial es de: " + saldoInicial + "$" );
    }
    alert(saludarUsuario())

    opciones = prompt("Elija opción a realizar:  \n 1-Ingresar dinero en cuenta. \n 2-Retirar dinero de la cuenta. \n 3-Salir. " )

    switch(opciones){
        case "1": 
            extra = parseFloat(prompt("Digite la cantidad de dinero a ingresar: "))
            saldo = saldoInicial + extra
            alert("Dinero en cuenta: " + saldo + "$")
            break;

        case "2":
            retiro = parseFloat(prompt("Digite la cantidad de dinero a retirar: "))

            if(retiro > saldoInicial){
            alert("No tiene el saldo suficiente.")
            }
        else{
            saldo = saldoInicial - retiro
            alert("Saldo en cuenta: " + saldo + "$")
        }
        break;
    case "3": 
        break;
    default:
        alert("Opcion no valida.")
        break;
    }

    otraOperacion = confirm("¿Desea realizar otra operacion?");
}while(otraOperacion)