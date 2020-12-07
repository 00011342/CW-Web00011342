// accessing DOM elements and storing them in veriable 
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

// get all list of options we have 
const optionsList = document.querySelectorAll(".option");

// adding and removing Active class
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});
//looping inside our option lists
optionsList.forEach(o => {
  o.addEventListener("click", () => {
      // when user click on it gives selected label 
    selected.innerHTML = o.querySelector("label").innerHTML;
    // remove active class as well 
    optionsContainer.classList.remove("active");
  });
});

//accessing class of element
const iconStar = document.querySelector("yellow");
//changing icon color to yellow 
iconStar.style.color='yellow';

