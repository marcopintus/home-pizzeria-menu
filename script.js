// pizzas
let classicPizzas = {
    focaccia:{
        name: "Focaccia",
        ingredients: "Olio, rosmarino",
        price: "0 €",
    },
    marinara:{
        name: "Marinara",
        ingredients: "Pomodoro, origano",
        price: "0 €",
    },
    margherita:{
        name: "Margherita",
        ingredients: "Pomodoro, mozzarella",
        price: "0 €",
    },
    calzone:{
        name: "Calzone",
        ingredients: "Pomodoro, mozzarella, prosciutto cotto",
        price: "0 €"
    }
};

let ourPizzas = {
    formaggiPiero:{
        name: "I formaggi di Piero",
        ingredients: "Mozzarella, grana, casizolu, gorgonzola",
        price: "0 €"
    },
    annaCapelliRossi: {
        name: "Anna dai capelli rossi",
        ingredients: "Pomodoro, uovo (occhio di bue)",
        price: "0 €"
    },
    ortolanaSaporita:{
        name:"Ortolana Saporita",
        ingredients: "Pomodoro, mozzarella, zucchine grigliate, casizolu (rubato da I 'formaggi di Piero')",
        price: "0 €"
    },
    rosmarinoConPatate:{
        name: "Rosmarino con patate",
        ingredients: "Pomodoro, patate al forno, rosmarino, rosmarino",
        price: "0 €"
    },
    fondoMare:{
        name: "In fondo al mare",
        ingredients: "Pomodoro, mozzarella, frutti di mare",
        price: "0 €"
    },
    oroGiallo:{
        name: "Oro giallo",
        ingredients: "Pomodoro, mozzarella, bottarga",
        price: "0 €"
    },
    quelloCE:{
        name:"Quello che c'è",
        ingredients: "Ingredienti a scelta tra quelli disponibili",
        price: "0 €"
    },
    tricolore:{
        name: "Tricolore",
        ingredients: "Pomodoro, mozzarella, rucola, grana (fuori cottura)",
        price: "0 €"
    },
    carbonara:{
        name: "Carbonara",
        ingredients: "Mozzarella, uovo, pancetta",
        price: "0 €"
    },
    carbonaraRossa:{
        name: "Carbonara",
        ingredients: "Pomodoro, mozzarella, uovo, pancetta",
        price: "0 €"
    },
    fuocoFiamme:{
        name: "Fuoco e fiamme",
        ingredients: "Mozzarella, casizolu, gorgonzola. salsiccia piccante",
        price: "0 €"
    },
    daTutteUnPo:{
        name:"Da tutte un po'",
        ingredients: "Prendere qualche ingrediente dalle altre pizze in preparazione",
        price: "0 €"
    },
    casizoluGuanciale:{
        name: "Casizolu e Guanciale",
        ingredients: "Mozzarella, casizolu, guanciale",
        price: "0 €"
    },
    comePantera:{
        name: "Come a La Pantera",
        ingredients: "Pomodoro, mozzarella, patate al forno, rosmarino, prosciutto cotto",
        price: "0 €"
    },
    melagriglio:{
        name: "Melagriglio",
        ingredients: "Pomodoro, mozzarella, melanzane grigliate",
        price: "0 €"
    },
    parmigiana:{
        name: "Parmigiana",
        ingredients: "Pomodoro, mozzarella, melanzene fritte, parmigiano",
        price: "0 €"
    }
};


function createPizzaCategory(pizzaCategory,pizzas){

    let pizzaMenu = document.querySelector(".pizza-menu");
    let category = document.createElement("div");
    category.classList.add("pizza-type");
    category.textContent = pizzaCategory;
    pizzaMenu.appendChild(category);

    let pizzasContainer = document.createElement("div");
    pizzasContainer.classList.add("pizzas");
    pizzaMenu.appendChild(pizzasContainer);

    for (let [key,value] of Object.entries(pizzas)){
        
        let pizza = document.createElement("div");
        pizza.classList.add("pizza");
        pizzasContainer.appendChild(pizza);

        let pizzaName = document.createElement("p");
        pizzaName.classList.add("pizza-name");
        pizzaName.textContent = value.name;
        pizza.appendChild(pizzaName)

        let pizzaIngredients = document.createElement("p");
        pizzaIngredients.classList.add("pizza-ingredients");
        pizzaIngredients.textContent = value.ingredients;
        pizza.appendChild(pizzaIngredients)

        /*
        let pizzaPrice = document.createElement("p");
        pizzaPrice.classList.add("pizza-price");
        pizzaPrice.textContent = value.price;
        pizza.appendChild(pizzaPrice)
        */

    }
}


let generalContainer = document.createElement("div");
generalContainer.classList.add("pizza-menu");
document.body.appendChild(generalContainer);

createPizzaCategory("Pizze Classiche",classicPizzas)
createPizzaCategory("Pizze della casa",ourPizzas)



// beverages
let softDrinks = ['Acqua Naturale', 'Acqua Frizzante', 'Coca-cola','Tè alla pesca'];
let beers = ['Heineken','Ichnusa Radler'];
let heavyDrinks = ['Nonno Elogu', 'Limoncello','Crema di limone','Mirto'];
let coffee = ['Espresso','Ginseng','Decaffeinato'];

function createArrayCategory(categoryName,array){

    let pizzaMenu = document.querySelector(".pizza-menu");
    let category = document.createElement("div");
    category.classList.add("pizza-type");
    category.textContent = categoryName;
    pizzaMenu.appendChild(category);

    let bevvyContainer = document.createElement("div");
    bevvyContainer.classList.add("bev-pud-s");
    pizzaMenu.appendChild(bevvyContainer);

    for(let i=0; i<array.length; i++){
        let bev = document.createElement("div");
        bev.classList.add("bev-pud");
        bevvyContainer.appendChild(bev);

        let bevName = document.createElement("p");
        bevName.classList.add("bev-pud-name");
        bevName.textContent = array[i];
        bev.appendChild(bevName)
    }
}

createArrayCategory("Acqua e bevande",softDrinks);
createArrayCategory("Birre",beers);
createArrayCategory("Amari",heavyDrinks);
createArrayCategory("Caffetteria",coffee);

// pudding
let puddings = ['Crostata di frutta', 'Tiramisù di fragole', 'Tiramisù','Gelato'];
createArrayCategory("Dolci",puddings);