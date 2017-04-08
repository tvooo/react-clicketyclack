import React, { Component, PropTypes } from 'react';

const containsNonLatinCodepoints = s => /[^\u0000-\u00ff]/.test(s);

class ClicketyClack extends Component {
  constructor() {
    super();

    this.state = {
      lineIndex: 0,
      characters: 0,
    };

    this.timeout = null;

    this.type = this.type.bind(this);
    this.erase = this.erase.bind(this);
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    if (this.timeout) { clearTimeout(this.timeout); }
  }

  type() {
    const { pause, speed, lines } = this.props;
    const { characters, lineIndex } = this.state;
    const line = lines[lineIndex];
    const noChars = containsNonLatinCodepoints(line.charAt(characters))
      ? 2 : 1;

    if (characters + noChars === line.length) {
      this.setState({
        characters: line.length,
      });
      this.timeout = setTimeout(this.erase, pause);
    } else {
      this.setState({ characters: this.state.characters + noChars });
      this.timeout = setTimeout(this.type, speed);
    }
  }

  erase() {
    const { pause, eraseSpeed, lines } = this.props;
    const { characters, lineIndex } = this.state;
    const isLastLine = lineIndex === lines.length - 1;
    const line = lines[this.state.lineIndex];
    const noChars = containsNonLatinCodepoints(line.charAt(characters - 1))
      ? 2 : 1;

    if (characters - noChars === 0) {
      if (isLastLine) {
        this.setState({
          characters: 0,
          lineIndex: 0,
        });
      } else {
        this.setState({
          characters: 0,
          lineIndex: lineIndex + 1,
        });
      }
      this.timeout = setTimeout(this.type, pause);
    } else {
      this.setState({ characters: characters - noChars });
      this.timeout = setTimeout(this.erase, eraseSpeed);
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
