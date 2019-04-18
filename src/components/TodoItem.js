import React, { Component } from 'react'
import { changeStatus } from '../actions/todoActions'
class TodoItem extends Component {
    
    handleClick =(e) => {
        changeStatus(this.props.id)
    }
    render() {
        return(
            <li className="listLi" onClick={this.handleClick}>{this.props.id} - {this.props.text} - {this.props.status}</li>
        )
    }
}

export default TodoItem