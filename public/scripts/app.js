"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "You need to enter an option";
      } else if (this.state.options.indexOf(option) > -1) {
        return "You've alread entered this option";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      console.log(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subTitle = "Put your life in the hands of a computer!";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          options: this.state.options,
          handleAddOption: this.handleAddOption
        }),
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(Widget, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handleDeleteOptions },
          "Remove All"
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, text: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.text
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.state = {
      error: undefined
    };

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    return _this6;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Counter = function (_React$Component7) {
  _inherits(Counter, _React$Component7);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this7 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this7.state = {
      count: 0
    };
    _this7.handleAdd = _this7.handleAdd.bind(_this7);
    _this7.handleMinus = _this7.handleMinus.bind(_this7);
    _this7.handleClear = _this7.handleClear.bind(_this7);
    return _this7;
  }

  _createClass(Counter, [{
    key: "handleMinus",
    value: function handleMinus() {

      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd() {
      this.setState(function (prevState) {
        return { count: prevState.count + 1 };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "COUNTER APP"
        ),
        React.createElement(
          "h3",
          null,
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAdd },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinus },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleClear },
          "Clear"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var VisibilityToggle = function (_React$Component8) {
  _inherits(VisibilityToggle, _React$Component8);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this8 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this8.state = {
      visible: false
    };
    _this8.handleToggle = _this8.handleToggle.bind(_this8);
    return _this8;
  }

  _createClass(VisibilityToggle, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          visible: !prevState.visible
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.handleToggle },
          this.state.visible ? "Hide info" : "Show info"
        ),
        this.state.visible && React.createElement(
          "p",
          null,
          "Hey there I'm your information"
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

var DataBtn = function (_React$Component9) {
  _inherits(DataBtn, _React$Component9);

  function DataBtn(props) {
    _classCallCheck(this, DataBtn);

    var _this9 = _possibleConstructorReturn(this, (DataBtn.__proto__ || Object.getPrototypeOf(DataBtn)).call(this, props));

    _this9.handleShowData = _this9.handleShowData.bind(_this9);
    return _this9;
  }

  _createClass(DataBtn, [{
    key: "handleShowData",
    value: function handleShowData() {
      console.log(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleShowData },
        "Show Data"
      );
    }
  }]);

  return DataBtn;
}(React.Component);

var appRoot = document.getElementById("app");

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
