import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
import uuid from 'uuid'

class App extends Component {
  state = {
    todos : [
      {
        id:uuid.v4(),
        title:"Add love",
        isCompleted : true
      },
      {
        id:uuid.v4(),
        title:"Add Sleding",
        isCompleted : false
      },
      {
        id:uuid.v4(),
        title:"Eat bath",
        isCompleted : false
      }
    ]
  }

  // toggle checked
  handleChecked = (id) => {
    this.setState({
        todos : this.state.todos.map(todo => {
              if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
              }
              return todo;
    })
  })
}
// deleteHandler
  deleteHandler = id => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    })
    // console.log("deletehandler", id)
  }
  onAddtodoHandler = title => {
    const addTitle = {
      id:uuid.v4(),
      title: title,
      isCompleted: false
    }
    this.setState({
      todos: [...this.state.todos, addTitle]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>TODO App </h1>
        <AddTodo addTodo={this.onAddtodoHandler}/>
        <Todos todos={this.state.todos} markComplete={this.handleChecked} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;
