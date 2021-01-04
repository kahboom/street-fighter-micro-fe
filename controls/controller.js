class Controls extends HTMLElement {
  /**
   * Called when the element is created
   */
  constructor() {
    super()
    console.info('constructed');
  }

  /**
   * Called once element is
   * attached to the DOM
   */
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Hello from Controls!</p>
    <button type="button">Choose Character</button>
    `;

    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('controls:character_selected'));
    });
  }
}

window.customElements.define("controls-select", Controls);

