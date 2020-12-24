// in a real application this data would be fetched from Character's API
const allCharacters = [
  'balrog',
  'blanka',
  'chun-li',
  'dhalsim',
  'e-honda',
  'guile',
  'ken',
  'm-bison',
  'ryu',
  'sagat',
  'vega',
  'zangief'
];

const characters = {
  //chunli: ["ken", "ryu"],
  //ryu: ["chunli", "ken"],
  //ken: ["chunli", "ryu"]
  chunli: allCharacters,
  ryu: allCharacters,
  ken: allCharacters
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
        char => `<a href="http://localhost:3001/characters/${char}">
                         <img src="/img/${char}.png" />
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
