import undoable, { includeAction } from 'redux-undo'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        deleted: false
      }
    case 'DELETE_TODO':
      console.log('in delete');
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        deleted: !state.deleted
      }
    case 'TOGGLE_TODO':
      console.log('in edit');
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DELETE_TODO':
      console.log('in delete todos');
      return state.map(t =>
        todo(t, action)
      )
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO', 'DELETE_TODO']) })

export default undoableTodos
