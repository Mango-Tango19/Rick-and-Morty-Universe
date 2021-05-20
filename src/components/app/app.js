import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Header from '../header'
import Error from '../error'
import RandomCharacter from '../random-character'
import { CharactersPage, EpisodesPage } from '../pages/pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ServiceApi from '../../services/service'
import { ServiceProvider } from '../service-ctx/service-ctx'
import LoginPage from '../pages/login-page'
import SecretPage from '../pages/secret-page'
import './app.css'
import { EpisodeDetails } from '../rm-components'

export default class App extends Component {
  service = new ServiceApi()

  state = {
    hasError: false,
    isLoggedIn: false,
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  render() {
    const { isLoggedIn } = this.state

    if (this.state.hasError) {
      return <Error />
    }

    return (
      <div className="container">
        <Router>
          <Header />
          <RandomCharacter />

          <ServiceProvider value={this.service}>
            <Switch>
              <Route
                path="/"
                component={() => <span style={{ fontSize: '26px' }}>Welcome to Rick and Morty Universe!</span>}
                exact
              />
              <Route path="/characters/:id?" component={CharactersPage} />

              <Route path="/episodes" component={EpisodesPage} exact />
              <Route
                path="/episodes/:id"
                render={({ match }) => {
                  const { id } = match.params
                  return <EpisodeDetails itemId={id} />
                }}
              />
              <Route path="/login" render={() => <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn} />} />
              <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </ServiceProvider>
        </Router>
      </div>
    )
  }
}
