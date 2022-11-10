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
          padding: 15px;
        }
        .anime-info > img {
          max-height: 300px;
          padding-bottom: 20px;
        }
        .anime-info > h3 {
          font-weight: lighter;
        }
        .anime-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      
      <div class="anime-info">
        <div class="card" style="width: 18rem;">
          <img src="${this._anime.attributes.posterImage.small}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${this._anime.attributes.titles.en_jp}</h3>
            <p class="card-text">${this._anime.attributes.description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('anime-item', AnimeItem);