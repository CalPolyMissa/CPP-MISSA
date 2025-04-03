// From: https://stackoverflow.com/questions/55080103/how-to-separate-web-components-to-individual-files-and-load-them
// Fetch the navbar-header html content.
fetch("components/navbar-header.html")
  .then(stream => stream.text())
  .then(text => define(text));

// Define the navbar-header after fetching.
function define(html) {
  class NavbarHeader extends HTMLElement {
    constructor() {
    super();

    // Add the "navbar-header" html to the document.
    const navbarHeaderTemplate = document.createElement("template");
    navbarHeaderTemplate.innerHTML = html;
    this.appendChild(navbarHeaderTemplate.content);
    
    // Get the "navbar-burger" element.
    const el = document.getElementById("navbar-header-burger");

    // Add "click" event listener to "navbar-burger".
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute.
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu".
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
    }
  }

  // Add navbar-header to document custom elements.
  customElements.define("navbar-header", NavbarHeader);
}