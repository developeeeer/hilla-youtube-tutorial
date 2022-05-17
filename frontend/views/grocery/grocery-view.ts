import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/grid';
import GroceryItem from '../../generated/com/example/application/GroceryItem';
import { GroceryEndpoint } from 'Frontend/generated/endpoints';
import { Binder, field } from '@hilla/form';
import GroceryItemModel from '../../generated/com/example/application/GroceryItemModel';

@customElement('grocery-view')
export class GroceryView extends View {
  @state() groceryItems: GroceryItem[] = [];
  private binder = new Binder(this, GroceryItemModel);

  render() {
    const { model } = this.binder;

    return html`
      <div>
        <vaadin-text-field label="Item" ${field(model.name)}></vaadin-text-field>
        <vaadin-number-field label="Quantity" ${field(model.quantity)}></vaadin-number-field>
        <vaadin-button theme="primary" @click=${this.addItem}>Add</vaadin-button>
      </div>
      <vaadin-grid .items=${this.groceryItems}>
        <vaadin-grid-column path="name"></vaadin-grid-column>
        <vaadin-grid-column path="quantity"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  async addItem() {
    const saved = await this.binder.submitTo(GroceryEndpoint.save);
    if (saved) {
      this.groceryItems.push(saved);
      this.binder.clear();
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'flex-col', 'h-full', 'p-l', 'box-border');

    this.groceryItems = await GroceryEndpoint.findAll();
  }
}
