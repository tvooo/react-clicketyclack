import React, { Component, PropTypes } from 'react';

class ClicketyClack extends Component {
  constructor() {
    super();

    this.state = {
      lineIndex: 0,
      characters: 0,
    };

    this.type = this.type.bind(this);
    this.erase = this.erase.bind(this);
  }

  componentDidMount() {
    this.type();
  }

  type() {
    const { pause, speed } = this.props;
    const line = this.props.lines[this.state.lineIndex];

    if (this.state.characters + 1 === line.length) {
      this.setState({
        characters: this.state.characters + 1,
      });
      setTimeout(this.erase, pause);
    } else {
      this.setState({ characters: this.state.characters + 1 });
      setTimeout(this.type, speed);
    }
  }

  erase() {
    const { pause, eraseSpeed } = this.props;
    const isLastLine = this.state.lineIndex === this.props.lines.length - 1;

    if (this.state.characters - 1 === 0) {
      if (isLastLine) {
        this.setState({
          characters: 0,
          lineIndex: 0,
        });
      } else {
        this.setState({
          characters: 0,
          lineIndex: this.state.lineIndex + 1,
        });
      }
      setTimeout(this.type, pause);
    } else {
      this.setState({ characters: this.state.characters - 1 });
      setTimeout(this.erase, eraseSpeed);
    }
  }

  render() {
    const { lines, ...rest } = this.props;
    const { lineIndex, characters } = this.state;
    const line = lines[lineIndex].slice(0, characters);

    delete rest.eraseSpeed;
    delete rest.pause;
    delete rest.speed;
    return (
      <span {...rest}>{ line }</span>
    );
  }
}

ClicketyClack.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  eraseSpeed: PropTypes.number,
  pause: PropTypes.number,
  speed: PropTypes.number,
};

ClicketyClack.defaultProps = {
  eraseSpeed: 70,
  pause: 600,
  speed: 100,
};

export default ClicketyClack;
