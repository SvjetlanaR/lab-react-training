import React from 'react';

export default class LikeButton extends React.Component {
  state = {
    count: 0,
  };

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrementClick}> Likes {this.state.count}
        </button>
      </div>
    );
  }
}

