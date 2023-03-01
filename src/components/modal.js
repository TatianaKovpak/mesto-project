import { addButtonDisabled } from "./utils.js";
import { getCards, getProfile } from "./api.js";



export const popupChangeProfile = document.querySelector('.popup__edit-profile');
export const profileEditButton = document.querySelector('.profile__edit');
export const profileEditSaveButton = popupChangeProfile.querySelector('.popup__button');
export const popupFormProfileName = popupChangeProfile.querySelector('.popup__form-name');
export const popupFormProfileStatus = popupChangeProfile.querySelector('.popup__form-status');

export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
const avatar = document.querySelector('.avatar');

export const profileAddButton = document.querySelector('.profile__add');
export const popupAddCard = document.querySelector('.popup__add-card');
export const popupFormCardName = popupAddCard.querySelector('.popup__form-name');
export const popupFormCardLink = popupAddCard.querySelector('.popup__form-status');
export const cardAddSaveButton = popupAddCard.querySelector('.popup__button');

getProfile()
.then( res => {
  console.log(res)
  profileName.textContent = res.name;
  profileStatus.textContent = res.about;
  avatar.src = res.avatar
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape)
};

export function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape)

};

profileEditButton.addEventListener('click', () => {
  popupFormProfileName.value = profileName.textContent;
  popupFormProfileStatus.value = profileStatus.textContent;
  openPopup(popupChangeProfile);
  addButtonDisabled(profileEditSaveButton);
});

profileAddButton.addEventListener('click',  () => {
  openPopup(popupAddCard);
  addButtonDisabled(cardAddSaveButton);

});
