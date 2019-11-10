class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options : [],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {options:[]};
    });
  }

  handleAddOption(option) {
    if (!option){
      return "You need to enter an option"
    } else if (this.state.options.indexOf(option)> -1) {
      return "You've alread entered this option"
    }

    this.setState((prevState) => {
      return {
        options : prevState.options.concat(option),
      }
    })
  }

  handlePick() {
    console.log(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer!"; 


    return (
      <div>
        <Header title={title} subtitle={subTitle}/>
        <Action 
          hasOptions = {this.state.options.length > 0}
          handlePick = {this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption 
          options={this.state.options}
          handleAddOption = {this.handleAddOption}
        />
        {this.state.error && <p>{this.state.error}</p>}
        <Widget />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
        onClick={this.props.handlePick}
        disabled = {!this.props.hasOptions}
        >What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      {this.props.options.map((option) => <Option key={option} text={option}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
      {this.props.text}
      </div>
    )
  }
}



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=> {
      return {error};
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleMinus() {
    
    this.setState((prevState)=>{
      return {count: prevState.count -1}
    });
  }
  handleClear() {
    this.setState(() => {
      return {count: 0}
    })
  }
  handleAdd(){
    this.setState((prevState)=>{
      return {count: prevState.count +1}
    });
  }
  render() {
    return (
      <div>
        <h2>COUNTER APP</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        visible : !prevState.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h2>Visibility Toggle</h2>
        <button onClick={this.handleToggle}>{this.state.visible ? "Hide info" : "Show info"}</button>
        {this.state.visible && <p>Hey there I'm your information</p>}
      </div>
    )
  }
}

class DataBtn extends React.Component {
  constructor(props) {
    super(props)
    this.handleShowData = this.handleShowData.bind(this);
  }

  handleShowData() {
    console.log(this.props.options)
  }

  render() {
    return <button onClick={this.handleShowData}>Show Data</button>
  }
}


var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp />,appRoot);




