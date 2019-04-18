import React, { Component} from 'react'
import { addTodo } from '../actions/todoActions'
import '../index.css'

class TodoForm extends Component {
    state = {
        todo:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.todo !== '') {
        addTodo(this.state.todo)
    }
    this.setState({
        todo:''
    })
}

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3 className="todotext">Todo list</h3>
                <input className="formbox" type='text' name="todo" value={this.state.todo} placeholder="Enter a To Do Item..." onChange={this.handleChange} />
            </form>
        )
    }
}

export default TodoForm