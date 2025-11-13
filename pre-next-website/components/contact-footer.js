// From: https://stackoverflow.com/questions/55080103/how-to-separate-web-components-to-individual-files-and-load-them
// Fetch the contact-footer html content.
fetch("components/contact-footer.html")
  .then(stream => stream.text())
  .then(text => defineContactFooter(text));

// Define the contact-footer after fetching.
function defineContactFooter(html) {
  class ContactFooter extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // Add the "contact-footer" html to the document.
      const contactFooterTemplate = document.createElement("template");
      contactFooterTemplate.innerHTML = html;
      this.appendChild(contactFooterTemplate.content);
    }
  }

  // Add contact-footer to document custom elements.
  customElements.define("contact-footer", ContactFooter);
}