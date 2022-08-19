// pedida saludo 
function llamarSaludo() {
    let name = document.getElementById('pedidaNombre').value;
    sessionStorage.setItem('userName', name);
}

// salida saludo
window.onload = function () {
    document.getElementById('bienvenidaUsuario').innerText = "Hola, " + sessionStorage.getItem('userName');
};


// lista 
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
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll("li");
        items.length == 0 ? empty.style.display = "block" : console.log("borrados");
    });

    return deleteBtn;
}


const tareas = document.getElementById('tareas');
const tareasBebidas = document.getElementById('tareasBebidas');
const tareasRegaleria = document.getElementById('tareasRegaleria');
const tareasVerduras = document.getElementById('tareasVerduras');
const tareasLimpieza = document.getElementById('tareasLimpieza');

Sortable.create(tareas, {
    group: {
        name: "lista-tareas",
    },

    animation: 150,
    chosenClasss: "activate"
});

Sortable.create(tareasBebidas, {
    group: {
        name: "lista-tareas",
       
    },
    animation: 150,
    chosenClasss: "activate"
});
Sortable.create(tareasRegaleria, {
    group: {
        name: "lista-tareas",
       
    },
    animation: 150,
    chosenClasss: "activate"
});
Sortable.create(tareasLimpieza, {
    group: {
        name: "lista-tareas"
    },
    animation: 150,
    chosenClasss: "activate"
});
Sortable.create(tareasVerduras, {
    group: {
        name: "lista-tareas"
    },
    animation: 150,
    chosenClasss: "activate"
});