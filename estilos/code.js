// pedida saludo 
function llamarSaludo() {
    let name = document.getElementById('pedidaNombre').value;
    sessionStorage.setItem('userName', name);
}

// salida saludo
window.onload = function () {
    document.getElementById('bienvenidaUsuario').innerText = "Hola, " + sessionStorage.getItem('userName');
};


/*

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
*/
////fetch
////fetch
////fetch
//Initial References
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
    let userInp = document.getElementById("user-inp").value;
    if (userInp.length == 0) {
        result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
    } else {
        fetch(url + "userInp")
            .then((response) => response.json())
            .then((data) => {
                let myMeal = data.meals[0];
                console.log(myMeal);
                console.log(myMeal.strMealThumb);
                console.log(myMeal.strMeal);
                console.log(myMeal.strArea);
                console.log(myMeal.strInstructions);
                let count = 1;
                let ingredients = [];
                for (let i in myMeal) {
                    let ingredient = "";
                    let measure = "";
                    if (i.startsWith("strIngredient") && myMeal[i]) {
                        ingredient = myMeal[i];
                        measure = myMeal[`strMeasure` + count];
                        count += 1;
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                console.log(ingredients);

                result.innerHTML = `
    <img src=${myMeal.strMealThumb}>
    <div class="details">
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>
    </div>
    <div id="ingredient-con"></div>
    <div id="recipe">
        <button id="hide-recipe">X</button>
        <pre id="instructions">${myMeal.strInstructions}</pre>
    </div>
    <button id="show-recipe">View Recipe</button>
    `;
                let ingredientCon = document.getElementById("ingredient-con");
                let parent = document.createElement("ul");
                let recipe = document.getElementById("recipe");
                let hideRecipe = document.getElementById("hide-recipe");
                let showRecipe = document.getElementById("show-recipe");

                ingredients.forEach((i) => {
                    let child = document.createElement("li");
                    child.innerText = i;
                    parent.appendChild(child);
                    ingredientCon.appendChild(parent);
                });

                hideRecipe.addEventListener("click", () => {
                    recipe.style.display = "none";
                });
                showRecipe.addEventListener("click", () => {
                    recipe.style.display = "block";
                });
            })
            .catch(() => {
                result.innerHTML = `<h3>Invalid Input</h3>`;
            });
    }
});