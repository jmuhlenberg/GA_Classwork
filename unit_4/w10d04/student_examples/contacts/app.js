class CreateForm extends React.Component{
  createPerson = (event) => {
    event.preventDefault();
    axios.post(
    '/people',
    {
      name:this.state.newPersonName,
      age: this.state.newPersonAge,
    }
    ).then(
    (response) => {
        this.setState({
          people: response.data
        })
      }
    )
  }

  changeNewPersonName = (event) => {
    this.setState({
        newPersonName:event.target.value
    })
  }

  changeNewPersonAge = (event) => {
    this.setState({
        newPersonAge:event.target.value
    })
  }

  render = () => {
    return <div>
      <h2>Create Person</h2>
      <form onSubmit={this.createPerson}>
        <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name"/><br/>
        <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age"/><br/>
        <input type="submit" value="Create Person"/>
      </form>
    </div>
  }
}

class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount = () => {
    this.updatePeople();
  }

  changeUpdatePersonName = (event) => {
    this.setState({
      updatePersonName:event.target.value
    })
  }

  changeUpdatePersonAge = (event) => {
    this.setState({
      updatePersonAge:event.target.value
    })
  }

  updatePerson = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      '/people/' + id,
      {
        name:this.state.updatePersonName,
        age: this.state.updatePersonAge,
      }
    )
    .then((response) => {
      this.setState({
        people: response.data
      })
    })
  }

  updatePeople = () => {
    axios.get('/people').then(
      (response) => {
        this.setState({
          people: response.data
        })
      }
    )
  }

  deletePerson = (event) => {
    axios.delete('/people/' + event.target.value).then(
      (response) => {
        this.setState(
          {
            people: response.data
          }
        )
      }
    )
  }

  render = () => {
    return <div>
      <CreateForm createCallback={this.updatePeople}></CreateForm>
      <h2>List of People</h2>
      <ul>
        {
          this.state.people.map(
            (person) => {
              return <li>
                {person.name}: {person.age}
                <form id={person.id} onSubmit={this.updatePerson}>
                  <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                  <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                  <input type="submit" value="Update Person"/>
                </form>
                <button value={person.id} onClick={this.deletePerson}>
                  DELETE
                </button>
              </li>
            }
          )
        }
      </ul>
    </div>
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
