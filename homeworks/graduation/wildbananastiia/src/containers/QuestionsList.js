import { connect } from 'react-redux'
import Questions, { saveAnswer } from '../actions'
import QuestionsList from '../components/QuestionList'

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(Questions())
    },
    saveAnswer: (answer, index) => {
      dispatch(saveAnswer(answer, index))
    }
  }
}

const mapStateToProps = (state) => ({ questions: state.questions });

const AllQuestionsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList)
export default AllQuestionsList