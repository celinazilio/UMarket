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
const nombreVerduras = ['Acelga', 'Ajo', 'Cebolla', 'Coliflor', 'Puerro', 'Berenjena', 'Calabaza', 'Tomate', 'Zanahoria', 'Lechuga', 'Remolacha', 'Huevo'];
const nombreFrutas = ['Limón', 'Arándano', 'Frutilla', 'Mandarina', 'Naranja', 'Pomelo', 'Sandía', 'Melón', 'Coco', 'Kiwi', 'Banana', 'Ananá', 'Cereza', 'Manzana', 'Ciruela', 'Uva', 'Pera', ];
const mascotasProductos = ['Comida para perros', 'Comida para gatos', 'Shampoo para animales', 'Correa', 'Bozal', 'Juguete', 'Mordedor', 'Pecera'];
const limpiezaProductos = ['Papel higiénico', 'Pasta dental', 'Cepillo de dientes', 'Hilo dental', 'Desodorante', 'Jabon', 'Shampoo', 'Acondicionador', 'Lavandina'];
const bebidasProductos = ['Cerveza 1L', 'Gaseosa cola 2L', 'Agua mineral 600ml', 'Agua saborizada 1.5L', 'Fernet 1L', 'Gaseosa lima 2L', 'Gaseosa naranja 2L', 'Jugo de frutas 1L'];
const regaleriaProductos = ['Vaso térmico', 'Equipo de mate', 'Mate', 'Cuadro', 'Jarron', 'Maceta'];


/*const nombreA = {
    nombre: nombreA,
    categoria: 'Mascotas',

}*/

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

let arrayDummy = [0];

function listaCantidades(arrayCategoria) {
    arrayDummy = [0];
    for (let index = 1; index < arrayCategoria.length; index++) {
        arrayDummy.push(0);
    }
    return arrayDummy;
}

class categoria {
    constructor(nombre, productos, cantidadCompra){
        this.nombre = nombre;
        this.productos = productos;
        this.cantidadCompra = cantidadCompra;
    }
}

let verduras = new categoria("Verduras", nombreVerduras, listaCantidades(nombreVerduras));
let mascotas = new categoria("Mascotas", mascotasProductos, listaCantidades(mascotasProductos));
let limpieza = new categoria("Limpieza", limpiezaProductos, listaCantidades(limpiezaProductos));
let bebidas = new categoria("Bebidas", bebidasProductos, listaCantidades(bebidasProductos));
let regaleria = new categoria("Regaleria",regaleriaProductos, listaCantidades(regaleriaProductos));