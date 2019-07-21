import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';
import customCss from './custom.module.css';




class App extends Component {
  state = {  }

  render() { 
    return ( 

      
      <div className = "App">

        <h1 className={customCss.hugeFont} >Hi earth</h1>
        <Person name="p1" age="32"/>
      </div>
    
     );
  }
}
 
export default App;


