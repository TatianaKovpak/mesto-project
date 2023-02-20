import { addButtonDisabled } from "./utils.js";



export const popupChangeProfile = document.querySelector('.popup__edit-profile');
export const profileEditButton = document.querySelector('.profile__edit');
export const iconCloseProfilePopup = popupChangeProfile.querySelector('.close-icon');
export const profileEditSaveButton = popupChangeProfile.querySelector('.popup__button');
export const popupFormProfileName = popupChangeProfile.querySelector('.popup__form-name');
export const popupFormProfileStatus = popupChangeProfile.querySelector('.popup__form-status');

export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');

export const profileAddButton = document.querySelector('.profile__add');
export const popupAddCard = document.querySelector('.popup__add-card');
export const popupFormCardName = popupAddCard.querySelector('.popup__form-name');
export const popupFormCardLink = popupAddCard.querySelector('.popup__form-status');
export const iconClosePopupAddCard = popupAddCard.querySelector('.close-icon');
export const cardAddSaveButton = popupAddCard.querySelector('.popup__button');


export function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.onclick = evt => {
    if(evt.target === popupElement) {
      popupElement.classList.remove('popup_opened');
    }
  }
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      popupElement.classList.remove('popup_opened');
    }
  })
};

export function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');

};

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
