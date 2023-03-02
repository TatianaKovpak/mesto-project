

import { popupFormProfileName, popupFormProfileStatus, popupFormCardName, popupFormCardLink, avatarInput } from "./modal.js";

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
  .then(res => {
    if (res.ok) {
    return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
})
}

export const getCards = () => {
 return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
    return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
})
}

export const patchProfile = () => {
 return fetch (`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: popupFormProfileName.value,
    about: popupFormProfileStatus.value
  })
});
}

export const postCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify({
    name: popupFormCardName.value,
    link: popupFormCardLink.value
  })
});
}

export const removeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
}

export const putLike =  (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
})
}

export const removeLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
})
}

export const changeAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarInput.value
    })
  })

}
