import './anime-item.js';

class AnimeList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set animes(animes) {
    this._animes = animes;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._animes.forEach(anime => {
      const animeItemElement = document.createElement('anime-item');
      animeItemElement.className = "col-md-3";
      animeItemElement.anime = anime;
      this.shadowDOM.appendChild(animeItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('anime-list', AnimeList);
