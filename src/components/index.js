import { validate } from 'schema-utils';
import '../pages/index.css';

import { addNewCard } from './card.js';

import { addButtonDisabled } from './utils.js';

import { openPopup, closePopup, popupAddCard, popupChangeProfile, profileAddButton, profileEditButton, popupFormCardName, popupFormCardLink, profileEditSaveButton, cardAddSaveButton, popupFormProfileName, popupFormProfileStatus, profileName, profileStatus } from './modal.js';

import { enableValidation } from './validate.js'

import { getCards, patchProfile, postCard } from './api.js';

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', evt => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if(evt.target.classList.contains('close-icon')) {
      closePopup(popup)
    };
  });
});



const profileForm = document.querySelector('#profile-form');
const cardForm = document.querySelector('#card-form');


function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  profileForm.reset();

  postCard()
  .then(res => {
    const newCard = {name: popupFormCardName.value, link: popupFormCardLink.value}
    console.log(res)
    addNewCard(res)

  })




  closePopup(popupAddCard);



};

cardForm.addEventListener('submit', handleFormSubmitAddCard );

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  closePopup(popupChangeProfile);
  patchProfile()
};

profileForm.addEventListener('submit', handleFormSubmitProfile);




/*кнопки открытия попапов*/
profileEditButton.addEventListener('click', () => {
  popupFormProfileName.value = profileName.textContent;
  popupFormProfileStatus.value = profileStatus.textContent;
  openPopup(popupChangeProfile);
  addButtonDisabled(profileEditSaveButton);
});

profileAddButton.addEventListener('click',  () => {
  popupFormCardName.value = '';
  popupFormCardLink.value = '';
  openPopup(popupAddCard);
  addButtonDisabled(cardAddSaveButton);
});


//валидация
enableValidation({
  formSelector: '.profile-form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__error_active'
});







