import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import ReduxMixin from '../redux/mixin';

/**
 * @customElement
 * @polymer
 */
class PolymerReduxApp extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[title]]!</h2>
      <input type="text" placeholder="Nuevo mensaje" id="message">
      <button on-click="save">Cambiar</button>
    `;
  }

  static get properties() {
    return {
      title: String
    };
  }

  static mapStateToProps(state) {
    return {
      title: state.message
    };
  }

  save() {
    const action = {
      type: 'UPDATE_MESSAGE',
      value: this.$.message.value
    };
    this.dispatchAction(action);
  }
}

window.customElements.define('polymer-redux-app', PolymerReduxApp);
