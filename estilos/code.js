let nombreUsuario = prompt("¿Como te llamás?");

function hello(pedirNombre) {
    if (pedirNombre) {
        return "¡Hola, " + pedirNombre + "!";
    } else {
        return "¡Hola!";
    }
}

alert(hello(nombreUsuario));

let cMascotas, cVerduras, cLimpieza, cAlmacen, cCongelados, cBebidas, cRegaleria;
const listaProducto = [cMascotas, cVerduras, cLimpieza, cAlmacen, cCongelados, cBebidas, cRegaleria];
const listaNombres = ["Mascotas", "Frutas y Verduras", "Limpieza", "Almacén", "Congelados", "Bebidas", "Regalería"];
const productoVerduras = ['Limón', 'Arándano', 'Frutilla', 'Mandarina', 'Naranja', 'Pomelo', 'Sandía', 'Melón', 'Coco', 'Kiwi', 'Banana', 'Ananá', 'Cereza', 'Manzana', 'Ciruela', 'Uva', 'Pera', 'Acelga', 'Ajo', 'Cebolla', 'Coliflor', 'Puerro', 'Berenjena', 'Calabaza', 'Tomate', 'Zanahoria', 'Lechuga', , 'Remolacha', 'Huevo'];

let vacia = true;

alert("¡Enlistá tus productos en las secciones que corresponden!");

for (let index = 0; index < listaProducto.length; index++) {
    listaProducto[index] = ":"; // los : están para darle al menos un valor a la variable seleccionada
    let productoUsuario = prompt(listaNombres[index]);
    while (productoUsuario != "") {
        listaProducto[index] = listaProducto[index] + " - " + productoUsuario;
        productoUsuario = prompt("Escriba otro producto o deje vacío para omitir");
    }
}
for (let index = 0; index < listaProducto.length; index++) {
    if (listaProducto[index] != ":") {
        alert(listaNombres[index] + listaProducto[index]);
        vacia = false;
    }
}
if (vacia == true) {
    alert("La lista está vacía... :(");
}

class Categoria{
    constructor()
}