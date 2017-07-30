import React from 'react';
import ReactDOM from 'react-dom';

import PlayerList from './player-list.jsx';
import PlayerDetails from './player-details.jsx';

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
    const player = this.state.selectedPlayer;

    return (
      <div>
        <h2>Implementation on React</h2>

        <PlayerList players={players} onPlayerClick={this.handlePlayerClick} />
        <PlayerDetails player={player} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
