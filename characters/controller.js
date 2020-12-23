// in a real application this data would be fetched from Character's API
const characters = {
  chunli: ["ken", "ryu"],
  ryu: ["chunli", "ken"],
  ken: ["chunli", "ryu"]
};

class CharacterList extends HTMLElement {
  connectedCallback() {
    const charname = this.getAttribute("charname");
    this.innerHTML = `
      <div class="characters_fragment">
        <h2 class="characters_headline">Characters</h2>
        <div class="character_list">
          ${characters[charname]
      .map(
        char => `<a href="http://localhost:3001/character/${char}">
                         <img src="https://mi-fr.org/img/${char}.svg" />
                       </a>`
      )
      .join("\n")}
        </div>
      </div>
    `;
  }
}
window.customElements.define(
  "character-list",
  CharacterList
);
