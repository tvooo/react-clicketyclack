import React, { Component } from 'react';
import ClicketyClack from '../src/ClicketyClack';

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
      marginBottom: '2rem',
    };
    return (
      <div>
        <div style={cx}>
          <ClicketyClack
            lines={[
              'Hey you.',
              'Yes, you!',
              'Look at me.',
              'I type stuff.',
              'Then I erase it again.',
              'And when I\'m all out of stuff to type...',
              'I just start over.',
            ]}
            speed={speed}
            eraseSpeed={eraseSpeed}
            pause={pause}
            className="ClicketyClack"
          />
          <span className="ClicketyClack__cursor">_</span>
        </div>
      </div>
    );
  }
}

export default Preview;
