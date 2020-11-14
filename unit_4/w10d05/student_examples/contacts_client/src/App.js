import React from 'react'
import axios from 'axios'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount = () => {}
  getPeople = () => {}
  handleAdd = (event, formInputs) => {}
  handleDelete = deletedPerson => {}
  handleUpdate = (event, formInputs) => {}
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            people={this.state.people}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
