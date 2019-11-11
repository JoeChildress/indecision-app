class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options : ["One", "Two", "Three"]
    }
    this.handleClear = this.handleClear.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handlePick() {
    alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
  }

  handleClear() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handleAdd(val) {
    this.setState((prevState) =>{
      return {
        options : prevState.options.concat(val)
      }
    });
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer!"
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} handleClear={this.handleClear} hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options}/>
        <AddOptions handleAdd={this.handleAdd} options={this.state.options}/>
      </div>
    )
  }
};

//Action- pick option and clear all
const Action = (props) =>{

    return (
      <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>Pick an option!</button>
        <button onClick={props.handleClear}>Clear All</button>
      </div>
    )

}

//Options - list of options
const Options = (props) => {
  return (
    <div>
      {props.options.map((option) => { return <Option key={option} option={option} />})}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>{props.option}</div>
  )
}

//AddOptions - form to add options
class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:undefined
    }

    this.handleAdd= this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    const option = e.target.elements.newoption.value.trim();

    //empty or exists
    if (!option){
      this.setState(() => {
        return {error: "You must enter an option."}
      })
      return
    } else if (this.props.options.includes(option)) {
      this.setState(() => {
        return {error: "This option already exists."}
      })
      return
    }

    this.props.handleAdd(option);
    this.setState(() => {
      return {error: undefined}
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAdd}>
          <input type="text" name="newoption" />
          <button type="submit" >Add Option</button>
        </form>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const app = document.getElementById("app");

ReactDOM.render(<IndecisionApp />, app)