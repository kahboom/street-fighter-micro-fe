(function detail() {
  // Should image display be changed here?
  //const image = document.querySelector('.detail-image');
  const selectBtn = document.querySelector('controls');

  const characterEl = document.querySelector('.detail-character');

  selectBtn.addEventListener('controls:character_selected', (e) => {
    characterEl.classList.add('detail-character--confirm');
  });

  characterEl.addEventListener('animationend', () => {
    characterEl.classList.remove('detail-character--confirm');
  });
})
