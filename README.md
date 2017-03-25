# react-clicketyclack

> A React component that types out text, one character at a time

[![Build Status](https://travis-ci.org/tvooo/react-writetyper.svg?branch=master)](https://travis-ci.org/tvooo/react-writetyper)

## Preview

<iframe src="//giphy.com/embed/XIqCQx02E1U9W?hideSocial=true" width="480" height="268.8" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/XIqCQx02E1U9W">via GIPHY</a></p>

(Screenshot)

(Demo)

## Getting started

```sh
npm install --save react-clicketyclack
```

```js
import React from 'react';
import ClicketyClack from 'react-clicketyclack'

const lines = [
  'Hello',
  'Goodbye',
];

const App = () => (
  <ClicketyClack lines={lines} erase repeat />
);
```

## Props

* lines _arrayOf(string)_ - an array of lines to be typed out, one after the other
* onComplete _func_ - called once all lines have been typed
* erase _bool_ - erase line once typed, and continue with next
* repeat _bool_ - repeat after all line have been typed

## License

MIT License
