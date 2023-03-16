/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const burgerMenu = () => {
  const popupMenu = document.querySelector('.popup-dialog-menu');
  const hamburgerIcon = document.querySelector('.menu__icon');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.close-menu');

  function showMenu () {
    popupMenu.classList.remove('hideMenu');
    popupMenu.classList.add('showMenu');
  }

  function closeMenu () {
    popupMenu.classList.remove('showMenu');
    popupMenu.classList.add('hideMenu');
  }

  hamburgerIcon.addEventListener('click', (e) => {
    //   e.preventDefault();
    console.log(e.target);
    showMenu();
  });

  closeBtn.addEventListener('click', (e) => {
    //   e.preventDefault();
    console.log(e.target);
    closeMenu();
  })
  body.addEventListener('click', (e) => {
    console.log(e.target)
    if (!popupMenu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
      popupMenu.classList.remove('showMenu');
      popupMenu.classList.add('hideMenu');
    }
  })
}
export default burgerMenu;
