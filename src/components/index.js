import { validate } from 'schema-utils';
import '../pages/index.css';

import {  popupOpenFullImage, popupOpenFullImageCloseIcon, createCard, addNewCard } from './card.js';

import { addButtonDisabled } from './utils.js';

import { openPopup, closePopup, popupAddCard, popupChangeProfile, profileAddButton, profileEditButton, popupFormCardName, popupFormCardLink, iconCloseProfilePopup, profileEditSaveButton, iconClosePopupAddCard, cardAddSaveButton, popupFormProfileName, popupFormProfileStatus, profileName, profileStatus } from './modal.js';

import { enableValidation } from './validate.js'



/*закрывающие иконки*/
iconCloseProfilePopup.addEventListener('click', () => {
  closePopup(popupChangeProfile)
});
iconClosePopupAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
});
 popupOpenFullImageCloseIcon.addEventListener('click', () => {
  closePopup(popupOpenFullImage)
  });

/*кнопки сохранения данных попапов*/
profileEditSaveButton.addEventListener('click', evt => {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  closePopup(popupChangeProfile);
});

const profileForm = document.querySelector('.profile-form');
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
};
profileForm.addEventListener('submit', handleFormSubmit);

cardAddSaveButton.addEventListener('click', evt => {
  evt.preventDefault();
  const newCard = {link: popupFormCardLink.value, name: popupFormCardName.value};
  addNewCard(newCard);
  closePopup(popupAddCard) ;

})
cardAddSaveButton.addEventListener('submit', createCard);

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




