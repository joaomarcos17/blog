document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

// this function helps me to white things on HTML !!
// const newParagraph = document.createElement("h1");

// document.querySelector("main").appendChild(newParagraph);


// newParagraph.innerHTML =  "Welcome User to my Blog "

// var h1 = document.querySelector("h1");

// h1.style.fontSize = "20px";
// h1.style.color ="black";
// h1.style.textAlign ="center";
// h1.style.marginTop ="2rem";

  
// const career = "Web Developer"
// const guy = "Joao"
// const work ="Cleaner"

// let html = `
//              I am ${guy} I am currently working as ${work} 
//              but I will be a ${career} in the future !! 
 
//               `
// alert(html)   //the output