class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options : this.props.options,
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

  }

  componentDidMount() {
    //Good for fetching data needed at start
    try{
      const options = JSON.parse(localStorage.getItem("options"));
      this.setState(() => {return ({options})});
    }catch(e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProp, prevState) {
    //Good for updating the DB
    //Save to storage only if difference in previous state.options and current state.options
    if (prevState.options.length !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      console.log(json);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options:[]}));
  }

  handleDeleteOption(optionToRemove) {
    console.log('deleting single option',optionToRemove);
    this.setState((prevState) => {
      return {
        options : prevState.options.filter((option) => {
          return option !== optionToRemove;
        })
      }
    })
  }

  handleAddOption(option) {
    if (!option){
      return "You need to enter an option"
    } else if (this.state.options.indexOf(option)> -1) {
      return "You've alread entered this option"
    }

    this.setState((prevState) => ({options : prevState.options.concat(option)}));
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
          handleDeleteOption = {this.handleDeleteOption}
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

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => <Option key={option} text={option} handleDeleteOption={props.handleDeleteOption}/>)}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.text}
      <button onClick={(e) => {
        props.handleDeleteOption(props.text);
      }} >Remove</button>
    </div>
  )
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

    this.setState(()=> ({error}));
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

var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp />,appRoot);




