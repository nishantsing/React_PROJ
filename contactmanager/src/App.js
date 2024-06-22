import React, { Component } from 'react'
import { Provider } from './context'
//No need to put curly braces because it is exported as default.
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';



class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            {/* <Contact name="John Doe" email="john.doe@gmail.com" phone="555-555-5555" />

          <Contact name="Katie" email="katie@gmail.com" phone="254-254-5555" /> */}
            <Contacts />
          </div>

        </div>
      </Provider>
    )
  }
}

export default App;
