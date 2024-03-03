class DishItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set dish(dish) {
    this._dish = dish;
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
          background-color: white;
        }
        .fan-art-dish {
          width: 75%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          border-radius: 20px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .dish-info {
          padding: 24px;
        }
        .dish-info > h2 {
          font-weight: bold;
        }
        .dish-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
          text-align: justify;
        }
        dish-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
          text-align: justify;
        }
        .yt-link {
          text-align: right;
        }
      span {
          margin: 0 5px;
      }
      p {
        margin: 0 0 8px 0;
    }
      </style>

      <br>
      <img class="fan-art-dish" src="${this._dish.strMealThumb}" alt="Fan Art">
      <div class="dish-info">
        <h2>${this._dish.strMeal}</h2>
        
        <p>${this._dish.strArea + " " + this._dish.strCategory}</p>
        ${this._dish.strTags==null?'':this._dish.strTags}
        <div class="yt-link">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        <a href="${this._dish.strYoutube}" target="_blank" >link in YouTube</a>
        <span></span>
        <a href="https://www.youtube.com/results?search_query=${this._dish.strMeal}" 
        target="_blank" >search in YouTube</a>
        </div>
      </div>
    `;
  }
}

customElements.define('dish-item', DishItem);