class AnimeItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .anime-info {
          padding: 24px;
        }
        .anime-info > img {
          max-height: 300px;
          padding-bottom: 20px;
        }
        .anime-info > h2 {
          font-weight: lighter;
        }
        .anime-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      
      <div class="anime-info">
      <img src="${this._anime.attributes.posterImage.small}" alt="Anime">
        <h2>${this._anime.attributes.titles.en_jp}</h2>
        <p>${this._anime.attributes.description}</p>
      </div>
    `;
  }
}

customElements.define('anime-item', AnimeItem);