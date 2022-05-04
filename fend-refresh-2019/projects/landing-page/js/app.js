console.log("Test js is running");
/**
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
  nav_bar.appendChild(list_item);
}
// Add class 'active' to section when near top of viewport
nav_bar.addEventListener("click", function scrollTO(event) {
  if (event.target.nodeName == "LI") {
    // console.log(event.target.textContent);
    const element_text_content = event.target.textContent;
    console.log(element_text_content);
    // get the section we want to scroll to using the data-nav attribute
    const scroll_to_element = document.querySelector(
      `[data-nav="${element_text_content}"]`
    );

    // get the coordinate of the section we want to scroll to
    let rect = scroll_to_element.getBoundingClientRect();
    // console.log(rect);
    console.log(rect.x);
    console.log(rect.y);
    console.log(window.scrollY);
    console.log(rect.top + window.scrollY);

    window.scrollTo(rect.x, rect.top + window.scrollY);
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
