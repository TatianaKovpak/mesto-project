

export function addButtonDisabled(buttonElement) {
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__button_disabled');
};


export const renderLoading = (isLoading, buttonEl) => {
  if (isLoading) {
    buttonEl.textContent = 'Сохранение...'
  } else {
    buttonEl.textContent = 'Сохранить'
  }

}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка:${res.status}`);
}



