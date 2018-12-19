'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mergeClassNames = require('merge-class-names');

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _detectElementOverflow = require('detect-element-overflow');

var _detectElementOverflow2 = _interopRequireDefault(_detectElementOverflow);

var _entry = require('react-calendar/dist/entry.nostyle');

var _entry2 = _interopRequireDefault(_entry);

var _entry3 = require('react-clock/dist/entry.nostyle');

var _entry4 = _interopRequireDefault(_entry3);

var _DateTimeInput = require('./DateTimeInput');

var _DateTimeInput2 = _interopRequireDefault(_DateTimeInput);

var _propTypes3 = require('./shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var allViews = ['hour', 'minute', 'second'];

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isCalendarOpen: _this.props.isCalendarOpen,
      isClockOpen: _this.props.isClockOpen
    }, _this.onClick = function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeWidgets();
      }
    }, _this.openClock = function () {
      _this.setState({
        isCalendarOpen: false,
        isClockOpen: true
      });
    }, _this.closeWidgets = function () {
      _this.setState({
        isCalendarOpen: false,
        isClockOpen: false
      });
    }, _this.toggleClock = function () {
      _this.setState(function (prevState) {
        return { isClockOpen: !prevState.isClockOpen };
      });
    }, _this.openCalendar = function () {
      _this.setState({
        isCalendarOpen: true,
        isClockOpen: false
      });
    }, _this.closeCalendar = function () {
      _this.setState({ isCalendarOpen: false });
    }, _this.toggleCalendar = function () {
      _this.setState(function (prevState) {
        return { isCalendarOpen: !prevState.isCalendarOpen };
      });
    }, _this.onChange = function (value) {
      var closeWidgets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState(function (prevState) {
        return {
          isCalendarOpen: prevState.isCalendarOpen && !closeWidgets,
          isClockOpen: prevState.isClockOpen && !closeWidgets
        };
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }, _this.onFocus = function (event) {
      switch (event.target.name) {
        case 'day':
        case 'month':
        case 'year':
          _this.openCalendar();
          break;
        case 'hour':
        case 'minute':
        case 'second':
          _this.openClock();
          break;
        default:
      }
    }, _this.stopPropagation = function (event) {
      return event.stopPropagation();
    }, _this.clear = function () {
      return _this.onChange(null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onClick);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var props = this.props;


      if (nextProps.isCalendarOpen !== props.isCalendarOpen) {
        this.setState({ isCalendarOpen: nextProps.isCalendarOpen });
      }

      if (nextProps.isClockOpen !== props.isClockOpen) {
        this.setState({ isClockOpen: nextProps.isClockOpen });
      }
    }
  }, {
    key: 'renderInputs',
    value: function renderInputs() {
      var _props = this.props,
          clearIcon = _props.clearIcon,
          calendarIcon = _props.calendarIcon,
          locale = _props.locale,
          maxDetail = _props.maxDetail,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          name = _props.name,
          required = _props.required,
          value = _props.value;
      var isCalendarOpen = this.state.isCalendarOpen;


      return _react2.default.createElement(
        'div',
        { className: 'react-datetime-picker__button' },
        _react2.default.createElement(_DateTimeInput2.default, {
          locale: locale,
          isCalendarOpen: isCalendarOpen,
          maxDetail: maxDetail,
          maxDate: maxDate,
          minDate: minDate,
          name: name,
          onChange: this.onChange,
          placeholder: this.placeholder,
          required: required,
          value: value
        }),
        _react2.default.createElement(
          'button',
          {
            className: 'react-datetime-picker__clear-button react-datetime-picker__button__icon',
            onClick: this.clear,
            onFocus: this.stopPropagation,
            type: 'button'
          },
          clearIcon
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'react-datetime-picker__calendar-button react-datetime-picker__button__icon',
            onClick: this.toggleCalendar,
            onFocus: this.stopPropagation,
            onBlur: this.resetValue,
            type: 'button'
          },
          calendarIcon
        )
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var isCalendarOpen = this.state.isCalendarOpen;


      if (isCalendarOpen === null) {
        return null;
      }

      var _props2 = this.props,
          calendarClassName = _props2.calendarClassName,
          dateTimePickerMaxDetail = _props2.maxDetail,
          dateTimePickerClassName = _props2.className,
          onChange = _props2.onChange,
          calendarProps = _objectWithoutProperties(_props2, ['calendarClassName', 'maxDetail', 'className', 'onChange']);

      var className = 'react-datetime-picker__calendar';

      return _react2.default.createElement(
        'div',
        {
          className: (0, _mergeClassNames2.default)(className, className + '--' + (isCalendarOpen ? 'open' : 'closed')),
          ref: function ref(_ref2) {
            if (!_ref2) {
              return;
            }

            _ref2.classList.remove(className + '--above-label');

            var collisions = (0, _detectElementOverflow2.default)(_ref2, document.body);

            if (collisions.collidedBottom) {
              _ref2.classList.add(className + '--above-label');
            }
          }
        },
        _react2.default.createElement(_entry2.default, _extends({
          className: calendarClassName,
          onChange: this.onChange
        }, calendarProps))
      );
    }
  }, {
    key: 'renderClock',
    value: function renderClock() {
      var isClockOpen = this.state.isClockOpen;


      if (isClockOpen === null) {
        return null;
      }

      var _props3 = this.props,
          clockClassName = _props3.clockClassName,
          timePickerClassName = _props3.className,
          maxDetail = _props3.maxDetail,
          onChange = _props3.onChange,
          clockProps = _objectWithoutProperties(_props3, ['clockClassName', 'className', 'maxDetail', 'onChange']);

      var className = 'react-datetime-picker__clock';

      var maxDetailIndex = allViews.indexOf(maxDetail);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _mergeClassNames2.default)(className, className + '--' + (isClockOpen ? 'open' : 'closed')),
          ref: function ref(_ref3) {
            if (!_ref3) {
              return;
            }

            _ref3.classList.remove(className + '--above-label');

            var collisions = (0, _detectElementOverflow2.default)(_ref3, document.body);

            if (collisions.collidedBottom) {
              _ref3.classList.add(className + '--above-label');
            }
          }
        },
        _react2.default.createElement(_entry4.default, _extends({
          className: clockClassName,
          renderMinuteHand: maxDetailIndex > 0,
          renderSecondHand: maxDetailIndex > 1
        }, clockProps))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = 'react-datetime-picker';

      return _react2.default.createElement(
        'div',
        {
          className: (0, _mergeClassNames2.default)(className, className + '--' + (this.state.isCalendarOpen || this.state.isClockOpen ? 'open' : 'closed'), this.props.className),
          onFocus: this.onFocus,
          ref: function ref(_ref4) {
            _this2.wrapper = _ref4;
          }
        },
        this.renderInputs(),
        this.renderCalendar(),
        this.renderClock()
      );
    }
  }]);

  return DateTimePicker;
}(_react.Component);

