import '../component/dish-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const dishListElement = document.querySelector('dish-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchDish(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    dishListElement.dishs = results;
  };

  const fallbackResult = message => {
    dishListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  const onButtonRandClicked = async () => {
    try {
      const result = await DataSource.randDish();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchElement.clickEvent2 = onButtonRandClicked;
};

export default main;
