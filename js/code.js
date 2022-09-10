/* pedida saludo 
function llamarSaludo() {
    let name = document.getElementById('pedidaNombre').value;
    sessionStorage.setItem('userName', name);
}

// salida saludo
window.onload = function () {
    document.getElementById('bienvenidaUsuario').innerText = "Hola, " + sessionStorage.getItem('userName');
};
*/
Swal
	.fire({
		title: "Tu nombre",
		input: "text",
		showCancelButton: true,
		confirmButtonText: "Guardar",
		cancelButtonText: "Cancelar",
	})
	.then(resultado => {
		if (resultado.value) {
			let nombre = resultado.value;
			console.log("Bienvenido/a, " + nombre);
		}
	});


Swal.fire({
	title: 'Error!',
	text: 'Do you want to continue?',
	icon: 'error',
	confirmButtonText: 'Cool'
})


const botonIngresar = document.querySelector('botonIngresar')

botonIngresar.addEventListener('click', () => {

	Swal.fire({
		title: 'Genial!',
		text: 'Haz clickeado el botón!',
		icon: 'success',
		confirmButtonText: 'Cool'
	})
})