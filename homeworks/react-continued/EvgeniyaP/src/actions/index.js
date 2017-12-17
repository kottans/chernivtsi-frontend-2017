const uuidv4 = require('uuid/v4');
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: uuidv4(),
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}