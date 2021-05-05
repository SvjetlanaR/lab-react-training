import React from 'react';

export default class ClickablePicture extends React.Component {
  state = {
    click: false,
  };

  changeImg = () => {
    this.setState(({ click }) => ({
      click: !click,
    }));
  };

  render() {
    return (
      <div>
        <img src={this.state.click ? this.props.imgClicked : this.props.img}
          onClick={this.changeImg} />
        
      </div>
    );
  }
}
