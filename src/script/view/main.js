import '../component/anime-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const animeListElement = document.querySelector('anime-list');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchAnime(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        animeListElement.animes = results;
    };

    const fallbackResult = message => {
        animeListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
