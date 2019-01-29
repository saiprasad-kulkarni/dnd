import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import './App.css';

import Target from './components/Target'
import Item from './components/Item'

class App extends Component {

  state = {
    items: [
      { id: 1, name: 'image' },
      { id: 2, name: 'Source Code' },
      { id: 3, name: 'expiration date' },
      { id: 4, name: 'Text' },
      { id: 5, name: 'Qr code' },
      { id: 6, name: 'Bar code' }
    ],
    droppedItems: []
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);
      this.showDraggedItem(items, id);

      items.splice(index, 1);

      return { items };
    })
  }

  showDraggedItem = (items, id) => {
    let droppedItem = items.filter((item) => {
      if (item.id === id) {
        return item;
      }
    }
    )[0];
    this.state.droppedItems.push(droppedItem);
    this.setState({ droppedItems: this.state.droppedItems });
  }

  render() {
    return (
      <div>
        <div style={{ width: '100%', display: 'inline-flex' }}>
          <Target />
          <div style={{ width: '30%', border: '1px solid grey', margin: '10px' }}>
            <div>
              <h5 style={{ margin: '0', padding: '5px', textAlign: 'left', backgroundColor: '#e2e2e2' }}>Design Object Palette</h5>
              {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '30%', height: 'auto', border: '1px solid grey', margin: '10px', display: 'inline-block' }}>
          <h5 style={{ margin: '0', padding: '5px', textAlign: 'left', backgroundColor: '#e2e2e2' }}>Dragged Items</h5>
          <ul style={{ listStyleType: 'none' }}>
            {this.state.droppedItems.map(value => (
              <li key={value.id} style={{ padding: '10px' }}>{value.name}</li>
            ))}
          </ul>
        </div>
        <button style={{ padding: '5px 10px', margin: '0 5px', borderRadius: '5px', backgroundColor: 'lightgrey', float: 'right' }}>Cancel</button>
        <button style={{ padding: '5px 10px', margin: '0 5px', borderRadius: '5px', backgroundColor: '#00ffff', float: 'right' }}>Save</button>
      </div >
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
