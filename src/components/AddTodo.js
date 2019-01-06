 import React, { Component } from 'react'
 
 class AddTodo extends Component {
    state = {
        title: ''
    }

    addTodoHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({
          title: ''
      })
    //   this.setState({})
    }
   render() {
    //    console.log(this.props)
     return (
       <form onSubmit={this.onSubmitTodo}>
           <input 
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.addTodoHandler}
            />
            <input type="submit" value="submit"/>
       </form>
     )
   }
 }
 
 export default AddTodo
 