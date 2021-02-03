import fetchCountries from './fetchCountries';
import renderItems from './render';
const debounce = require('lodash.debounce');

const inputRef = document.querySelector('#country-input');
const countriesList = document.querySelector('.countries-list');


const debounceRef = debounce(event => {
    countriesList.innerHTML = '';
    fetchCountries(event.target.value).then(renderItems);
    
}, 500);


inputRef.addEventListener('input', debounceRef);


