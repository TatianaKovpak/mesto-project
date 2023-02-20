import { openPopup } from "./modal.js";


export const initialCards = [
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

export const cardContainer = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupOpenFullImage = document.querySelector('.popup_preview');
export const popupOpenFullImageContentContainer = popupOpenFullImage.querySelector('.popup__content');
export const popupOpenFullImageCloseIcon = popupOpenFullImageContentContainer.querySelector('.close-icon');
export const fullImage = popupOpenFullImageContentContainer.querySelector('.popup__image_full');
export const fullImageSignature = popupOpenFullImageContentContainer.querySelector('.popup__image-signature');


export function createCard (element) {
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
    fullImage.src = card.querySelector('.element__image').src;
    fullImage.alt = card.querySelector('.element__title').textContent;
    fullImageSignature.textContent = card.querySelector('.element__title').textContent;
    openPopup (popupOpenFullImage);
  });
  return card
};

export function addDefaultCard (card) {
  const defaultCard = createCard(card);
  cardContainer.append(defaultCard);
}

initialCards.forEach(addDefaultCard);

export function addNewCard (card) {
  const newCard = createCard(card);
  cardContainer.prepend(newCard);
}
