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

let todayPizzas = {
    margheritaSaporita:{
        name: "Margherita saporita",
        ingredients: "Pomodoro, mozzarella, casizolu",
        price: "0 €",
    },
    rucolaGrana:{
        name: "Rucola e grana",
        ingredients: "Pomodoro, mozzarella, rucola, grana",
        price: "0 €"
    },
    quattroFormaggi:{
        name:"Quattro frmaggi",
        ingredients: "Mozzarella, casizolu, gorgonzola, grana",
        price: "0 €"
    },
    quattroFormaggiR:{
        name:"Quattro formaggi base margherita",
        ingredients: "Pomodoro, mozzarella, casizolu, gorgonzola, grana",
        price: "0 €"
    },
    wurstelPatate:{
        name:"Wurstel e patate",
        ingredients: "Pomodoro, mozzarella, wurstel, patate",
        price: "0 €"
    },
    patateSalsiccia:{
        name: "Salsiccia e patate",
        ingredients: "Pomodoro, mozzarella, salsiccia, patate",
        price: "0 €"
    },
    patatePancetta:{
        name: "Pancetta e patate",
        ingredients: "Pomodoro, mozzarella, salsiccia, patate",
        price: "0 €"
    },
    uovoRosso:{
        name:"Uovo rosso",
        ingredients: "Pomodor, uovo",
        price: "0 €"
    }

};

function createPizzaMenu(){
    
    let generalContainer = document.querySelector(".pizza-menu")
    generalContainer.remove()
    bevvyButton.classList.remove("pressed")
    puddingButton.classList.remove("pressed")
    generalContainer = document.createElement("div");
    generalContainer.classList.add("pizza-menu");
    document.body.appendChild(generalContainer);

    pizzaButton.classList.add("pressed")
    /*
    createPizzaCategory("Pizze Classiche",classicPizzas)
    createPizzaCategory("Pizze della casa",ourPizzas)*/
    createPizzaCategory("Pizze del giorno", todayPizzas)
}

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


function createBevvyMenu(){
    
    let generalContainer = document.querySelector(".pizza-menu")
    generalContainer.remove()
    pizzaButton.classList.remove("pressed")
    puddingButton.classList.remove("pressed")
    generalContainer = document.createElement("div");
    generalContainer.classList.add("pizza-menu");
    document.body.appendChild(generalContainer);

    bevvyButton.classList.add("pressed")

    createArrayCategory("Acqua e bevande",softDrinks);
    createArrayCategory("Birre",beers);
    createArrayCategory("Amari",heavyDrinks);
    createArrayCategory("Caffetteria",coffee);
}


function createPuddingMenu(){
    
    let generalContainer = document.querySelector(".pizza-menu");
    generalContainer.remove()

    pizzaButton.classList.remove("pressed")
    bevvyButton.classList.remove("pressed")

    generalContainer = document.createElement("div");
    generalContainer.classList.add("pizza-menu");
    document.body.appendChild(generalContainer);

    puddingButton.classList.add("pressed")

    createArrayCategory("Dolci",puddings);
}


// beverages
let softDrinks = ['Acqua Naturale', 'Acqua Frizzante', 'Coca-cola','Tè alla pesca'];
let beers = ['Heineken','Ichnusa Radler'];
let heavyDrinks = ['Nonno Elogu', 'Limoncello','Crema di limone','Mirto',"Filu 'e ferru"];
let coffee = ['Espresso','Decaffeinato'];

// pudding
// let puddings = ['Crostata di frutta', 'Tiramisù di fragole', 'Tiramisù','Gelato'];
let puddings = ['Gelato'];

// queries

let pizzaButton = document.querySelector("#nav-pizza");
let bevvyButton = document.querySelector("#nav-bevvy");
let puddingButton = document.querySelector("#nav-pudding")


// creates the div that is then updated with the specific menu
let generalContainer = document.createElement("div");
generalContainer.classList.add("pizza-menu");
generalContainer.classList.add("transparent")
document.body.appendChild(generalContainer);



// pizza button 
pizzaButton.addEventListener("click", createPizzaMenu);

// bevvy button
bevvyButton.addEventListener("click", createBevvyMenu);

// pudding button
puddingButton.addEventListener("click", createPuddingMenu);
