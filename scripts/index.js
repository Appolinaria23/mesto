const editButtonElement = document.querySelector('.profile__btn-edit');
const closeButtonElement = document.querySelector('.popup__btn-close');
const popupElement = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form')

let nameProfileElement = document.querySelector('.profile__name');
let aboutProfileElement = document.querySelector('.profile__about');

let namePopupElement = document.querySelector('.popup__input_el_name');
let aboutPopupElemnt = document.querySelector('.popup__input_el_about');

function togglePopup() {
    popupElement.classList.toggle('popup_opened');
}

function openPopup() {
    togglePopup();
    namePopupElement.value = nameProfileElement.textContent;
    aboutPopupElemnt.value = aboutProfileElement.textContent;
}

function editProfile(e) {
    e.preventDefault();
    nameProfileElement.textContent = namePopupElement.value;
    aboutProfileElement.textContent = aboutPopupElemnt.value;
    togglePopup();
}

editButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', togglePopup);
formElement.addEventListener('submit', editProfile);