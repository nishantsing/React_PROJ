import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos'
// import React from 'react';
// class App extends React.Component {}

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        comleted: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        comleted: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        comleted: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
