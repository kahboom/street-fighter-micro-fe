(function detail() {
  // Should image display be changed here?
  //const image = document.querySelector('.detail-image');
  //const selectBtn = document.querySelector('controls');
  const selectBtn = document.querySelector('controls-select');
  const characterEl = document.querySelector('.detail_character');

  selectBtn.addEventListener('controls:character_selected', (e) => {
    characterEl.classList.add('detail_character--confirm');
  });

  characterEl.addEventListener('animationend', () => {
    characterEl.classList.remove('detail_character--confirm');
  });
})();
