const formOne = document.getElementById("forLocation");
const formTwo = document.getElementById("forPrice");
const formThree = document.getElementById("forDetails");
const submitBtn = document.getElementById("btn");
const property = document.querySelector(".property");
const price = document.querySelector(".price");
const details = document.querySelector(".details");
const myForm = document.querySelector(".form");
const myForm2 = document.querySelector(".form2");
const myForm3 = document.querySelector(".form3");
const tbody = document.querySelector(".show-property");
const containerLocation = document.querySelector(".locationContainer");
const containerPrice = document.querySelector(".priceContainer");
const containerDetails = document.querySelector(".detailsContainer");
const clrBtn = document.querySelector(".clearBtn");

// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// Event Listener
myForm.addEventListener("submit", addItemOne);

myForm2.addEventListener("submit", addItemTwo);

myForm3.addEventListener("submit", addItemThree);

window.addEventListener("DOMContentLoaded", setupItems);

// Function for location
function addItemOne(e) {
  e.preventDefault();
  const value = myForm.forLocation.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("tbody");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.innerHTML = `<td class="item">${value}</td>`;
    containerLocation.appendChild(element);
    containerLocation.classList.add("show-property");
    addToLocalStorage(id, value);
  }
}

// function for price

function addItemTwo(e) {
  e.preventDefault();
  const value = myForm2.forPrice.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("tbody");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.innerHTML = `<td class="item">₱${value}</td>`;
    containerPrice.appendChild(element, element);
    // containerPrice.insertBefore(containerPrice, list.children[0]);
    containerPrice.classList.add("show-price");
    addToLocalStorage2(id, value);
  }
}

// Details Function

function addItemThree(e) {
  e.preventDefault();
  const value = myForm3.forDetails.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("tbody");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.innerHTML = `<td class="item">${value}
              </td>`;
    containerDetails.appendChild(element);
    // containerPrice.insertBefore(containerPrice, list.children[0]);
    // containerPrice.classList.add("show-price");
    addToLocalStorage3(id, value);
  }
}

//details storage
function addToLocalStorage3(id, value) {
  const details = { id, value };
  let items = getLocalStorage3();
  items.push(details);
  localStorage.setItem("containerDetails", JSON.stringify(items));
}

function getLocalStorage3() {
  return localStorage.getItem("containerDetails")
    ? JSON.parse(localStorage.getItem("containerDetails"))
    : [];
}

// price storage
function addToLocalStorage2(id, value) {
  const price = { id, value };
  let items = getLocalStorage2();
  items.push(price);
  localStorage.setItem("containerPrice", JSON.stringify(items));
}

function getLocalStorage2() {
  return localStorage.getItem("containerPrice")
    ? JSON.parse(localStorage.getItem("containerPrice"))
    : [];
}
// location storage
function addToLocalStorage(id, value) {
  const location = { id, value };
  let items = getLocalStorage();
  items.push(location);
  localStorage.setItem("containerLocation", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("containerLocation")
    ? JSON.parse(localStorage.getItem("containerLocation"))
    : [];
}

// setup item

function setupItems() {
  let items = getLocalStorage();
  let items2 = getLocalStorage2();
  let items3 = getLocalStorage3();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    containerLocation.classList.add("show-property");
  }
  if (items2.length > 0) {
    items2.forEach(function (item) {
      createListItem2(item.id, item.value);
    });
  }
  if (items3.length > 0) {
    items3.forEach(function (item) {
      createListItem3(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  const element = document.createElement("tbody");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.innerHTML = `<td class="item">${value}</td>`;
  containerLocation.appendChild(element);
  containerLocation.classList.add("show-property");
  // addToLocalStorage(id, value);
}

function createListItem2(id, value) {
  const element = document.createElement("tbody");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.innerHTML = `<td class="item">₱${value}</td>`;
  containerPrice.appendChild(element, element);
  // containerPrice.insertBefore(containerPrice, list.children[0]);
  containerPrice.classList.add("show-price");
  // addToLocalStorage2(id, value);
}

function createListItem3(id, value) {
  const element = document.createElement("tbody");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.innerHTML = `<td class="item">${value}
              </td>`;
  containerDetails.appendChild(element);
}
