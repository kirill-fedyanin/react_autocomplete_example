import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState =  {
  company: {
    name: '',
    inn: ''
  },
  companySuggestions: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPANY_NAME':
      return {
        ...state,
        company: {...state.company, name: action.value}
      }
    case 'SUGGEST_COMPANY':
      let companySuggestions = [
        {name: 'aza', inn: 120},
        {name: 'cza', inn: 333},
        {name: 'bza', inn: 210}
      ]
      return {...state, companySuggestions}
    case 'SELECT_COMPANY':
      return {...state, company: action.selected}
    default:
      return state
  }
}

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
