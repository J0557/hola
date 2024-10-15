// /* =========== FUNCIONES EN JS =========== */


// function hello() {
//     console.log('Hola JS');
//     console.log('Hola HTML');
//     console.log('Hola CSS');
// }


// hello()

// /**
//  * Funcion
//  *  retorna una cadena que dice `Hola JS`
//  */
// function hello() {
//     return 'Hola JS';
// }

// // const result = hello();
// console.log(hello());

// function hello() {
//     return {
//         nombre: 'Roul'
//     }
// }

// console.log(hello());
//funcion que retorna a otra funcion
/*
function hello() {
    return function() {
        return 'Hola JS';
    }
}

console.log(hello())

*/

//====== USO DE PARAMETROS EN FUNCIONES =====
/*
function hellpconJS(name){
return 'Hola ' + name

}

console.log('Jos');

*/

//PASAR MAS DE UN PARAMMETRO A LA FUNCION
/*
function hellpconJS(x,y){
    return x + y;
   
    }

    console.log(hellpconJS(10,20));  
    console.log(hellpconJS(10,80));  
    */
/*
 function hellpconJS(x,y=0)
   {

        return x * y;
       
    }
       
console.log(hellpconJS(10));

}
*/
//=======OBJETOS========
const user = {
    nombre : "Joselino",
    apellidoM : "Tirado",
    edad : 16,
    domicilio : {
        ciudad: "CDMX",
        calle: "Lago Cuitzeo",
        numero : 24
    },
    amigos : ["Poncho", "AngelitoMoreno"],
    activo:false,
    sendMensaje: function(){
        return "enviando msj"
    }
}

//alert ciudad, calle numero
alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)
//consola los amigos
console.log(user.amigos);
//alert (Activo o dado de baja)
alert(user.activo)
//consola nombre, apellidos estado civil
console.log(`${user.nombre} ${user.apellidoM}, ${user.estadoCivil}`);
//alert (estado del mensaje)
alert(user.sendMensaje())