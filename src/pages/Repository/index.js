/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa'
import api from '../../services/api'
import { Loading, Owner, IssueList, Image } from './styles'
import image from '../../assets/githublogo.svg'

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  }

  async componentDidMount() {
    const { match } = this.props

    const repositoryName = decodeURIComponent(match.params.repository)

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repositoryName}`),
      api.get(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ])
    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    })
  }

  render() {
    const { repository, issues, loading } = this.state

    if (loading) {
      return (
        <Loading>
          <FaSpinner />
        </Loading>
      )
    }

    return (
      <>
        <Image src={image} alt="logo github" />
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </>
    )
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
}
