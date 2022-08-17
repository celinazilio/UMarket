// pedida saludo 
function llamarSaludo() {
    let name = document.getElementById('pedidaNombre').value;
    sessionStorage.setItem('userName', name);
}

// salida saludo
window.onload = function () {
    document.getElementById('bienvenidaUsuario').innerText = "Hola, " + sessionStorage.getItem('userName');
};


// selectores
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const palabra = input.value;

    if (palabra !== "") {
        const li = document.createElement("li");
        const p = document.createElement("span");
        p.textContent = palabra;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        input.value = "";
        empty.style.display = "none";
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        items.length == 0 ? empty.style.display = "block" : console.log("borrados");
    });

    return deleteBtn;
}
