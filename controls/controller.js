class Controls extends HTMLElement() {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button type="button">Choose Character</button>
    `;

    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('select:character_selected'));
    });
  }
}

window.customElements.define('controls', Controls);
