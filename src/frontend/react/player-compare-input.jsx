import React from 'react';

export default class PlayerCompareInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input value={this.props.playerName} onChange={this.handleChange} placeholder={this.props.placeholder} />
    );
  }
}
