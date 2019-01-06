import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todos.isCompleted ? 'line-through' : 'none',
      backgroundColor: "#C3D4E3",
      padding:'10px',
      borderBottom: '1px #ccc dotted'
    }
  }
 
   render() {
     const {id, title} = this.props.todos;
    console.log(this.props)
     return (
       <div style={this.getStyle()}>
           <p>
             <input 
                type="checkbox" 
                onChange={this.props.markComplete.bind(this, id)} /> {' '}
               {title}{' '}
              <button onClick={this.props.deleteHandler.bind(this, id)}>x</button>
           </p>
       </div>
     )
   }
 }


//  PropTypes

 const propType = {
  todos : PropTypes.object.isRequired
}
 TodoItem.propTypes = propType;

 export default  TodoItem;