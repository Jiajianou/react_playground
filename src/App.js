import React, { Component } from 'react';
import Todos from './components/Todos';
//import './App.css';



class App extends Component {


  state = {
    todos: [
      {
        id:1,
        title: 'Learn React.',
        completed: false
      },
      {
        id:2,
        title: 'Landscaping Projects.',
        completed: false
      },
      {
        id:3,
        title: 'Grocery Shopping.',
        completed: false
      }
    ]

  };


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
