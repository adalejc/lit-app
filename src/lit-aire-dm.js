import { LitElement, html } from 'lit-element';

export class LitAireDm extends LitElement {
  static get is() {
    return 'lit-aire-dm';
  }

  static get properties() {
    return {
      url: { type: String },
      method: {type: String }
    }
  }

  constructor() {
    super();
    this.url = 'https://api.datos.gob.mx/v2/Releases_SFP';
    this.method = 'GET'
  }

  render() {
    return html`
    
    `;
  }

  firstUpdated() {
    this.getApiResponse();
  }

  getApiResponse() {
    fetch(this.url, { method: this.method })
      .then( response => {
        if (response.ok) return response.json();
        return Promise.reject(response)
      })
        .then(data =>{ 
          const { results } = data;
          this.generateData(results);
        })
        .catch(error => console.warn('algo anda mal, ', error));
  }

  generateData(response) {
   let data = response.map(item => {
      return {
        name: item.buyer.name
      }
    });

    this.sendDataResponse(data);
  }

  sendDataResponse(response) {
    this.dispatchEvent(new CustomEvent('clima', {
      detail: response,
      bubbles: true,
      composed: true
    }));
  }

}
customElements.define(LitAireDm.is, LitAireDm);