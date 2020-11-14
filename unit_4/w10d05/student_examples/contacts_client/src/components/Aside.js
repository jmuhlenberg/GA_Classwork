import React from 'react'
import Form from './Form.js'

export default function Aside(props) {
    return (
      <aside>
        <h1>Aside</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    )
}
