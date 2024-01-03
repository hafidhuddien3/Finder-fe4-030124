class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set clickEvent2(event) {
    this._clickEvent2 = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {        
          box-shadow: 3px 3px 8px 0 rgba(255, 255, 255, 0.5);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          top: 10px;
          background-color: white;
          position: -webkit-sticky;/* Safari */
           position: sticky;
           top: 80px;
           margin-left:5px;
           margin-top:5px;
        }
       
        .search-container input {
          border: 0;
          border-bottom: 1px solid coral;
          width: 100%;
        }
       
        .search-container input:focus {
          outline: 0;
          border-bottom: 2px solid coral;
        }
       
        .search-container input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container  input::placeholder {
          color: coral;
          font-weight: normal;
        }
       
        .search-container button {       
          cursor: pointer;
          margin-left:auto;
          padding: 16px;
          background-color: coral;
          color: white;
          border: 0;
          border-radius: 20px;
          text-transform: uppercase;
        }

        #randButtonElement {
          margin: auto;
          padding: auto;
        }
     
        #inputdanbutton {
          display: flex;
          flex-direction: row;}

        @media screen and (max-width: 1000px){
          .search-container {
        margin: 5px;    
            position: static;
          }
        }

      </style>
      
      <div id="search-container" class="search-container">
      <div id="inputdanbutton">
        <input placeholder="Search dish" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>
        <br>
        <button id="randButtonElement" type="submit">Random</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    this.shadowDOM.querySelector('#randButtonElement').addEventListener('click', this._clickEvent2);
  }
}

customElements.define('search-bar', SearchBar);
