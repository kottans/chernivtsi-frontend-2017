const questions = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.questions.results
    case 'CHECK_ANSWER':
      return state.map((question, index) => {
        if (index === action.id) {
          question.answer = action.answer;
        }
        return question
      })
    default:
      return state
  }
}

export default questions;