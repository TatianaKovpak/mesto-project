import { openPopup, removeCardPopup, removeCardButton, closePopup } from "./modal.js";
import { putLike, removeCard, removeLike } from "./api.js";
import { userId } from "./index.js";


export const cardContainer = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupOpenFullImage = document.querySelector('.popup_preview');
export const popupOpenFullImageContentContainer = popupOpenFullImage.querySelector('.popup__content');
export const fullImage = popupOpenFullImageContentContainer.querySelector('.popup__image_full');
export const fullImageSignature = popupOpenFullImageContentContainer.querySelector('.popup__image-signature');

const deleteConfig = {
    id : null,
    elem : null
};

export function createCard (element) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = card.querySelector('.element__title').textContent;


  const cardId = element._id
  if (element.owner._id === userId) {
    const trash = card.querySelector('.element__trash');
    trash.disabled = false;
    trash.classList.add('element__trash_visible');
    trash.addEventListener('click', () => {
      openPopup(removeCardPopup);
      deleteConfig.id = element._id;
      deleteConfig.elem = trash.closest('.element');
  })
  }
  const like = card.querySelector('.element__like');
  const likeQuantity = card.querySelector('.element__like-quantity');
  const findLike = () => {
    for (let i of Object.values(element.likes)) {
      if(i._id === userId) {
        like.classList.add('element__like_active');
      }
    }
  }
  findLike()

  likeQuantity.textContent = element.likes.length;

  like.addEventListener('click', (evt) => {
   if ((evt.target.classList.contains('element__like_active')) || ((!evt.target.classList.contains('element__like_active')) && (element.likes._id === userId))) {
     removeLike(cardId)
     .then(res => {
        like.classList.toggle('element__like_active');
        likeQuantity.textContent = res.likes.length;
     })
     .catch((err) => {
      console.log(err)
     })
   } else {
    putLike(cardId)
    .then(res => {
      like.classList.add('element__like_active');
      likeQuantity.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err)
    })
   }
  })
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


removeCardButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  removeCard(deleteConfig.id)
  .then(() => {
    deleteConfig.elem.remove();
    closePopup(removeCardPopup);
  })
  .catch((err) => {
  console.log(err);
})
})


