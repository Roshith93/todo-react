 import React, { Component } from 'react';
 import TodoItem from './TodoItem'
 import PropTypes from 'prop-types'
 
class Todos extends Component {
 
   render() {
       const { todos } = this.props;
       const arrayList = todos.map(todo => (
            <TodoItem todos={todo}  key={todo.id} markComplete={this.props.markComplete} deleteHandler={this.props.deleteHandler}/>
       ))
     return (
       <div>
           {arrayList}
       </div>
     )
   }
 }

//  PropTypes

 const propstypes = {
    todos : PropTypes.array.isRequired,
 }
 Todos.propTypes = propstypes;

 export default  Todos;