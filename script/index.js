
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

/*функции открытия/закрытия попапов*/
const popupOpenClose = document.querySelectorAll('.popup');
function openPopup (index) {
  popupOpenClose[index].classList.add('popup_opened');

};
function closePopup (index) {
  popupOpenClose[index].classList.remove('popup_opened');
 };

 /*функции добавления карточек*/

const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;

const cardContent = initialCards.map(function (i) {
  return {
    name: i.name,
    link: i.link
  }
});
function addCard ({name, link}) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = name;
  card.querySelector('.element__image').src = link;

  const trash = card.querySelector('.element__trash');
  trash.addEventListener('click', function (evt) {
    evt.preventDefault();
    const cardItem = trash.closest('.element');
    cardItem.remove();
  });

  const like = card.querySelector('.element__like');
  like.addEventListener('click', function() {
    like.classList.toggle('element__like_active');
  });

  cardContainer.prepend(card);

  card.querySelector('.element__image').addEventListener('click', function () {
    openPopup(2);
    fullImage.src = card.querySelector('.element__image').src;
    fullImageSignature.textContent = card.querySelector('.element__title').textContent;
  });
};

function add () {
  cardContent.forEach(addCard);
};
add();
/*закрывающие иконки*/
iconCloseProfilePopup.addEventListener('click', function ()  {
  closePopup(0);
});
iconClosePopupAddCard.addEventListener('click', function() {
  closePopup(1);
 });
 popupOpenFullImageCloseIcon.addEventListener('click', function () {
  closePopup(2);
}
);

/*кнопки сохранения данных попапов*/
profileEditSaveButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  closePopup(0);
});

const profileForm = document.querySelector('.profile-form');
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
};
profileForm.addEventListener('submit', handleFormSubmit);

cardAddSaveButton.addEventListener('click', function (evt) {
  const newCard = {link: popupFormCardLink.value, name: popupFormCardName.value};
  evt.preventDefault();
  addCard(newCard);
  closePopup(1);

})
cardAddSaveButton.addEventListener('submit', addCard);

/*кнопки открытия попапов*/
profileEditButton.addEventListener('click', function () {
  openPopup(0);
  popupFormProfileName.value = '';
  popupFormProfileStatus.value = '';
});

profileAddButton.addEventListener('click', function () {
  openPopup(1);
  popupFormCardName.value = '';
  popupFormCardLink.value = '';
});











