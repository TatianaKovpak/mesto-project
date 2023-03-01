import { openPopup, popupAddCard } from "./modal.js";
import { getCards, getProfile } from "./api.js";


export const cardContainer = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupOpenFullImage = document.querySelector('.popup_preview');
export const popupOpenFullImageContentContainer = popupOpenFullImage.querySelector('.popup__content');
export const fullImage = popupOpenFullImageContentContainer.querySelector('.popup__image_full');
export const fullImageSignature = popupOpenFullImageContentContainer.querySelector('.popup__image-signature');



export function createCard (element) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = card.querySelector('.element__title').textContent;



  if (element.owner._id === '4513125bff9de8b685acca9e') {
  const trash = card.querySelector('.element__trash');
  trash.disabled = false
  trash.classList.add('element__trash_visible')
  trash.addEventListener('click', evt => {
    evt.preventDefault();
    const cardItem = trash.closest('.element');
    cardItem.remove();
  })
  }

  const like = card.querySelector('.element__like');

  like.addEventListener('click', () => {
    like.classList.toggle('element__like_active');
  });

  const likeQuantity = card.querySelector('.element__like-quantity');
  likeQuantity.textContent = element.likes.length;



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



export function addNewCard (card) {
  const newCard = createCard(card);
  cardContainer.prepend(newCard);

}

getCards()
.then(res => {
  res.forEach(addDefaultCard)
  console.log(res)
})



