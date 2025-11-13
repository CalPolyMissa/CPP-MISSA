// From: https://stackoverflow.com/questions/55080103/how-to-separate-web-components-to-individual-files-and-load-them
// Fetch the splide-container html content.
fetch("components/splide-container.html")
  .then(stream => stream.text())
  .then(text => defineSplideContainer(text));

// Define the splide-container after fetching.
function defineSplideContainer(html) {
  class SplideContainer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // Add the "splide-container" html to the document.
      const splideContainerTemplate = document.createElement("template");
      splideContainerTemplate.innerHTML = html;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(splideContainerTemplate.content);
    }
  }

  // Add splide-container to document custom elements.
  customElements.define("splide-container", SplideContainer);
}