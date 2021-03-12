import {LitElement, html, css } from 'lit-element';
import './lit-aire-dm';

export class LitClima extends LitElement {
  static get is() {
    return 'lit-clima';
  }

  static get properties() {
    return {
      response: { type: Array }
    };
  }

  constructor() {
    super();
    this.response = [];
  }

  static get styles() {
    return css`
    .container {
      display: flex;
    }
    .card-container {
      text-align: center;
    }
    .card {
      border: 1px solid gray;
      margin: 1rem;
      padding: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    `;
  }

  render() {
    return html`
      <lit-aire-dm @clima="${this.getDataClima}"></lit-aire-dm>
      <div>
        <div class="card-container">
          ${this.getClimaTemplate}
        </div>
      </div>
    `;
  }

  getDataClima(event) {
    const { detail } = event;
    this.response = detail;
  }

  get getClimaTemplate() {
    return html`
      ${this.response.map(item => html`
        <div class="card">${item.name}</div>
      `)}
    `;
  }

}
customElements.define(LitClima.is, LitClima);
