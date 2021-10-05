import React, { Component } from 'react'
import api from '../../services/api'
import { Form, SubmitButton, Title } from './styles'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      newRepository: '',
      repositories: [],
    }
  }

  handleInputChange = (event) => {
    this.setState({ newRepository: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { newRepository, repositories } = this.state

    const response = await api.get(`/repos/${newRepository}`)

    const data = {
      name: response.data.full_name,
    }

    this.setState({
      repositories: [...repositories, data],
      newRepository: '',
    })
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
