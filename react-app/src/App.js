import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component {
  state = {  }

  render() { 
    return ( 
      <div className="App">

        <h1>Hi earth</h1>
        <Person name="p1" age="32"/>
      </div>
     );
  }
}
 
export default App;


