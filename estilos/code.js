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



*/

//Initial References
const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// todos los ing hasta el 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// detener
			break;
		}
	}
	
	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="receta imagen">
				${meal.strCategory ? `<p><strong>Categoría:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Origen:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Etiquetas:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredientes:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		
	`;
	
	meal_container.innerHTML = newInnerHTML;
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});