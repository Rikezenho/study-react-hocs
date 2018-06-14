import React from 'react';
import { withLoading } from '../hocs/withLoading';

const Infos = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>
      <img
        alt="me"
        src='https://avatars3.githubusercontent.com/u/932808?s=460&v=4'
        style={{ margin: '0 auto' }}
      />
    </li>
    <li>My name: Henrique Kuwai</li>
    <li>My username: rikezenho</li>
    <li>My login: rikezenho</li>
  </ul>
);

export default withLoading(Infos);