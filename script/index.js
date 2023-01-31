
/*переменные профиля*/
const popupChangeProfile = document.querySelector('.popup__edit-profile');
const profileEditButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const iconCloseProfilePopup = popupChangeProfile.querySelector('.close-icon');
const popupFormProfileName = popupChangeProfile.querySelector('.popup__form-name');
const popupFormProfileStatus = popupChangeProfile.querySelector('.popup__form-status');
const profileEditSaveButton = popupChangeProfile.querySelector('.popup__button');

/*переменные карточек*/
const profileAddButton = document.querySelector('.profile__add');
const popupAddCard = document.querySelector('.popup__add-card');
const iconClosePopupAddCard = popupAddCard.querySelector('.close-icon');
const cardAddSaveButton = popupAddCard.querySelector('.popup__button');
const popupFormCardName = popupAddCard.querySelector('.popup__form-name');
const popupFormCardLink = popupAddCard.querySelector('.popup__form-status');

/*переменные полного изображения*/
const popupOpenFullImage = document.querySelector('.popup_preview');
const popupOpenFullImageContentContainer = popupOpenFullImage.querySelector('.popup__content');
const popupOpenFullImageCloseIcon = popupOpenFullImageContentContainer.querySelector('.close-icon');
const fullImage = popupOpenFullImageContentContainer.querySelector('.popup__image_full');
const fullImageSignature = popupOpenFullImageContentContainer.querySelector('.popup__image-signature');

/*функция открытия/закрытия попапов*/

function openClosePopup (popupElement) {
  popupElement.classList.toggle('popup_opened');
};


 /*добавление карточек*/

 const cardContainer = document.querySelector('.elements');
 const cardTemplate = document.querySelector('#card-template').content;


function createCard (element) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = card.querySelector('.element__title').textContent;

 const trash = card.querySelector('.element__trash');
  trash.addEventListener('click', evt => {
    evt.preventDefault();
    const cardItem = trash.closest('.element');
    cardItem.remove();
  });

  const like = card.querySelector('.element__like');
  like.addEventListener('click', () => {
    like.classList.toggle('element__like_active');
  });

  card.querySelector('.element__image').addEventListener('click', () => {
    openClosePopup (popupOpenFullImage);
    fullImage.src = card.querySelector('.element__image').src;
    fullImage.alt = card.querySelector('.element__title').textContent;
    fullImageSignature.textContent = card.querySelector('.element__title').textContent;
  });
  return card
};

function addDefaultCard (card) {
  const defaultCard = createCard(card);
  cardContainer.append(defaultCard);
}

initialCards.forEach(addDefaultCard)

function addNewCard (card) {
  const newCard = createCard(card);
  cardContainer.prepend(newCard);
}



/*закрывающие иконки*/
iconCloseProfilePopup.addEventListener('click', () => {
  openClosePopup(popupChangeProfile)
});
iconClosePopupAddCard.addEventListener('click', () => {
  openClosePopup(popupAddCard)
});
 popupOpenFullImageCloseIcon.addEventListener('click', () => {
   openClosePopup(popupOpenFullImage)
  });

/*кнопки сохранения данных попапов*/
profileEditSaveButton.addEventListener('click', evt => {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  openClosePopup(popupChangeProfile);
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
  newCard = {link: popupFormCardLink.value, name: popupFormCardName.value};
  addNewCard(newCard);
  openClosePopup(popupAddCard) ;

})
cardAddSaveButton.addEventListener('submit', createCard);

/*кнопки открытия попапов*/
profileEditButton.addEventListener('click', () => {
  openClosePopup(popupChangeProfile);
  popupFormProfileName.value = '';
  popupFormProfileStatus.value = '';
});

profileAddButton.addEventListener('click',  () => {
  openClosePopup(popupAddCard);
  popupFormCardName.value = '';
  popupFormCardLink.value = '';
});











