import React, { Component } from 'react'
import './App.css'

import Infos from './components/Infos'
import List from './components/List'

const infoApiURL = 'https://api.github.com/users/Rikezenho'
const reposApiURL = 'https://api.github.com/users/Rikezenho/repos'
const starredApiURL = 'https://api.github.com/users/Rikezenho/starred'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infos apiUrl={infoApiURL} />
        <List apiUrl={reposApiURL} title='Minha lista de repos:' />
        <List apiUrl={starredApiURL} title='Minha lista de favoritos:' />
      </div>
    )
  }
}

export default App
