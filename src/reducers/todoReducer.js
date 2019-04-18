const initialState ={
   todos: [] 
}

export default function(state = initialState, action) {        //inside the parenthesis is making state default to initialState.
    switch(action.type) {
        case 'ADD_TODO':
        return{...state, todos:[...state.todos, action.item]}
        case 'CHANGE_STATUS':
        return {...state,todos: state.todos.map(todo => {
            if (todo.id === action.id) {
                return{
                    text: todo.text,
                    status: 'completed',
                    id: todo.id
                }
            }else{
                return todo
            }
        })}
        default:
        return state

    }

}