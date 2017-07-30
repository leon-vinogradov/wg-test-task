import React from 'react';

export default class PlayerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPlayerClick(this.props.player);
  }

  render() {
    const player = this.props.player;

    return (
      <li onClick={this.handleClick}>{player.name}</li>
    )
  }
}
