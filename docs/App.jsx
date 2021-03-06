import React from 'react';
import 'mdscss/index.scss';

import Preview from './Preview';
import Block from './Block';
import readme from '../README.md';
import './style.scss';

/* eslint-disable react/no-danger */

const App = () => (
  <div >
    <Block alt>
      <h1>Clickety Clack</h1>
      <Preview />
    </Block>
    <Block>
      <div
        className="mdscss"
        dangerouslySetInnerHTML={{ __html: readme }}
      />
    </Block>
  </div>
);

/* eslint-enable */

export default App;
