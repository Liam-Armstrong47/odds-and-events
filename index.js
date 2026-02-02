const app = document.querySelector("#app");

// State
const state = {
  bank: [],
  odds: [],
  evens: [],
};

function addNumber(num) {
  state.bank.push(num);
  render();
}

function sortOne() {
  if (state.bank.length === 0) return;

  const num = state.bank.shift();
  if (num % 2 === 0) {
    state.evens.push(num);
  } else {
    state.odds.push(num);
  }
  render();
}

function sortAll() {
  while (state.bank.length > 0) {
    const num = state.bank.shift();
    if (num % 2 === 0) {
      state.evens.push(num);
    } else {
      state.odds.push(num);
    }
  }
  render();
}

function InputSection() {
  return `
    <div class="input-section">
      <input type="number" id="numberInput" placeholder="Enter a number" />
      <button id="addButton">Add Number</button>
    </div>
  `;
}

function NumberBank() {
  return `
    <div class="number-bank">
      <h2>Number Bank</h2>
      <div class="numbers">${state.bank.join(", ")}</div>
      <div class="button-group">
        <button id="sortOneButton">Sort 1</button>
        <button id="sortAllButton">Sort All</button>
      </div>
    </div>
  `;
}

function OddCategory() {
  return `
    <div class="odd-category">
      <h2>Odds</h2>
      <div class="numbers">${state.odds.join(", ")}</div>
    </div>
  `;
}

function EvenCategory() {
  return `
    <div class="even-category">
      <h2>Evens</h2>
      <div class="numbers">${state.evens.join(", ")}</div>
    </div>
  `;
}

function render() {
  app.innerHTML = `
    <h1>Odds and Events</h1>
    ${InputSection()}
    ${NumberBank()}
    <div class="categories">
      ${OddCategory()}
      ${EvenCategory()}
    </div>
  `;

  attachEventListeners();
}

function attachEventListeners() {
  const addButton = document.querySelector("#addButton");
  const sortOneButton = document.querySelector("#sortOneButton");
  const sortAllButton = document.querySelector("#sortAllButton");
  const numberInput = document.querySelector("#numberInput");

  addButton.addEventListener("click", () => {
    const value = parseInt(numberInput.value);
    if (!isNaN(value)) {
      addNumber(value);
      numberInput.value = "";
    }
  });

  numberInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const value = parseInt(numberInput.value);
      if (!isNaN(value)) {
        addNumber(value);
        numberInput.value = "";
      }
    }
  });

  sortOneButton.addEventListener("click", sortOne);
  sortAllButton.addEventListener("click", sortAll);
}

render();
