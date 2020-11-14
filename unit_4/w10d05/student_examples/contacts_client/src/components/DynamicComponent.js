import React from 'react'
import About from './About'
import Contact from './Contact'

export default function DynamicComponent(props) {
  const { contentTitle } = props
  let component = null
  switch (contentTitle) {
    case 'about':
      component = <About />
      break
    case 'contact':
      component = <Contact />
      break
    default:
      return null
  }
  return component
}
