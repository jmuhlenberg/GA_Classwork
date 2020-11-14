import React from 'react'
import Person from './Person.js'

export default function People (props) {
  const { people, handleDelete, handleUpdate } = props
    return (
      <div>
        {people.map(person => <Person key={person.id} person={person}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
      </div>
    )
}
