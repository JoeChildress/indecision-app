class ShowForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(val) {
    this.setState((prevState) => {
      return {text: val}
    });
  }

  render() {
    return (
      <div>
        <h1>My Show Form</h1>
        <Display text={this.state.text} />
        <Form handleTextChange={this.handleTextChange}/>
      </div>
    )
  }
}

const Display = (props) => {
  return (
    <div>
    <h2> Your Text</h2>
    <p>{props.text}</p>
    </div>
  )
}

const Form = (props) => {
  return (
    <form>
      <label htmlFor="newtext">Enter Text </label>
      <input 
        type="text" 
        name="newtext" 
        id="newtext"
        onChange={e => {
          props.handleTextChange(e.target.value.trim())
        }}
        ></input>
    </form>

  )
}

const appRoot = document.getElementById("app");

ReactDOM.render(<ShowForm />, appRoot);
