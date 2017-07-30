import React from 'react';

import PlayerList from './player-list.jsx';
import PlayerDetails from './player-details.jsx';

export default class PageList extends React.Component {
  render() {
    return (
      <div>
        <PlayerList players={this.props.players} onPlayerClick={this.props.onPlayerClick} />
        <PlayerDetails player={this.props.selectedPlayer} />
      </div>
    );
  }
}