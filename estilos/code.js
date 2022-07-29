let nombreUsuario = prompt("¿Como te llamás?");

function hello(pedirNombre) {
    if (pedirNombre) {
        return "¡Hola, " + pedirNombre + "!";
    } else {
        return "¡Hola!";
    }
}

alert(hello(nombreUsuario));


/*
let cMascotas, cVerduras, cLimpieza, cAlmacen, cCongelados, cBebidas, cRegaleria;
const listaProducto = [cMascotas, cVerduras, cLimpieza, cAlmacen, cCongelados, cBebidas, cRegaleria];

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
let vacia = true;


const categorias = ["Mascotas", "Frutas", "Limpieza", "Verduras", "Almacén", "Congelados", "Bebidas", "Regalería"];
*/

let nombreA = 'Mascotas';
let nombreB = 'Frutas';
let nombreC = 'Limpieza';
let nombreD = 'Verduras';

const nombres = [nombreA,
    nombreB, nombreC, nombreD
];
const nombreVerduras = ['Acelga', 'Ajo', 'Cebolla', 'Coliflor', 'Puerro', 'Berenjena', 'Calabaza', 'Tomate', 'Zanahoria', 'Lechuga', , 'Remolacha', 'Huevo'];
const nombreFrutas = ['Limón', 'Arándano', 'Frutilla', 'Mandarina', 'Naranja', 'Pomelo', 'Sandía', 'Melón', 'Coco', 'Kiwi', 'Banana', 'Ananá', 'Cereza', 'Manzana', 'Ciruela', 'Uva', 'Pera', ];


const nombreA = {
    nombre: nombreA,
    categoria: 'Mascotas',

}

const prototipoCarrito = {
    agregarProducto: function (producto) {
        if (!this.productos) {
            this.productos = [producto]
        } else {
            this.productos.push(producto);
        }
    },
    obtenerPrecioTotal: function () {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }
}