import { LitElement, html, css } from 'lit-element';
import './lit-main';
import './lit-clima';


export class LitApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .show {
        display: inline-block;
      }

      .hide {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
    this.addEventListener('show-login', event => {
      this.nextPage();
    });
  }

  render() {
    return html`
      <lit-main></lit-main>
      <lit-clima class="hide"></lit-clima>
    `;
  }

  nextPage() {
    this.shadowRoot.querySelector('lit-main').classList.remove('show');
    this.shadowRoot.querySelector('lit-main').classList.add('hide');
    this.shadowRoot.querySelector('lit-clima').classList.remove('hide');
    this.shadowRoot.querySelector('lit-clima').classList.add('show');
  }





}
