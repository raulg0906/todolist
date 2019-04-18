import store from '../store'
let id = 0

export function addTodo(todo){
    id++
    store.dispatch({
        type: 'ADD_TODO',
        item: {
            text: todo,
            status: 'pending',
            id: id

        } 
    })
}

export function changeStatus(id) {
    store.dispatch({
    type: 'CHANGE_STATUS',
    id: id
    })
}