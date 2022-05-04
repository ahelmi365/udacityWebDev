console.log("Test js is running");
console.log(window.scrollY);
window.scroll(0, 0);
/**}
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const nav_bar = document.getElementById("navbar__list");
const all_sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < all_sections.length; i++) {
  const list_item = document.createElement("li");
  list_item.textContent = all_sections[i].dataset.nav;
  list_item.classList.add("nav-item");
  nav_bar.appendChild(list_item);
}

// get all nav-items in a varible
const all_nav_items = document.querySelectorAll(".nav-item");

// Add class 'active' to section when near top of viewport
nav_bar.addEventListener("click", function scrollTO(event) {
  if (event.target.nodeName == "LI") {
    // remove active-item class from all items in nav-bar
    for (let i = 0; i < all_nav_items.length; i++) {
      all_nav_items[i].classList.remove("active-item");
    }
    //   add style to cklicked item:
    event.target.classList.add("active-item");

    // console.log(event.target.textContent);
    const element_text_content = event.target.textContent;
    console.log(element_text_content);
    // get the section we want to scroll to using the data-nav attribute
    const scroll_to_element = document.querySelector(
      `[data-nav="${element_text_content}"]`
    );

    // scroll to the clicked section
    scroll_to_element.scrollIntoView();

    // get the coordinate of the section we want to scroll to
    let element_coordinates = scroll_to_element.getBoundingClientRect();
    // console.log(rect);
    console.log(element_coordinates.x);
    console.log(element_coordinates.y);
    console.log(window.scrollY);
    console.log(element_coordinates.top + window.scrollY);
    // scroll to the clicked section
    // window.scrollTo(
    //   element_coordinates.x,
    //   element_coordinates.top + window.scrollY
    // );

    // remove "you-active-class" from all sections
    for (let i = 0; i < all_sections.length; i++) {
      all_sections[i].classList.remove("your-active-class");
    }

    // set the clicked section active
    scroll_to_element.classList.add("your-active-class");
  }
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
