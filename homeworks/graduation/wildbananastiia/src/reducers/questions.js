const questions = (state = [], action) => {
  debugger
    switch (action.type) {
      case 'GET_QUESTIONS':
        return action.questions.results
      default:
        return state
    }
  }
  
  export default questions;