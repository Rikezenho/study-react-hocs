import React from 'react'
import { fetchAPI } from '../hocs/fetchAPI'
import { withLoading } from '../hocs/withLoading'

const List = ({ data, title }) => {
  return (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
      <li>{title}</li>
      {data.map(({ id, name, url }) => (
        <li key={id}>
          <a href={url} rel='noopener noreferrer' target='_blank'>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const ListLoading = withLoading(List)

export default fetchAPI(ListLoading)