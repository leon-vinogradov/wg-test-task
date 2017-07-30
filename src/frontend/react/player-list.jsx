import React from 'react';

import PlayerListItem from './player-list-item.jsx';

export default class PlayerList extends React.Component {
  render() {
    return (
      <section>
        <h3>Player list</h3>

        <ul>
          { this.props.players.map((player) =>
              <PlayerListItem key={player.id} player={player} onPlayerClick={this.props.onPlayerClick} />
          )}
        </ul>
      </section>
    );
  }
}
