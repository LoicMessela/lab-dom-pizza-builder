// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const white = document.querySelector('.sauce');
  if (state.whiteSauce) {
    white.classList.add('sauce-white');
  } else {
    white.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crusty = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crusty.classList.add('crust-gluten-free');
  } else {
    crusty.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const addOrRemovePep = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    addOrRemovePep.classList.add('active');
  } else {
    addOrRemovePep.classList.remove('active');
  }
  const addOrRemoveMush = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    addOrRemoveMush.classList.add('active');
  } else {
    addOrRemoveMush.classList.remove('active');
  }

  const addOrRemoveGreen = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    addOrRemoveGreen.classList.add('active');
  } else {
    addOrRemoveGreen.classList.remove('active');
  }

  const addOrRemoveSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    addOrRemoveSauce.classList.add('active');
  } else {
    addOrRemoveSauce.classList.remove('active');
  }

  const addOrRemoveCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    addOrRemoveCrust.classList.add('active');
  } else {
    addOrRemoveCrust.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice;
  const ul = document.querySelector('.panel.price ul');
  ul.innerHTML = null;
  for (const property in state) {
    if (state[property]) {
      total += ingredients[property].price;
      const newLi = document.createElement('li');
      ul.append(newLi);
      newLi.textContent = `$${ingredients[property].price} ${ingredients[property].name}`;
    }
  }
  const totalPrice = document.querySelector('.panel.price strong');
  totalPrice.textContent = `$ ${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
