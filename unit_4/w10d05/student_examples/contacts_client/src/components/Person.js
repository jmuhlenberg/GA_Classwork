import React from 'react'
import Form from './Form.js'

class Person extends React.Component {
  state = {
    formVisible: false
  }

  toggleForm = () => this.setState({ formVisible: !this.state.formVisible })

  render() {
    const { person, handleDelete, handleUpdate } = this.props
    return (
      <>
        <div className="person">
          <h3>
            <span> {person.name}</span> <span>{person.age}</span>
          </h3>
          <div className="person-actions">
            <button onClick={this.toggleForm}>Edit</button>
            <button
              className="delete-button"
              onClick={() => handleDelete(person)}
            >
              X
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Person
