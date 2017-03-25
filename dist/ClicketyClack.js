'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          speed = _props.speed;

      var line = this.props.lines[this.state.lineIndex];

      if (this.state.characters + 1 === line.length) {
        this.setState({
          characters: this.state.characters + 1
        });
        setTimeout(this.erase, pause);
      } else {
        this.setState({ characters: this.state.characters + 1 });
        setTimeout(this.type, speed);
      }
    }
  }, {
    key: 'erase',
    value: function erase() {
      var _props2 = this.props,
          pause = _props2.pause,
          eraseSpeed = _props2.eraseSpeed;

      var isLastLine = this.state.lineIndex === this.props.lines.length - 1;

      if (this.state.characters - 1 === 0) {
        if (isLastLine) {
          this.setState({
            characters: 0,
            lineIndex: 0
          });
        } else {
          this.setState({
            characters: 0,
            lineIndex: this.state.lineIndex + 1
          });
        }
        setTimeout(this.type, pause);
      } else {
        this.setState({ characters: this.state.characters - 1 });
        setTimeout(this.erase, eraseSpeed);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var lines = this.props.lines;
      var _state = this.state,
          lineIndex = _state.lineIndex,
          characters = _state.characters;

      var line = lines[lineIndex].slice(0, characters);
      return _react2.default.createElement(
        'span',
        null,
        line
      );
    }
  }]);

  return ClicketyClack;
}(_react.Component);

ClicketyClack.propTypes = {
  lines: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  speed: _react.PropTypes.number,
  eraseSpeed: _react.PropTypes.number,
  pause: _react.PropTypes.number
};

ClicketyClack.defaultProps = {
  speed: 100,
  eraseSpeed: 70,
  pause: 600
};

exports.default = ClicketyClack;