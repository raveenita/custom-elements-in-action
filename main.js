class HeadingDisplayer extends HTMLElement {
  constructor() {
    super();
    this.setHeadingStyle();
  }

  setHeadingStyle() {
    this.style.display = 'block';
    this.style.fontSize = '2rem';
    this.style.backgroundColor = 'tomato';

    this.textContent = `Seja bem vinda, ${this.getAttribute('name')}!`;
  }
}

customElements.define('heading-displayer', HeadingDisplayer);
