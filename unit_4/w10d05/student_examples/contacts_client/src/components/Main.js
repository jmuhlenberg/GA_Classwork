import React from 'react'
import People from './People.js'

function Main(props) {
  const { people, handleDelete, handleUpdate } = props
    return (
      <main>
        <People
         people={people}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main
