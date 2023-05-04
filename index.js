/* eslint-disable */

import Books from "./components/Books.js";

const books = new Books();

const listNav = document.querySelectorAll("#nav-links li")[0];
const addNav = document.querySelectorAll("#nav-links li")[1];
const contactNav = document.querySelectorAll("#nav-links li")[2];

const listContainer = document.getElementById("list-container");
const addContainer = document.getElementById("main");
const contactContainer = document.createElement("div");
contactContainer.innerHTML = "<h3>Contact Information</h3><p>Email: contact@mybooklist.com</p><p>Phone: +1 555-555-5555</p>";

// Hide all sections except the list container
addContainer.style.display = "none";
contactContainer.style.display = "none";

// Show the add container 
addNav.addEventListener("click", () => {
  listContainer.style.display = "none";
  addContainer.style.display = "block";
  contactContainer.style.display = "none";
});

// Show the list container 
listNav.addEventListener("click", () => {
  addContainer.style.display = "none";
  contactContainer.style.display = "none";
});

// Show the contact
contactNav.addEventListener("click", () => {
  listContainer.style.display = "none";
  addContainer.style.display = "none";
  contactContainer.style.display = "block";
});

books.render();


