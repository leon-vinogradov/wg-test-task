import React from 'react';

import PlayerCompareInput from './player-compare-input.jsx'

export default class PlayerCompare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: null,
      player2: null,
      playerName1: '',
      playerName2: ''
    };

    this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
    this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlayer1Change(playerName) {
    this.setState({playerName1: playerName});
  }

  handlePlayer2Change(playerName) {
    this.setState({playerName2: playerName});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      player1: this.getPlayerByName(this.state.playerName1),
      player2: this.getPlayerByName(this.state.playerName2)
    });
  }

  getPlayerByName(playerName) {
    return this.props.players.find(
      (player) => !player.is_hidden && (player.name === playerName)
    );
  }

  compareStyle(value1, value2, player) {
    let backgroundColor = '#fff';

    if (value1 === value2) {
      backgroundColor = '#ff7f00';
    } else if (value1 > value2) {
      backgroundColor = player === 1 ? '#090' : '#f00';
    } else if (value1 < value2) {
      backgroundColor = player === 1 ? '#f00' : '#090';
    }

    return {
      backgroundColor: backgroundColor
    };
  }

  render() {
    const player1 = this.state.player1;
    const player2 = this.state.player2;

    return (
      <section>
        <h3>Comparison of players</h3>

        <form onSubmit={this.handleSubmit}>
          <PlayerCompareInput playerName={this.state.playerName1} placeholder="First player name" onChange={this.handlePlayer1Change} />
          <PlayerCompareInput playerName={this.state.playerName2} placeholder="Second player name" onChange={this.handlePlayer2Change} />

          <button>Compare</button>
        </form>

        {(player1 && player2) ? (
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>First player</th>
                <th>Second player</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>ID</th>
                <td>{player1.id}</td>
                <td>{player2.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{player1.name}</td>
                <td>{player2.name}</td>
              </tr>
              <tr>
                <th>Battles</th>
                <td style={this.compareStyle(player1.battles_total, player2.battles_total, 1)}>{player1.battles_total}</td>
                <td style={this.compareStyle(player1.battles_total, player2.battles_total, 2)}>{player2.battles_total}</td>
              </tr>
              <tr>
                <th>Wins</th>
                <td style={this.compareStyle(player1.wins_total, player2.wins_total, 1)}>{player1.wins_total}</td>
                <td style={this.compareStyle(player1.wins_total, player2.wins_total, 2)}>{player2.wins_total}</td>
              </tr>
              <tr>
                <th>Days</th>
                <td style={this.compareStyle(player1.days_total, player2.days_total, 1)}>{player1.days_total}</td>
                <td style={this.compareStyle(player1.days_total, player2.days_total, 2)}>{player2.days_total}</td>
              </tr>
                <tr>
                  <th>Vehicles</th>
                  <td style={this.compareStyle(player1.vehicles_x, player2.vehicles_x, 1)}>{player1.vehicles_x}</td>
                  <td style={this.compareStyle(player1.vehicles_x, player2.vehicles_x, 2)}>{player2.vehicles_x}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td style={this.compareStyle(player1.rating, player2.rating, 1)}>{player1.rating}</td>
                <td style={this.compareStyle(player1.rating, player2.rating, 2)}>{player2.rating}</td>
              </tr>
              <tr>
                <th>Experience total</th>
                <td style={this.compareStyle(player1.exp_total, player2.exp_total, 1)}>{player1.exp_total}</td>
                <td style={this.compareStyle(player1.exp_total, player2.exp_total, 2)}>{player2.exp_total}</td>
              </tr>
              <tr>
                <th>Experience average</th>
                <td style={this.compareStyle(player1.exp_avg, player2.exp_avg, 1)}>{player1.exp_avg}</td>
                <td style={this.compareStyle(player1.exp_avg, player2.exp_avg, 2)}>{player2.exp_avg}</td>
              </tr>
              <tr>
                <th>Registered</th>
                <td>{player1.created_at}</td>
                <td>{player2.created_at}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Enter valid player names</p>
        )}
      </section>
    );
  }
}
