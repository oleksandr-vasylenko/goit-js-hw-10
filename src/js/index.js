import '../css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import markup from './templates/markup.hbs';

const fieldRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const InfoRef = document.querySelector('.country-info');
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

fieldRef.addEventListener('input', debounce(onInput, 300));

export function onInput(e) {
  let searchText = e.target.value;
  console.log(searchText);

  fetchCountries().then(data => {
    console.log(data.filter(item => item.name.official.includes(searchText)));
  });
}
// InfoRef.insertAdjacentHTML('beforeend', markup(data[0]))
