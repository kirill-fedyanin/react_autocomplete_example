import React, { Component } from 'react';
import './App.css';
import Autocomplete from 'react-autocomplete';
import fetch from 'isomorphic-fetch';
const styles = getStyles();

class App extends Component {
  constructor(){
    super()
    this.state = {
      selected: {
        name: ''
      },
      items: []
    }
    // this.items = [{name: 'Abby', id: 'a'}, {name: 'Road', id: 'r'}]
  }

  handleChange = (event, value) => {
    fetch('http://localhost:3000/api_local/parties',{
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({query: value})
    }).then((response) => response.json())
      .then((items) => {
        console.log(items[0])
        this.setState({...this.state, items})
      })
    this.setState({...this.state, selected: {name:value}})
  }

  handleSelect = (selected) => {
    this.setState({...this.state, selected})
  }

  shouldRender(item, value){
    // return item.indexOf(value) !== -1;
    return true
  }

  render() {
    return (
      <div>
        <label>Адрес</label>
        <Autocomplete
          value={this.state.selected.name}
          getItemValue={(item) => item}
          items={this.state.items}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          shouldItemRender={this.shouldRender}
          renderItem={(item, isHighlighted) => (
                        <div
                          style={isHighlighted ? styles.highlightedItem : styles.item}
                        >{item.name + item.inn}</div>
                      )}
         ></Autocomplete>
        <div> {this.state.selected.name} </div>
        <div> {this.state.selected.inn} </div>
      </div>
    );
  }
}

function getStyles(){
  return {
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
}
export default App;
