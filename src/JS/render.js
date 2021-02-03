import templateForAll from '../templates/country-all.hbs';  //template for all countrires
import templateForOne from '../templates/country-1.hbs';    //template for one country
import error from './notification';  //Pnotify

const countriesList = document.querySelector('.countries-list');


// function for rendering countries depending on request

export default function renderItems(items) {
    
    const markupAll = templateForAll(items);
    
    if (items.length > 2 && items.length < 10) {
        countriesList.insertAdjacentHTML('beforeend', markupAll);
    }

    const markupOne = templateForOne(items);
    if (items.length === 1) {
        countriesList.insertAdjacentHTML('beforeend', markupOne);
    }

    if (items.length > 10) {
        error({
          title: 'Too many matches found',
          text: 'Please enter a more specific query!',
          delay: 2500,
             });
    }
    
}




