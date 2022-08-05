let nombreUsuario = prompt("¿Como te llamás?");

function hello(pedirNombre) {
    if (pedirNombre) {
        return "¡Hola, " + pedirNombre + "!";
    } else {
        return "¡Hola!";
    }
}
let saludo = document.getElementById("saludoUsuario");
saludo.innerHTML = "<h2>¡Hola, " + nombreUsuario + "!</h2>";

///
const verdurasProductos = ['Acelga', 'Ajo', 'Cebolla', 'Coliflor', 'Puerro', 'Berenjena', 'Calabaza', 'Tomate', 'Zanahoria', 'Lechuga', 'Remolacha', 'Huevo'];
const frutasProductos = ['Limón', 'Arándano', 'Frutilla', 'Mandarina', 'Naranja', 'Pomelo', 'Sandía', 'Melón', 'Coco', 'Kiwi', 'Banana', 'Ananá', 'Cereza', 'Manzana', 'Ciruela', 'Uva', 'Pera'];
const mascotasProductos = ['Comida para perros', 'Comida para gatos', 'Shampoo Antipulgas', 'Correa', 'Bozal', 'Juguete', 'Mordedor', 'Pecera'];
const limpiezaProductos = ['Papel higiénico', 'Pasta dental', 'Cepillo de dientes', 'Hilo dental', 'Desodorante', 'Jabón', 'Shampoo', 'Acondicionador', 'Lavandina'];
const bebidasProductos = ['Cerveza 1L', 'Gaseosa cola 2L', 'Agua mineral 600ml', 'Agua saborizada 1.5L', 'Fernet 1L', 'Gaseosa lima 2L', 'Gaseosa naranja 2L', 'Jugo de frutas 1L'];
const regaleriaProductos = ['Vaso térmico', 'Equipo de mate', 'Mate', 'Cuadro', 'Jarron', 'Maceta'];


let arrayDummy = [0];

function listaCantidades(arrayCategoria) {
    arrayDummy = [0];
    for (let index = 1; index < arrayCategoria.length; index++) {
        arrayDummy.push(0);
    }
    return arrayDummy;
}

class categoria {
    constructor(nombre, productos, cantidadCompra) {
        this.nombre = nombre;
        this.productos = productos;
        this.cantidadCompra = cantidadCompra;
    }
}

let verduras = new categoria("Verduras", verdurasProductos, listaCantidades(verdurasProductos));
let mascotas = new categoria("Mascotas", mascotasProductos, listaCantidades(mascotasProductos));
let limpieza = new categoria("Limpieza", limpiezaProductos, listaCantidades(limpiezaProductos));
let bebidas = new categoria("Bebidas", bebidasProductos, listaCantidades(bebidasProductos));
let regaleria = new categoria("Regaleria", regaleriaProductos, listaCantidades(regaleriaProductos));



document.addEventListener("keyup",(event)=>{ if(event.keyCode===13){addToDo()}});