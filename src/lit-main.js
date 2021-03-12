import { LitElement, html, css } from 'lit-element';

export class LitMain extends LitElement {

  static get is() {
    return 'lit-main';
  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }

    .container {
     margin: 2rem auto;
      height: 300px;
      width: 600px;
      background-color: #fff;
      text-align: center;
      padding: 1rem;
    }

    .input {
      display: inline-block;
      width: 60%;
      margin: 1rem;
    }

    .title {
      text-align: center
    }
    `;
  }

  render() {
    return html`
      <div class="container">
        <h2>Iniciar sesión</h2>
        <input class="input" id="usuario" placeholder="Ingresa tu usuario" type="email">
        <input class="input" id="password" placeholder="Ingresa tu contraseña" type="password">
        <div>
          <button @click="${this.signIn}" >Sign in</button>
        </div>
      </div>
    `;
  }

  signIn() {
    const usuario = this.shadowRoot.querySelector('#usuario').value;
    const password = this.shadowRoot.querySelector('#password').value;

    if (!!usuario && !!password ) {
      this.dispatchEvent(new CustomEvent('show-login', {
        detail: { usuario, password },
        bubbles: true,
        composed: true
      }));
    }

    
  }

}
customElements.define(LitMain.is, LitMain);
