import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries';

import fullMarkup from './js/templates/fullmarkup.hbs';
import shortMarkup from './js/templates/shortmarkup.hbs';

const fieldRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const InfoRef = document.querySelector('.country-info');

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

fieldRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  listRef.innerHTML = '';
  InfoRef.innerHTML = '';

  const searchText = e.target.value.trim().toLowerCase();

  if (searchText !== '') {
    fetchCountries(searchText).then(renderMarkup).catch(onError);
  }
}

function renderMarkup(foundData) {
  if (foundData.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (foundData.length === 0) {
    onError(error);
  } else if (foundData.length <= 10 && foundData.length > 1) {
    listRef.insertAdjacentHTML('beforeend', shortMarkup(foundData));
  } else if (foundData.length === 1) {
    InfoRef.insertAdjacentHTML('beforeend', fullMarkup(foundData));
  }
}

function onError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
