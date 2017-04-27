import React, { Component } from 'react'
import NameInput from './NameInput'

export default class CompanyForm extends Component {
  render() {
    return (
      <form>
        <NameInput />
        <button>Отправить</button>
      </form>
    )
  }
}
