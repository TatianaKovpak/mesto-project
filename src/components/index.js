
import '../pages/index.css';

import { addNewCard, addDefaultCard } from './card.js';

import { addButtonDisabled, renderLoading } from './utils.js';

import { openPopup, closePopup, popupAddCard, popupChangeProfile, profileAddButton, profileEditButton, popupFormCardName, popupFormCardLink, profileEditSaveButton, cardAddSaveButton, popupFormProfileName, popupFormProfileStatus, profileName, profileStatus, avatar, avatarInput, avatarChangePopup, avatarSaveButton } from './modal.js';

import { enableValidation } from './validate.js'

import { changeAvatar,  patchProfile, postCard, getProfile, getCards } from './api.js';

export let userId

Promise.all([getProfile(), getCards()])

.then(([userInfo, cards]) => {
  console.log(userInfo, cards)
  userId = userInfo._id
  profileName.textContent = userInfo.name;
  profileStatus.textContent = userInfo.about;
  avatar.src = userInfo.avatar
  cards.forEach(addDefaultCard)

})
.catch((err) => {
  console.log(err)
})

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
const avatarForm = document.querySelector('#avatar-form')


function handleFormSubmitAvatar(evt) {
  evt.preventDefault();

  renderLoading(true, avatarSaveButton)

  changeAvatar()
  .then(res =>{
    // res.src = avatarInput.value
    // window.location.reload()
    avatar.src = res.avatar
})
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, avatarSaveButton)
  })
  avatarForm.reset()
  closePopup(avatarChangePopup)

}
avatarForm.addEventListener('submit', handleFormSubmitAvatar)

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  // const newCard = {name: popupFormCardName.value, link: popupFormCardLink.value, likes: [], owner: {_id: userId}}

  renderLoading(true, cardAddSaveButton)
  //+
  postCard()
  .then(res => {
    // console.log(res)
    addNewCard(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, cardAddSaveButton)
    })
  closePopup(popupAddCard)

};

cardForm.addEventListener('submit', handleFormSubmitAddCard);

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  closePopup(popupChangeProfile);
  renderLoading(true, profileEditSaveButton)
  patchProfile()
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, profileEditSaveButton)
  })
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






