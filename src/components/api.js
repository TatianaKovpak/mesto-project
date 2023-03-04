import { popupFormProfileName, popupFormProfileStatus, popupFormCardName, popupFormCardLink, avatarInput } from "./modal.js";
import { checkResponse } from "./utils.js";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
  headers: {
    authorization: '32500f88-9bcc-4f6b-88ae-6715e577625c',
    'Content-Type': 'application/json'
  }
}

export const getProfile =  () => {
return fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
    .then(checkResponse)
}

export const getCards = () => {
 return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse)
}




export const patchProfile = () => {
 return fetch (`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: popupFormProfileName.value,
    about: popupFormProfileStatus.value
  })
})
   .then(checkResponse)
}

export const postCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify({
    name: popupFormCardName.value,
    link: popupFormCardLink.value
  })
})
.then(checkResponse)
}

export const removeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse)
}

export const putLike =  (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
})
  .then(checkResponse)
}

export const removeLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
})
.then(checkResponse)
}

export const changeAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarInput.value
    })
  })
  .then(checkResponse)

}
