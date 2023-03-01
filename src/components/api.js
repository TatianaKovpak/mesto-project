

import { popupFormProfileName, popupFormProfileStatus, popupFormCardName, popupFormCardLink } from "./modal.js";




export const getProfile =  () => {
return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-21/users/me', {
  headers: {
    authorization: '32500f88-9bcc-4f6b-88ae-6715e577625c'
  }
})
  .then(res => res.json())
}

export const getCards = () => {
 return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
    headers: {
      authorization: '32500f88-9bcc-4f6b-88ae-6715e577625c'
    }
  })
  .then(res => res.json())
}

export const patchProfile = () => {
 return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '32500f88-9bcc-4f6b-88ae-6715e577625c',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: popupFormProfileName.value,
    about: popupFormProfileStatus.value
  })
});
}

export const postCard = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
  method: 'POST',
  headers: {
    authorization: '32500f88-9bcc-4f6b-88ae-6715e577625c',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: popupFormCardName.value,
    link: popupFormCardLink.value


  })
});
}