exports.default = DateTimePicker;


var CalendarIcon = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', width: '19', height: '19', viewBox: '0 0 19 19' },
  _react2.default.createElement(
    'g',
    { stroke: 'black', strokeWidth: '2' },
    _react2.default.createElement('rect', { width: '15', height: '15', x: '2', y: '2', fill: 'none' }),
    _react2.default.createElement('line', { x1: '6', y1: '0', x2: '6', y2: '4' }),
    _react2.default.createElement('line', { x1: '13', y1: '0', x2: '13', y2: '4' })
  )
);

var ClearIcon = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', width: '19', height: '19', viewBox: '0 0 19 19' },
  _react2.default.createElement(
    'g',
    { stroke: 'black', strokeWidth: '2' },
    _react2.default.createElement('line', { x1: '4', y1: '4', x2: '15', y2: '15' }),
    _react2.default.createElement('line', { x1: '15', y1: '4', x2: '4', y2: '15' })
  )
);

DateTimePicker.defaultProps = {
  clearIcon: ClearIcon,
  calendarIcon: CalendarIcon,
  isCalendarOpen: null,
  isClockOpen: null,
  maxDetail: 'minute'
};

DateTimePicker.propTypes = {
  calendarClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  clockClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  calendarIcon: _propTypes2.default.node,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  clearIcon: _propTypes2.default.node,
  isCalendarOpen: _propTypes2.default.bool,
  isClockOpen: _propTypes2.default.bool,
  locale: _propTypes2.default.string,
  maxDetail: _propTypes2.default.oneOf(allViews),
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)])
};