# react-clicketyclack

[![Greenkeeper badge](https://badges.greenkeeper.io/tvooo/react-clicketyclack.svg)](https://greenkeeper.io/)

> A React component that types out lines of text, one character at a time

[![Build Status](https://travis-ci.org/tvooo/react-clicketyclack.svg?branch=master)](https://travis-ci.org/tvooo/react-clicketyclack)

## Preview

![Kermit typing it out for you](https://github.com/tvooo/react-clicketyclack/raw/master/docs/kermit.gif)

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

| Property            | PropType               | Required | Default Value |
| ------------------- | ---------------------- | -------- | ------------- |
| lines               | arrayOf(string)        | true     | -             |
| className           | string                 | false    | null          |
| erase               | bool                   | false    | true          |
| eraseSpeed          | number                 | false    | 70            |
| onComplete          | func                   | false    | null          |
| pause               | number                 | false    | 600           |
| repeat              | bool                   | false    | true          |
| speed               | number                 | false    | 100           |

### `lines`

An array of lines to be typed out, one after the other.

### `eraseSpeed`

In milliseconds, how fast each character will be erased.

### `onComplete`

Callback function to be called once all lines have been typed. Will be called multiple times when `repeat` is set
to `true`.

### `pause`

In milliseconds, the pause before starting to type or starting to erase.

### `repeat`

If set to true, it will start over once all lines have been typed.

### `pause`

In milliseconds, how fast each character will be typed.

## Other projects

react-clicketyclack was created to emulate the behaviour of [jquery.typer.js](https://github.com/layervault/jquery.typer.js).

There are other React components that do similar things:

- [react-typist](https://github.com/jstejada/react-typist)
- [react-typewriter](https://github.com/ianbjorndilling/react-typewriter)

## License

MIT License
