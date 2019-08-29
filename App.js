import React, { Component } from "react"
import Child from './Child'
import LangControls from './LangControls'
import LangContext from './LangContext'

export default class App extends Component {
  state ={
    lang: window.navigator.language
  }
  render() {
     const contextValue = {
       lang: this.state.lang
      }
    

    return (
      <LangContext.Provider value={contextValue}>
      <div className='AppLang'>
        <LangControls />
        <Child />
      </div>
      </LangContext.Provider>
    );
  }
}