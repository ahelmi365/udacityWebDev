console.log("Test js is running");
// scroll to top when loading

window.scroll(0, 0);

//  * Define Global Variables

const nav_bar = document.getElementById("navbar__list");
const all_sections = document.querySelectorAll("section");
let use_scroll = 1;
let use_nab_bar = 1;

// build the nav-bar base on number of sections
for (let i = 0; i < all_sections.length; i++) {
  // create new <li>
  const list_item = document.createElement("li");

  // set the textContext of the list-item to be the data-nav value
  list_item.textContent = all_sections[i].dataset.nav;

  // Add nav-item class to be used later for styling
  list_item.classList.add("nav-item");

  // append the new <li> to the nav-bar <ul>
  nav_bar.appendChild(list_item);
}

// get all nav-items in a varible to add styling when clicked
const all_nav_items = document.querySelectorAll("li.nav-item");

// Global Functions

// function to remove "you-active-class" from all sections
function remove_your_active_class() {
  for (let i = 0; i < all_sections.length; i++) {
    all_sections[i].classList.remove("your-active-class");
  }
}

// Function to remove active-item class from all items in nav-bar
function remove_active_nav_bar() {
  for (let i = 0; i < all_nav_items.length; i++) {
    all_nav_items[i].classList.remove("active-item");
  }
}

/********************************************************************************/

// Scroll to section when the section name is clicked in the nav-bar

// add event listener when the section item is clicked in the nav-bar
nav_bar.addEventListener(
  "click",
  (setActiveOnClick = (event) => {
    // remove the Scroll eventListener
    document.removeEventListener("scroll", setActiveOnScroll);

    // check if the clicked item is <li>
    if (event.target.nodeName == "LI") {
      // remove active-item class from all items in nav-bar
      remove_active_nav_bar();

      // Add class 'active' to the clicked item in the nav-bar
      event.target.classList.add("active-item");

      // get the textContent of the clicked item in the nav-bar
      const element_text_content = event.target.textContent;

      // get the section we want to scroll-to using the data-nav attribute value
      const scroll_to_element = document.querySelector(
        `[data-nav="${element_text_content}"]`
      );

      // scroll to the clicked section
      scroll_to_element.scrollIntoView();

      // remove "you-active-class" from all sections
      remove_your_active_class();

      // set the clicked section active
      scroll_to_element.classList.add("your-active-class");
    }
  })
);

/********************************************************************************/

// Set the section to be Active when it is in the viewport while Scrolling

// Define variables for this section
let lastKnownScrollPosition = 0;
let all_sections_offsetsTop = [];
let all_sections_offsetsHeight = [];

// get the Positions and Heights of all sections in the page
for (let i = 0; i < all_sections.length; i++) {
  all_sections_offsetsTop.push(all_sections[i].offsetTop);
  all_sections_offsetsHeight.push(all_sections[i].offsetHeight);
}

// Add scroll eventListener to the Document
document.addEventListener(
  "scroll",
  (setActiveOnScroll = (e) => {
    // remove the Click eventListener
    nav_bar.removeEventListener("click", setActiveOnClick);

    // get the last known scroll positions
    lastKnownScrollPosition = window.scrollY;

    // find the section in the view port
    for (let i = 0; i < all_sections.length; i++) {
      if (
        lastKnownScrollPosition > all_sections_offsetsTop[i] &&
        lastKnownScrollPosition <
          all_sections_offsetsTop[i] + all_sections_offsetsHeight[i] * 0.3
      ) {
        console.log(`section ${i + 1} is Active!`);

        // remove "you-active-class" from all sections
        remove_your_active_class();

        // set the scrolled-to section to be active
        all_sections[i].classList.add("your-active-class");

        // remove active-item class from all items in nav-bar
        remove_active_nav_bar();

        // Add active-item class to the active nav-item
        all_nav_items[i].classList.add("active-item");
      }
    }
  })
);
