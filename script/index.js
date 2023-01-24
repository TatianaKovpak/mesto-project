const main = document.querySelector('.main');


function changeProfilePopup () {
  const popupChangeProfile = document.querySelector('.popup__edit-profile');
  const profileEditButton = document.querySelector('.profile__edit');
  const closeIcon = popupChangeProfile.querySelector('.close-icon');

  closeIcon.addEventListener('click', function () {
    popupChangeProfile.classList.remove('popup_opened');
  });
  profileEditButton.addEventListener('click', function () {
    popupChangeProfile.classList.add('popup_opened');
  });

  const profileName = document.querySelector('.profile__name');
  const profileStatus = document.querySelector('.profile__status');
  const popupFormProfileName = document.querySelectorAll('.popup__form-name')[0];
  const popupFormProfileStatus = document.querySelectorAll('.popup__form-status')[0];
  const profileEditSaveButton = document.querySelectorAll('.popup__button')[0];

  profileEditSaveButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  profileName.textContent = popupFormProfileName.value;
  profileStatus.textContent = popupFormProfileStatus.value;
  popupChangeProfile.classList.remove('popup_opened');

});
const profileForm = document.querySelector('.profile-form');
  function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupFormProfileName.value;
    profileStatus.textContent = popupFormProfileStatus.value;
  }
  profileForm.addEventListener('submit', handleFormSubmit);
    };
changeProfilePopup();

function addCardPopup () {
  const profileAddButton = document.querySelector('.profile__add');
  const popupAddCard = document.querySelector('.popup__add-card');
  const closeIconCard = popupAddCard.querySelector('.close-icon');
  const cardAddSaveButton = popupAddCard.querySelector('.popup__button');
  const popupFormCardName = popupAddCard.querySelector('.popup__form-name');
  const popupFormCardLink = popupAddCard.querySelector('.popup__form-status');

  closeIconCard.addEventListener('click', function () {
    popupAddCard.classList.remove('popup_opened');
  });

  profileAddButton.addEventListener('click', function () {
    popupAddCard.classList.add('popup_opened');
  });


const initialCards = [
  {
    name: 'Адыяман, Турция',
    link: 'https://images.unsplash.com/photo-1672271688662-3a03bbb75ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Нотр-Дам де Белькомб, Франция',
    link: 'https://images.unsplash.com/photo-1666644828947-4b7eeaa849b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Дубаи, ОАЭ',
    link: 'https://images.unsplash.com/photo-1673627333362-300ca95fd180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
  },
  {
    name: 'Шпиц, Швейцария',
    link: 'https://images.unsplash.com/photo-1672173037076-dbd49f3339fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  },
  {
    name: 'Кировск, Россия',
    link: 'https://img.tourister.ru/files/2/5/0/5/6/8/7/8/original.jpg'
  },
  {
    name: 'Золотая долина, Россия',
    link: 'https://images.unsplash.com/photo-1588556591443-bfa59cf8e0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
];

const cardContainer = document.querySelector('.elements');

const popupOpenFullImage = document.querySelector('.popup_preview');
const popupOpenFullImageCloseIcon = document.createElement('button');
const popupOpenFullImageContentContainer = popupOpenFullImage.querySelector('.popup__content');
popupOpenFullImageContentContainer.classList.add('popup__content_img');
popupOpenFullImageCloseIcon.classList.add('close-icon');
popupOpenFullImageCloseIcon.setAttribute('type', 'button');

const fullImage = document.createElement('img');
fullImage.classList.add('popup__image_full');
const fullImageSignature = document.createElement('h2');
fullImageSignature.classList.add('popup__image-signature');

popupOpenFullImageContentContainer.append(fullImage);
popupOpenFullImageContentContainer.append(fullImageSignature);
popupOpenFullImageContentContainer.append(popupOpenFullImageCloseIcon);


for (let i = 0; i < initialCards.length; i++) {
  const card = document.createElement('figure');
  card.classList.add('element');
  const cardImage = document.createElement('img');
  cardImage.classList.add('element__image');
  const cardName = document.createElement('h2');
  cardName.classList.add('element__title');
  const cardSignature = document.createElement('figcaption');
  cardSignature.classList.add('element__signature');
  const like = document.createElement('button');
  like.classList.add('element__like');
  const trash = document.createElement('button');
  trash.classList.add('element__trash');


  popupOpenFullImageCloseIcon.addEventListener('click', function () {
    popupOpenFullImage.classList.remove('popup_opened');
  })

  cardImage.addEventListener('click', function() {
    popupOpenFullImage.classList.add('popup_opened');
    fullImage.src = initialCards[i].link;
    fullImageSignature.textContent = initialCards[i].name;
  })

  like.addEventListener('click', function (evt) {
    evt.preventDefault();
    like.classList.toggle('element__like_active');
  })

  trash.addEventListener('click', function (evt) {
    evt.preventDefault();
    const cardItem = trash.closest('.element');
    cardItem.remove();
  })

  cardName.textContent = initialCards[i].name;
  cardImage.src = initialCards[i].link;

  card.append(cardImage);
  card.append(cardSignature);
  cardSignature.append(cardName);
  cardSignature.append(like);
  cardContainer.append(card);
  card.append(trash);

}

function addCard (evt) {
  evt.preventDefault();
  popupAddCard.classList.remove('popup_opened');

  const cardTemplate = document.querySelector('#card-template').content;
  const cardTemplateElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardTemplateElement.querySelector('.element__image').src = popupFormCardLink.value;
  cardTemplateElement.querySelector('.element__title').textContent = popupFormCardName.value;
  cardTemplateElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  cardTemplateElement.querySelector('.element__trash').addEventListener('click', function(evt) {
    cardTemplateElement.remove('.element');
  })
  cardContainer.prepend(cardTemplateElement);

  cardTemplateElement.querySelector('.element__image').addEventListener('click', function () {
    popupOpenFullImage.classList.add('popup_opened');
    fullImage.src = cardTemplateElement.querySelector('.element__image').src;
    fullImageSignature.textContent = cardTemplateElement.querySelector('.element__title').textContent;
  })
}
cardAddSaveButton.addEventListener('click', addCard);
cardAddSaveButton.addEventListener('submit', addCard);
}
addCardPopup ()
