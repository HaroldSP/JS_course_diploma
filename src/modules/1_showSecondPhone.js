/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const showSecondPhone = function () {
  // const accordLink = document.querySelector('.header-contacts__phone-number-accord a');
  // const arrowIcon = document.querySelector('.header-contacts__arrow img');

  // arrowIcon.addEventListener('click', () => {
  //   accordLink.classList.toggle('show');
  //   arrowIcon.classList.toggle('rotate');
  // });

  const arrowButton = document.querySelector('.header-contacts__arrow');
  const secondPhoneNumber = document.querySelector('.header-contacts__phone-number-accord');
  const whatsAppForDelete = document.getElementById('whatsAppForDelete');

  arrowButton.addEventListener('click', () => {
    whatsAppForDelete.classList.toggle('hide');
    secondPhoneNumber.classList.toggle('show');
    arrowButton.classList.toggle('clicked');
  });
}

export default showSecondPhone;
