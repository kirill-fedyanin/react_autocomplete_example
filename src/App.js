import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from 'react-autocomplete';
 const styles = {
      item: {
            padding: '2px 6px',
            cursor: 'default'
          },

      highlightedItem: {
            color: 'white',
            background: 'hsl(200, 50%, 50%)',
            padding: '2px 6px',
            cursor: 'default'
          },

      menu: {
            border: 'solid 1px #ccc'
          }
  }

class App extends Component {
  constructor(){
    super()
    this.state = {value: null}
    // this.items = [{name: 'Abby', id: 'a'}, {name: 'Road', id: 'r'}]
    this.items = ['aaha', 'uuhu', 'sdfsdf', 'aeuiqweu', 'asdifuisdfu', 'tyuweriwer',
      'askjdfj', 'kdjfksdf', 'sdkfjsdfjx']
  }
   render() {
    return (
      <div>
        <label>Адрес</label>
        <Autocomplete
          value={this.state.value}
          getItemValue={(item) => item}
          items={this.items}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          shouldItemRender={(state, value) => (state.indexOf(value) !== -1)}
          renderItem={(item, isHighlighted) => (
                        <div
                          style={isHighlighted ? styles.highlightedItem : styles.item}
                        >{item}</div>
                      )}
         ></Autocomplete>
        <div> {this.state.value} </div>
      </div>
    );
  }
}

export default App;
