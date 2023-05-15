class HeadingDisplayer extends HTMLElement {
  constructor() {
    super();

    this.outerHTML = `<${this.getHeadingLevel()}>Heading < ${this.getHeadingLevel()}></code><${this.getHeadingLevel()}>`;
  }

  getName() {
    return this.getAttribute('data-name');
  }

  getHeadingLevel() {
    return this.getAttribute('data-heading-level');
  }
}

customElements.define('heading-displayer', HeadingDisplayer);
