class ListApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["wiggle","smile"]
    }

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleRemoveItem(itemToRemove) {
    console.log(itemToRemove);
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return option !== itemToRemove;
        })
      }
    });
  }

  handleAddItem(newItem) {
    console.log("new item: ", newItem);
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(newItem)
      }
    })
  }

  render() {
    return (
      <div>
       <Header />
       <List options={this.state.options} handleRemoveItem={this.handleRemoveItem}/>
       <Form handleAddItem={this.handleAddItem}/>
      </div>
    )
  }
}

const Header = () => {
  return <h1>List App</h1>
}

const List = (props) => {
  return (
    <ul>
      {props.options.map((option) => {
        return (
          <li key={option}>{option} 
            <button onClick={(e)=> {
                props.handleRemoveItem(option)
            }}>Remove Item</button> 
          </li>
        )
      })}
    </ul>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      const val = e.target.elements.newitem.value.trim();
      props.handleAddItem(val);
    }} >
      <input type="text" name="newitem" />
      <button type="submit" name="submit">Add Item</button>
    </form>
  )
}
const app = document.getElementById('app');

ReactDOM.render(<ListApp />, app);