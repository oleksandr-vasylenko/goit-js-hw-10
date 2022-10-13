import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const fieldRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const infoRef = document.querySelector('.country-info');

fieldRef = addEventListener('input', onInput);

function onInput(e) {
  let searchText = e.target.value;

  function fetchCountries() {
    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }
}
