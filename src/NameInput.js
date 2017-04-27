import React, { Component } from 'react'
import { connect } from 'react-redux'
// import fetch from 'isomorphic-fetch'
import AutocompleteInput from './AutocompleteInput'




class NameInputBase extends Component {
  constructor(){
    super()
    this.state = {
      selected: {
        name: ''
      },
      suggestions: []
    }
  }

  handleChange = (event, value) => {
    let suggestions = [
      {name: 'aza', inn: 120},
      {name: 'bza', inn: 210}
    ]

    // fetch('http://localhost:3000/api_local/parties',{
    //   headers: {'Content-Type': 'application/json'},
    //   method: 'POST',
    //   body: JSON.stringify({query: value})
    // }).then((response) => response.json())
    //   .then((suggestions) => {
    //     this.setState({...this.state, suggestions})
    //   })
    this.setState({ ...this.state, suggestions, selected: {name:value}})
  }

  // handleSelect = (name) => {
  //   let selected = this.state.suggestions.find((suggestion) => {
  //     return suggestion.name === name
  //   })
  //   this.setState({...this.state, selected})
  // }

  render() {
    return (
      <div>
        <label>Название</label>
        <AutocompleteInput
          selected={this.props.selected}
          suggestions={this.props.suggestions}
          handleChange={this.props.handleChange}
          handleSelect={(name) => {
            this.props.handleSelect(name, this.props.suggestions)
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.company,
    suggestions: state.companySuggestions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event, value) => {
      dispatch({type: 'SET_COMPANY_NAME', value})
      dispatch({type: 'SUGGEST_COMPANY'})
    },
    handleSelect: (name, suggestions) => {
      let selected = suggestions.find((suggestion) => {
        return suggestion.name === name
      })
      dispatch({type: 'SELECT_COMPANY', selected})
    }
  }
}


const NameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameInputBase)

export default NameInput














