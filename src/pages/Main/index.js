import React, { Component } from 'react'
import { Form, SubmitButton, Title } from './styles'

export default class Main extends Component {
  state = {
    newRepository: '',
  }

  handleInputChange = (event) => {
    this.setState({ newRepository: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { newRepository } = this.state

    return (
      <>
        <Title>Adicione o repositório do GitHub</Title>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepository}
            onChange={this.handleInputChange}
          />
          <SubmitButton disable>+</SubmitButton>
        </Form>
      </>
    )
  }
}
