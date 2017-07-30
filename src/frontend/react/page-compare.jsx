import React from 'react';

import PlayerCompare from './player-compare.jsx';

export default class PageCompare extends React.Component {
  render() {
    return (
      <div>
        <PlayerCompare players={this.props.players} />
      </div>
    );
  }
}
