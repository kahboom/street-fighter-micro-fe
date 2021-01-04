// This data should be fetched from the Character's API
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

/**
 * 3001 = detail
 * 3002 = characters
 * 3003 = controls
 **/

class CharacterList extends HTMLElement {
  /**
   * Called once element is
   * attached to the DOM
   */
  connectedCallback() {
    const charname = this.getAttribute("charname");
    this.innerHTML = `
      <div class="characters_fragment">
        <h2 class="characters_headline">Characters</h2>
        <div class="character_list">
          ${allCharacters
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
