const display = document.getElementById('display');
//Añade al display el valor ingresado por el boton correspondiente añadiendole una cifra/numero al valor del display que esta vacio
function appendToDisplay(value) {
    display.value += value;
}
//Vacia el display poniendo su valores como nada (" ")
function clearDisplay() {
    display.value = '';
}
//Borra el ultimo valor ingresado en el display
function deleteLast() {
    let displayCopyValue = display.value; //variable para guardar el ultimo valor
    display.value = displayCopyValue.slice(0, -1); //utiliza una cadena para indicar cual valor se quiere borrar, el ultimo en el caso
}
//Calcula el resultado de la operación ingresada
function calculateResult() {
    try {                                   //Inicia un try que ejecutara el codigo siempre que los valores esten bien ingresados
        let result = eval(display.value);   //usando eval se evalua los valores que hayan en el display sacados de display.value devolviendo el resultado y asignandolo a la variable result
        display.value = result;             //Se le asigna a display.value el valor de resultado
    } catch (error) {                       //se abre un catch que se ejecuta cuando sale un error en try
        alert('Expresión Invalida')         //devuelve un mensaje de error si el catch se activa
    }
}