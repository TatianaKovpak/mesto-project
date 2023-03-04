import { addButtonDisabled } from "./utils.js";




export const popupChangeProfile = document.querySelector('.popup__edit-profile');
export const profileEditButton = document.querySelector('.profile__edit');
export const profileEditSaveButton = popupChangeProfile.querySelector('.popup__button');
export const popupFormProfileName = popupChangeProfile.querySelector('.popup__form-name');
export const popupFormProfileStatus = popupChangeProfile.querySelector('.popup__form-status');

export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const avatar = document.querySelector('.avatar');

export const profileAddButton = document.querySelector('.profile__add');
export const popupAddCard = document.querySelector('.popup__add-card');
export const popupFormCardName = popupAddCard.querySelector('.popup__form-name');
export const popupFormCardLink = popupAddCard.querySelector('.popup__form-status');
export const cardAddSaveButton = popupAddCard.querySelector('.popup__button');

export const avatarChange = document.querySelector('.avatar-container');
export const avatarChangePopup = document.querySelector('.popup__add-avatar');
export const avatarSaveButton = avatarChangePopup.querySelector('.popup__button');
export const avatarInput = avatarChangePopup.querySelector('.popup__form-status');

export const removeCardPopup = document.querySelector('.popup__remove-card');
export const removeCardButton = removeCardPopup.querySelector('.popup__button')

avatarChange.addEventListener('click', () => {
  openPopup(avatarChangePopup);
  addButtonDisabled(avatarSaveButton);

})


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);

  }
}

export function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);



};


