import React, { Component } from 'react'
import Input from './Input.js'

class Form extends Component {
  state = {
    name: '',
    age: ''
  }
  // Will load values into fields if this is an edit, otherwise form will be empty
  // add id for edit, not needed for create route
  // componentDidMount() {
  //   if (this.props.person) {
  //     this.setState({
  //       name: this.props.person.name,
  //       age: this.props.person.age,
  //       id: this.props.person.id
  //     })
  //   }
  // }
  // will change all the values of each input, rather than having to write a function for each one
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  // explicity show what is being passed in
  // this function will get lifted all the way up back to the app component, that will allow the main list to update after this function is completed
  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(event, {
      name: this.state.name,
      age: this.state.age,
      id: this.state.id
    })
    // clears the form
    this.setState({
      name: '',
      age: ''
    })
    // if this is the edit form, change the view back
    if (this.props.person) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'name'}
          placeholder={'Name'}
          title={'Name'}
          type={'text'}
          value={this.state.name}
          id={'name'}
        />
        <Input
          handleChange={this.handleChange}
          name={'age'}
          placeholder={'Age'}
          title={'Age'}
          type={'number'}
          value={this.state.age}
          id={'age'}
        />
        <input
          type="submit"
          value={this.props.person ? 'update this person' : 'add a person'}
        />
        {this.props.children}
      </form>
    )
  }
}

export default Form
