class App extends React.Component {
  state = {
    name: '',
    species: '',
    img: '',
    reservedForAdoption: false,
    show: true,
    animals: []
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  //create new animal
  handleSubmit = (event) => {
  event.preventDefault()
  axios
    .post('/animals', this.state)
    .then(response => {
      this.setState({ animals: response.data, name: '', species:'', img: '', reservedForAdoption: false, show: true})
    })
  }

  //change animal to reserved/not
  reserveAdopt = (event) => {
    this.setState({
      reservedForAdoption: !this.state.reservedForAdoption,
      show: !this.state.show
    })
    console.log(this.state.reservedForAdoption);
    console.log(this.state.show);
  }

  //animals available
  componentDidMount = () => {
  axios.get('/animals').then(response => {
    this.setState({
      animals: response.data
    })
  })
  }

  //delete animal
  deleteAnimal = (event) => {
  axios.delete('/animals/' + event.target.value).then(response => {
    this.setState({
      animals: response.data
    })
  })
  }

  //update animal
  updateAnimal = (event) => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/animals/' + id, this.state).then(response => {
    this.setState({
      animals: response.data,
      name: '',
      species: '',
      img: '',
      reservedForAdoption: false,
      show: true
    })
  })
  }

  render = () => {
    return (
      <div>
        <div className='create'>
          <h2>Create Animal</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" onChange={this.handleChange} />
            <br />
            <label htmlFor="species">Species</label>
            <br />
            <input type="text" id="species" onChange={this.handleChange} />
            <br />
            <label htmlFor="img">Image</label>
            <br />
            <input type="text" id="img" onChange={this.handleChange} />
            <br />
            <input type="submit" value="Create Animal" />
          </form>
        </div>
        <ul>
          { this.state.animals.map( animal => {
            return(
              <li className={this.state.show ? null : 'hide'} key={animal._id}>
                {animal.name} <br />
                <img src={animal.img} alt={animal.name} />
                {this.state.reservedForAdoption ?
                <button onClick={this.reserveAdopt}>Not Reserved</button> : <button onClick={this.reserveAdopt}>Reserved</button>}
                <button value={animal._id} onClick={this.deleteAnimal}>
                  DELETE
                </button>
                <details>
                  <summary>Edit this animal</summary>
                  <form id={animal._id} onSubmit={this.updateAnimal}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                    <br />
                    <label htmlFor="species">Species</label>
                    <br />
                    <input
                      type="text"
                      id="species"
                      onChange={this.handleChange}
                      value={this.state.species}
                    />
                    <br />
                    <label htmlFor="img">Image</label>
                    <br />
                    <input
                      type="text"
                      id="img"
                      onChange={this.handleChange}
                      value={this.state.img}
                    />
                    <br />
                    <label htmlFor="reservedForAdoption">Reserved For Adpotion</label>
                    <br />
                    <input
                      type="checkbox"
                      id="reservedForAdoption"
                      onChange={this.checkState}
                      value={this.state.reservedForAdoption}
                    />
                    <br />
                    <input type="submit" value="Update Animal" />
                  </form>
                </details>
              </li>
            )
          } ) }
        </ul>
      </div>
    )
  }

}





ReactDOM.render(<App></App>, document.querySelector('main'))
