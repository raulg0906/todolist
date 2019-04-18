import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div className="container">
          <TodoForm />
          <TodoList />
          
        </div>
      </Provider>
    )
  }
}

export default App
