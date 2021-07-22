//getting the value from the page
let number = document.querySelector(".number").textContent;

//functio to increment the value
document.querySelector(".increment").addEventListener("click", (e) => {
  e.preventDefault();
  number++;
  document.querySelector(".number").textContent = number;
});

//function to decrement the value
document.querySelector(".decrement").addEventListener("click", (e) => {
  e.preventDefault();
  number--;
  document.querySelector(".number").textContent = number;
});

//Function to reset the value and set it to zero
document.querySelector(".reset").addEventListener("click", (e) => {
  e.preventDefault();
  number = 0;
  document.querySelector(".number").textContent = number;
});
