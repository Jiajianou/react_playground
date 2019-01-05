import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {



  render() {
    //when maping
    return this.props.todos.map((todo) => (
      //todo in here is being pass onto TodoItem as a prop (property).
      //mapping generates a list, the idem in the list should have a unique id.
      <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}
//PropTypes
Todos.propTypes = {
  todos:PropTypes.array.isRequired
}

export default Todos;
