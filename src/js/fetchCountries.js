import { onInput } from './index';

export function fetchCountries() {
  return fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages'
  ).then(response => {
    if (!response.ok) {
      throw new Error('The search is failed');
    }
    return response.json();
  });
}

// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
