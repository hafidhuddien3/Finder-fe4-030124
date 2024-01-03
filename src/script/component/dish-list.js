import './dish-item.js';

class DishList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set dishs(dishs) {
    this._dishs = dishs;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._dishs.forEach(dish => {
      const dishItemElement = document.createElement('dish-item');
      dishItemElement.dish = dish;
      this.shadowDOM.appendChild(dishItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
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

customElements.define('dish-list', DishList);
