class Experiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options : this.props.options,
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
    alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
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

      </div>
    )
  }
}

Experiment.defaultProps = {
    options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )


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

const User = function(props) {
  return (
    <div>
      <p>User: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
    </div>
  )
}

var appRoot = document.getElementById("app");

ReactDOM.render(<Experiment />,appRoot);




