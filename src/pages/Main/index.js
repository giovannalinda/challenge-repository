import React, { Component } from 'react'
import { FaSpinner, FaPlus } from 'react-icons/fa'
import api from '../../services/api'
import { Form, SubmitButton, Title, List } from './styles'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      newRepository: '',
      repositories: [],
      loading: false,
    }
  }

  // Carregar os dados do LocalStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories')

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) })
    }
  }

  // Salvarar os dados do LocalStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories))
    }
  }

  handleInputChange = (event) => {
    this.setState({ newRepository: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ loading: true })

    const { newRepository, repositories } = this.state

    const response = await api.get(`/repos/${newRepository}`)

    const data = {
      name: response.data.full_name,
    }

    this.setState({
      repositories: [...repositories, data],
      newRepository: '',
      loading: false,
    })
  }

  render() {
    const { newRepository, loading, repositories } = this.state

    return (
      <>
        <Title>Adicione o repositório do GitHub.</Title>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepository}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a href={repository}>Detalhes</a>
            </li>
          ))}
        </List>
      </>
    )
  }
}
