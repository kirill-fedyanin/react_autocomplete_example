import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

export default class AutocompleteInput extends Component {
  render() {
    return (
      <div>
        <Autocomplete
          value={this.props.selected.name}
          getItemValue={(suggestion) => suggestion.name}
          items={this.props.suggestions}
          onChange={this.props.handleChange}
          onSelect={this.props.handleSelect}
          shouldItemRender={() => (true)}
          renderItem={(suggestion, isHighlighted) => (
            <div className={isHighlighted ? 'item_highlighted' : 'item'}>
              {suggestion.name + suggestion.inn}
            </div>
          )}
         />
        <div> {this.props.selected.name} </div>
        <div> {this.props.selected.inn} </div>
      </div>
    );
  }
}
