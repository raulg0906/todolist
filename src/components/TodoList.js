import React, { Component }from 'react'
import { connect } from 'react-redux'
import '../index.css'
import TodoItem from './TodoItem'

class TodoList extends Component{
    render() {
        return(
         <ul className="list">
             {this.props.todos.map(todo =>(
                 <TodoItem {...todo} />
             ))}
         </ul>

        )
    }
}

function mapStateToProps(appState) {
    return {
      todos: appState.todos  
    }
}

export default connect (mapStateToProps)(TodoList)