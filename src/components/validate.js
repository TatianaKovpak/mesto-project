export function showError(formEl, inputEl, validationObject, errorMessage ) {
  const formError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.add(validationObject.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(validationObject.errorClass);

};
export function hideError(formEl, inputEl, validationObject) {
  const formError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.remove(validationObject.inputErrorClass);
  formError.classList.remove(validationObject.errorClass);
  formError.textContent = '';
};

export function checkByRegex (inputEl) {
const regex = /^[a-z а-яё-]+$/gi;
if (regex.test(inputEl.value)) {
  return true
} else {
  return false
}
};

export function isValid(formEl, inputEl, validationObject) {
   if(!inputEl.validity.valid) {
    showError(formEl, inputEl, validationObject, inputEl.validationMessage);
  }  else if (inputEl.type === 'text' && !checkByRegex(inputEl)) {
      const regError = inputEl.getAttribute('data-valid');
      showError(formEl, inputEl, validationObject, regError);
  } else {
    hideError(formEl, inputEl, validationObject);

    }
};

export function setEventListeners(formEl, validationObject) {
  const inputList = Array.from(formEl.querySelectorAll(validationObject.inputSelector));
  const buttonEl = formEl.querySelector(validationObject.submitButtonSelector);

  toggleButtonState(inputList, buttonEl, validationObject);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      isValid(formEl, inputEl, validationObject);
      //checkByRegex(inputEl);
      toggleButtonState(inputList, buttonEl, validationObject);
    });
  });
};

export function hasInvalidInput(inputList) {
  return inputList.some((inputEl) => {
    if (!inputEl.validity.valid) {
      return true
    } else if (!checkByRegex(inputEl) && inputEl.type === 'text') {
      return true
    }
    return false
  });
};


export function toggleButtonState(inputList, buttonEl, validationObject) {

if (hasInvalidInput(inputList)) {
  buttonEl.classList.add(validationObject.inactiveButtonClass);
  buttonEl.disabled = true;
} else {
    buttonEl.classList.remove(validationObject.inactiveButtonClass);
    buttonEl.disabled = false;
  }
};

export function enableValidation(validationObject) {
  const formList = Array.from(document.querySelectorAll(validationObject.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', evt => {
    evt.preventDefault();
    });
    setEventListeners(formEl, validationObject);
  });
};
