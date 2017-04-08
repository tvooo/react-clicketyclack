'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containsNonLatinCodepoints = function containsNonLatinCodepoints(s) {
  return (/[^\u0000-\u00ff]/.test(s)
  );
};

var ClicketyClack = function (_Component) {
  _inherits(ClicketyClack, _Component);

  function ClicketyClack() {
    _classCallCheck(this, ClicketyClack);

    var _this = _possibleConstructorReturn(this, (ClicketyClack.__proto__ || Object.getPrototypeOf(ClicketyClack)).call(this));

    _this.state = {
      lineIndex: 0,
      characters: 0
    };

    _this.type = _this.type.bind(_this);
    _this.erase = _this.erase.bind(_this);
    return _this;
  }

  _createClass(ClicketyClack, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.type();
    }
  }, {
    key: 'type',
    value: function type() {
      var _props = this.props,
          pause = _props.pause,
          speed = _props.speed,
          lines = _props.lines;
      var _state = this.state,
          characters = _state.characters,
          lineIndex = _state.lineIndex;

      var line = lines[lineIndex];
      var noChars = containsNonLatinCodepoints(line.charAt(characters)) ? 2 : 1;

      if (characters + noChars === line.length) {
        this.setState({
          characters: line.length
        });
        setTimeout(this.erase, pause);
      } else {
        this.setState({ characters: this.state.characters + noChars });
        setTimeout(this.type, speed);
      }
    }
  }, {
    key: 'erase',
    value: function erase() {
      var _props2 = this.props,
          pause = _props2.pause,
          eraseSpeed = _props2.eraseSpeed,
          lines = _props2.lines;
      var _state2 = this.state,
          characters = _state2.characters,
          lineIndex = _state2.lineIndex;

      var isLastLine = lineIndex === lines.length - 1;
      var line = lines[this.state.lineIndex];
      var noChars = containsNonLatinCodepoints(line.charAt(characters - 1)) ? 2 : 1;

      if (characters - noChars === 0) {
        if (isLastLine) {
          this.setState({
            characters: 0,
            lineIndex: 0
          });
        } else {
          this.setState({
            characters: 0,
            lineIndex: lineIndex + 1
          });
        }
        setTimeout(this.type, pause);
      } else {
        this.setState({ characters: characters - noChars });
        setTimeout(this.erase, eraseSpeed);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          lines = _props3.lines,
          rest = _objectWithoutProperties(_props3, ['lines']);

      var _state3 = this.state,
          lineIndex = _state3.lineIndex,
          characters = _state3.characters;

      var line = lines[lineIndex].slice(0, characters);

      delete rest.eraseSpeed;
      delete rest.pause;
      delete rest.speed;
      return _react2.default.createElement(
        'span',
        rest,
        line
      );
    }
  }]);

  return ClicketyClack;
}(_react.Component);

ClicketyClack.propTypes = {
  lines: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  eraseSpeed: _react.PropTypes.number,
  pause: _react.PropTypes.number,
  speed: _react.PropTypes.number
};

ClicketyClack.defaultProps = {
  eraseSpeed: 70,
  pause: 600,
  speed: 100
};

exports.default = ClicketyClack;