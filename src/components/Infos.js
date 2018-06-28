import React from 'react'
import { fetchAPI } from '../hocs/fetchAPI'
import { withLoading } from '../hocs/withLoading'

const Infos = ({ data }) => {
  const { avatar_url, login, name } = data

  return (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
      <li>
        <img
          alt="me"
          src={avatar_url}
          style={{ maxWidth: '200px', margin: '0 auto' }}
        />
      </li>
      <li>My name: {name}</li>
      <li>My username: {login}</li>
    </ul>
  )
}

const InfosLoading = withLoading(Infos)

export default fetchAPI(InfosLoading)