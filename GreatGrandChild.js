import React, { Component } from 'react'
import langSpecificCopy from './LangSpecificCopy'
import LangContext from './LangContext'

class GreatGrandChild extends Component {
    static contextType = LangContext
  render() {
    const copy = langSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild