import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcAvatarComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .view-container {
      overflow: auto;
      position: relative;
      flex-grow: 1;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
      margin: 0 8px 0 0;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .button {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-gray-900));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <igc-avatar src="/src/assets/Logo.svg" size="small" shape="circle" class="avatar"></igc-avatar>
        <igc-button variant="flat" @click="${() => Router.go('/view1')}" class="button">
          View 1
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" @click="${() => Router.go('/view2')}" class="button">
          View 2
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" @click="${() => Router.go('/view3')}" class="button">
          View 3
          <igc-ripple></igc-ripple>
        </igc-button>
      </igc-navbar>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
