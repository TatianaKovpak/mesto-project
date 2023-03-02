import { openPopup, removeCardPopup, removeCardButton, closePopup } from "./modal.js";
import { getCards, putLike, removeCard, removeLike } from "./api.js";


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


  const cardId = element._id;

  if (element.owner._id === '4513125bff9de8b685acca9e') {
    const trash = card.querySelector('.element__trash');
    trash.disabled = false
    trash.classList.add('element__trash_visible')
    trash.addEventListener('click', evt => {
      openPopup(removeCardPopup);
      removeCardButton.addEventListener('click', () => {
      evt.preventDefault();
      const cardItem = trash.closest('.element');
      removeCard(cardId)
      .catch((err) => {
        console.log(err)
      })
      cardItem.remove();
      closePopup(removeCardPopup)
    })
    })
    }

  const like = card.querySelector('.element__like');
  const likeQuantity = card.querySelector('.element__like-quantity');
  const findLike = () => {
    for (let i of Object.values(element.likes)) {
      if(i._id ==='4513125bff9de8b685acca9e') {
        like.classList.add('element__like_active')

      }
    }
  }
  findLike()

  likeQuantity.textContent = element.likes.length;

  like.addEventListener('click', (evt) => {
   if ((evt.target.classList.contains('element__like_active')) || ((!evt.target.classList.contains('element__like_active')) && (element.likes._id === '4513125bff9de8b685acca9e'))) {
     removeLike(cardId)
     .catch((err) => {
      console.log(err)
     })
        like.classList.toggle('element__like_active');
        element.likes.length --
        likeQuantity.textContent = element.likes.length;

   } else {
    putLike(cardId)
    .catch((err) => {
      console.log(err)
    })
      like.classList.add('element__like_active');
      element.likes.length ++
      likeQuantity.textContent = element.likes.length;
   }
  })
  //console.log(element.likes)

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
.catch((err) => {
  console.log(err)
})



