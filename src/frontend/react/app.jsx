import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import PageList from './page-list.jsx';
import PageCompare from './page-compare.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      selectedPlayer: null
    };

    this.handlePlayerClick = this.handlePlayerClick.bind(this);

    fetch('/api/get-players/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((players) => {
        this.setState({
          players: players
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handlePlayerClick(player) {
    this.setState({
      selectedPlayer: player
    })
  }

  render() {
    const players = this.state.players;
    const selectedPlayer = this.state.selectedPlayer;

    return (
      <div>
        <h2>Implementation on React</h2>

        <Router>
          <div>
            <ul>
              <li><Link to="/">List of players</Link></li>
              <li><Link to="/compare">Comparison of players</Link></li>
            </ul>

            <Switch>
              <Route exact path="/" render={props => (
                <PageList players={players} selectedPlayer={selectedPlayer} onPlayerClick={this.handlePlayerClick} />
              )} />
              <Route exact path="/compare" render={props => (
                <PageCompare players={players} />
              )} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
