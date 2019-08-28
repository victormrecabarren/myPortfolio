import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Project from './components/Project'

class App extends Component {
  state = {
    projects: [],
    mode: 'portfolio',
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/projects')
    .then(res=>res.json())
    .then(projects=>this.setState({
      projects: projects
    }))
    .catch(err=>console.log(err))

    fetch(`https://react-rails-spotify.herokuapp.com/playlists`, {mode:'no-cors'})
    .then(res=>console.log('woke up spotify'))

    fetch(`https://mycupcakesapi.herokuapp.com/cart_items`, {mode:'no-cors'})
    .then(res=>console.log('woke up cupcakes'))

    fetch(`https://festivalscheduler.herokuapp.com/CampFlogGnaw/Saturday/Lineup`, {mode:'no-cors'})
    .then(res=>console.log('woke up scheduler'))

  }

  changeDisplay = (mode) => {
    this.setState({
      mode: mode
    })
  }

  render() {
    return (
      <>

      <header className="headerComponent">
        <Header
          changeDisplay={this.changeDisplay}
          mode={this.state.mode}
         />
      </header>

      <div
        className="mainComponent">
        <Main
          mode={this.state.mode}
         />
      </div>

      </>
    )
  }
}



export default App
