import React, { Component } from 'react';
import ClicketyClack from '..';

class Preview extends Component {
  constructor() {
    super();

    this.state = {
      marked: 'weekend',
      speed: 100,
      eraseSpeed: 70,
      pause: 600,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(marked) {
    this.setState({ marked });
  }

  render() {
    const { speed, eraseSpeed, pause } = this.state;
    const cx = {
      fontSize: '4rem',
      fontWeight: 'bold',
    };
    return (
      <div>
        <div style={cx}>
          <ClicketyClack
            lines={['Hallo.', 'Bye.']}
            speed={speed}
            eraseSpeed={eraseSpeed}
            pause={pause}
          />&nbsp;
        </div>
        <form>
          <legend>Highlight</legend>

        </form>
      </div>
    );
  }
}

export default Preview;
